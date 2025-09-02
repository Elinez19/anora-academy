import { env } from "@/lib/env"
import { PutObjectCommand } from "@aws-sdk/client-s3"
import { NextResponse } from "next/server"
import {  z} from "zod"
import { v4 as uuidv4 } from "uuid"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { s3Client } from "@/lib/s3Client"
export const fileUploadSchema = z.object({
    fileName: z.string().min(1, {message: "File name is required"}),
   contentType: z.string().min(1, {message: "Content type is required"}),
   size: z.number().min(1, {message: "Size is required"}),
   isImage: z.boolean()
})
export async function POST(request:Request) {
 try {  
    const body = await request.json()
    const validation = fileUploadSchema.safeParse(body)
    if(!validation.success) {
        return NextResponse.json({error: "Invalid request body", details: validation.error.flatten().fieldErrors}, {status: 400})  
    }
    const { fileName, contentType, size } = validation.data
    const key = `${uuidv4()}-${fileName}`

    const command = new PutObjectCommand({
        Bucket: env.NEXT_PUBLIC_S3_NAME_BUCKET_IMAGES,
        ContentType: contentType,
        ContentLength: size,
        Key: key,
    })
    const presignedUrl = await getSignedUrl(s3Client, command, {
        expiresIn: 360,
    })
    const response = {
      presignedUrl,
      key:key,
    }
    return NextResponse.json(response, {status: 200})
 } catch (error) {
    console.error(error)
    return NextResponse.json({error: "Failed to generate presigned url"}, {status: 500})
 }
}