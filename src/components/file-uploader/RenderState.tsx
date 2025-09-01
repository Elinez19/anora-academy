import { cn } from "@/lib/utils";
import { CloudUpload, ImageIcon } from "lucide-react";
import { Button } from "../ui/button";

export function RenderEmptyState({isDragActive}:{isDragActive: boolean}){
    return(
        <div className="text-center">
        <div className="flex items-center justify-center gap-2 mx-auto size-12 rounded-full bg-muted mb-4">
            <CloudUpload className={cn("size-6 text-muted-foreground", isDragActive && "text-primary")} />
        </div>
            <p className="text-base font-semibold text-foreground">Drop your files here or <span className="text-primary font-bold cursor-pointer">click to select files</span></p>
            <Button type="button" className="mt-4 cursor-pointer">Select files</Button>
        </div>
    )
}

export function RenderErrorState(){
    return(
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mx-auto size-12 rounded-full bg-destructive/30 mb-4">
            <ImageIcon className="size-6 text-destructive" />
        </div>
        <p className="text-base font-semibold text-destructive">Failed to upload files</p>
        <p className="text-xs text-muted-foreground">Something went wrong</p>
        <Button type="button" className="mt-4 cursor-pointer">Click or  Try again</Button>
        </div>
    )
}

export function RenderLoadingState(){
    return(
        <div className="text-center">
            <p className="text-base font-semibold text-foreground">Loading...</p>
        </div>
    )
}