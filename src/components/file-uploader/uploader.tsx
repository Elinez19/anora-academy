"use client";
import { useCallback, useEffect, useState } from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import {
  RenderEmptyState,
  RenderErrorState,
  RenderUploadedState,
  RenderUploadingState,
} from "./RenderState";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";

interface UploaderState {
  id: string | null;
  file: File | null;
  uploaded: boolean;
  progress: number;
  key: string;
  isDeleting: boolean;
  error: boolean;
  objectURL?: string | null;
  fileType: "image" | "video";
}

interface iAppProps {
  value: string;
  onChange?: (value: string) => void;
}
export function FileUploader({ value, onChange }: iAppProps) {
  const [fileState, setFileState] = useState<UploaderState>({
    id: null,
    error: false,
    file: null,
    uploaded: false,
    progress: 0,
    key: value,
    isDeleting: false,
    fileType: "image",
    objectURL: null,
  });
  function rejectFile(fileRejections: FileRejection[]) {
    if (fileRejections.length) {
      const tooManayfiles = fileRejections.find(
        (rejection) => rejection.errors[0].code === "too-many-files"
      );
      const fileTooLarge = fileRejections.find(
        (rejection) => rejection.errors[0].code === "file-too-large"
      );
      if (fileTooLarge) {
        toast.error("File is too large, maximum 5MB allowed");
      }
      if (tooManayfiles) {
        toast.error("Too many files, maximum 1 file allowed");
      }
    }
  }

  function renderContent() {
    if (fileState.uploaded) {
      return (
        <RenderUploadingState
          progress={fileState.progress}
          file={fileState.file as File}
        />
      );
    }
    if (fileState.error) {
      return <RenderErrorState />;
    }

    if (fileState.objectURL) {
      return (
        <RenderUploadedState
          previewUrl={fileState.objectURL}
          isDeleting={fileState.isDeleting}
          handleRemoveFile={handleRemoveFile}
        />
      );
    }

    return <RenderEmptyState isDragActive={isDragActive} />;
  }

  useEffect(() => {
    return () => {
      if (fileState.objectURL && !fileState.objectURL.startsWith("http")) {
        URL.revokeObjectURL(fileState.objectURL);
      }
    };
  }, [fileState.objectURL]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];

        if (fileState.objectURL && !fileState.objectURL.startsWith("http")) {
          URL.revokeObjectURL(fileState.objectURL);
        }
        setFileState({
          id: file.name,
          file: file,
          uploaded: false,
          progress: 0,
          key: uuidv4(),
          isDeleting: false,
          error: false,
          fileType: "image",
          objectURL: URL.createObjectURL(file),
        });
        uploadFile(file);
      }
    },
    [fileState.objectURL]
  );

  async function handleRemoveFile() {
    if (fileState.isDeleting || !fileState.objectURL) return;
    try {
      setFileState((prev) => ({
        ...prev,
        isDeleting: true,
      }));
      const response = await fetch("/api/s3/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: fileState.key }),
      });
      if (!response.ok) {
        toast.error("Failed to remove file from storage");
        setFileState((prev) => ({
          ...prev,
          isDeleting: true,
          error: true,
        }));
        return;
      }
      if (fileState.objectURL && !fileState.objectURL.startsWith("http")) {
        URL.revokeObjectURL(fileState.objectURL);
      }
      onChange?.("");
      setFileState(() => ({
        file: null,
        objectURL: null,
        uploaded: false,
        progress: 0,
        key: "",
        isDeleting: false,
        error: false,
        fileType: "image",
        id: null,
      }));
      toast.success("File removed successfully");
    } catch {
      toast.error("Error removing file. Please try again.");
      setFileState((prev) => ({
        ...prev,
        isDeleting: false,
        error: true,
      }));
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg"],
    },
    maxFiles: 1,
    multiple: false,
    maxSize: 1024 * 1024 * 5,
    onDropRejected: rejectFile,
    disabled: fileState.uploaded || !!fileState.objectURL,
  });

  async function uploadFile(file: File) {
    setFileState((prev) => ({
      ...prev,
      uploaded: true,
      progress: 0,
    }));
    try {
      const presignedResponse = await fetch("/api/s3/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fileName: file.name,
          contentType: file.type,
          size: file.size,
          isImage: file.type.startsWith("image/"),
        }),
      });
      if (!presignedResponse.ok) {
        toast.error("Failed to generate presigned url");
        setFileState((prev) => ({
          ...prev,
          error: true,
          uploaded: false,
          progress: 0,
        }));
        return;
      }
      const { presignedUrl, key } = await presignedResponse.json();
      await new Promise<void>((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.upload.onprogress = (event) => {
          if (event.lengthComputable) {
            const percentageCompleted = Math.round(
              (event.loaded / event.total) * 100
            );
            setFileState((prev) => ({
              ...prev,
              progress: percentageCompleted,
            }));
          }
        };
        xhr.onload = () => {
          if (xhr.status === 200 || xhr.status === 201) {
            setFileState((prev) => ({
              ...prev,
              uploaded: false,
              progress: 100,
              key: key,
            }));
            onChange?.(key);
            toast.success("File uploaded successfully");
            resolve();
          } else {
            console.error(
              "Upload failed with status:",
              xhr.status,
              xhr.responseText
            );
            toast.error(`Upload failed: ${xhr.status} ${xhr.statusText}`);
            reject(new Error(`Upload failed with status: ${xhr.status}`));
          }
        };

        xhr.onerror = () => {
          reject(new Error("Failed to upload file"));
        };
        xhr.open("PUT", presignedUrl);
        xhr.setRequestHeader("Content-Type", file.type);
        xhr.send(file);
      });
    } catch {
      toast.error("Something went wrong");
      setFileState((prev) => ({
        ...prev,
        error: true,
        uploaded: false,
        progress: 0,
      }));
    }
  }

  return (
    <Card
      {...getRootProps()}
      className={cn(
        "relative border-2 border-dashed transition-colors duration-300 ease-in-out w-full h-64",
        isDragActive
          ? "border-primary bg-primary/10 border-solid"
          : "border-border hover:border-primary"
      )}
    >
      <CardContent className="flex items-center justify-center w-full p-4">
        <input {...getInputProps()} />
        {renderContent()}
      </CardContent>
    </Card>
  );
}
