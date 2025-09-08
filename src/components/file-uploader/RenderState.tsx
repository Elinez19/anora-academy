import { cn } from "@/lib/utils";
import { CloudUpload, ImageIcon, Loader2, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export function RenderEmptyState({ isDragActive }: { isDragActive: boolean }) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-2 mx-auto size-12 rounded-full bg-muted mb-4">
        <CloudUpload
          className={cn(
            "size-6 text-muted-foreground",
            isDragActive && "text-primary"
          )}
        />
      </div>
      <p className="text-base font-semibold text-foreground">
        Drop your files here or{" "}
        <span className="text-primary font-bold cursor-pointer">
          click to select files
        </span>
      </p>
      <Button type="button" className="mt-4 cursor-pointer">
        Select files
      </Button>
    </div>
  );
}

export function RenderErrorState() {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-2 mx-auto size-12 rounded-full bg-destructive/30 mb-4">
        <ImageIcon className="size-6 text-destructive" />
      </div>
      <p className="text-base font-semibold text-destructive">
        Failed to upload files
      </p>
      <p className="text-xs text-muted-foreground">Something went wrong</p>
      <Button type="button" className="mt-4 cursor-pointer">
        Click or Try again
      </Button>
    </div>
  );
}

export function RenderLoadingState() {
  return (
    <div className="text-center">
      <p className="text-base font-semibold text-foreground">Loading...</p>
    </div>
  );
}

export function RenderUploadedState({
  previewUrl,
  isDeleting,
  handleRemoveFile,
}: {
  previewUrl: string;
  isDeleting: boolean;
  handleRemoveFile: () => void;
}) {
  return (
    <div className="text-center">
      <Image src={previewUrl} alt="uploaded file" width={100} height={100} />
      <Button
        variant="destructive"
        size="icon"
        className={cn("absolute top-4 right-4")}
        onClick={handleRemoveFile}
        disabled={isDeleting}
      >
        {isDeleting ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <XIcon className="size-4" />
        )}
      </Button>
    </div>
  );
}

export function RenderUploadingState({
  progress,
  file,
}: {
  progress: number;
  file: File;
}) {
  return (
    <div className="text-center flex items-center justify-center gap-2">
      <p className="text-sm font-semibold text-foreground mt-2">Uploading...</p>
      <p className="text-xs text-muted-foreground mt-1 truncate max-w-xs">
        {file.name}
      </p>
      <p className="text-xs text-muted-foreground mt-1">{progress}%</p>
    </div>
  );
}
