/* eslint-disable react/no-unescaped-entities */
"use client"
import { useCallback, useState } from 'react'
import {useDropzone, FileRejection} from 'react-dropzone'
import { Card, CardContent } from '../ui/card'
import { cn } from '@/lib/utils'
import { RenderEmptyState } from './RenderState'
import { toast } from 'sonner'
import { v4 as uuidv4 } from 'uuid';

interface UploaderState {
    id: string | null
    file: File | null
    uploaded: boolean
    progress: number
    key: string
    isDeleting: boolean
    error: boolean
    objectURL?: string | null
    fileType: "image" | "video" 
}
export function FileUploader() {

   
    const [ fileState, setFileState ] = useState<UploaderState>({
        id: null,
        error: false,
        file: null,
        uploaded: false,
        progress: 0,
        key: "",
        isDeleting: false,
        fileType: "image",
        objectURL: null
    })
    function rejectFile(fileRejections: FileRejection[]) {
      if(fileRejections.length) {
        const tooManayfiles = fileRejections.find(
            rejection => rejection.errors[0].code === "too-many-files"
        )
        const fileTooLarge = fileRejections.find(
            rejection => rejection.errors[0].code === "file-too-large"
        )
        if(fileTooLarge) {
          toast.error("File is too large, maximum 5MB allowed")
        }
        if(tooManayfiles) {
          toast.error("Too many files, maximum 1 file allowed")
        }
      }
    }
    const onDrop = useCallback((acceptedFiles: File[]) => {
        if(acceptedFiles.length > 0) { 
            const file = acceptedFiles[0]
            setFileState({
                id: file.name,
                file: file,
                uploaded: false,
                progress: 0,
                key: uuidv4(),
                isDeleting: false,
                error: false,
                fileType: "image",
                objectURL: URL.createObjectURL(file)
            })
        }
      }, [])    
      const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop, 
        accept: {
        'image/*': ['.png', '.jpg', '.jpeg'],
      },
      maxFiles: 1,
      multiple: false,
      maxSize: 1024 * 1024 * 5,
      onDropRejected: rejectFile,
    })



function uploadFile(file: File) {
    setFileState((prev) => (
        {
            ...prev, 
            uploaded: true,
            progress: 0,
            
        }
    )
    )
    try {
       
    } catch (error) {
        console.error(error)
    }
}


    return (
        <Card {...getRootProps()} className={cn( "relative border-2 border-dashed transition-colors duration-300 ease-in-out w-full h-64", isDragActive ? "border-primary bg-primary/10 border-solid" : "border-border hover:border-primary")}>
       <CardContent className='flex items-center justify-center w-full p-4'>
        <input {...getInputProps()} />
         <RenderEmptyState isDragActive={isDragActive} />
         {/* <RenderErrorState /> */}
       </CardContent>
      </Card>
    )
}