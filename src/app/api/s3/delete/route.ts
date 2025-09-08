import { NextResponse } from "next/server";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { env } from "@/lib/env";
import { s3Client } from "@/lib/S3Client";

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const key = body.key;
    if (!key) {
      return NextResponse.json(
        { error: "Missing or invalid key" },
        { status: 400 }
      );
    }
    const command = new DeleteObjectCommand({
      Bucket: env.NEXT_PUBLIC_S3_NAME_BUCKET_IMAGES,
      Key: key,
    });
    await s3Client.send(command);
    return NextResponse.json(
      { message: "File deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete file" },
      { status: 500 }
    );
  }
}
