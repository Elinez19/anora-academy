import "server-only"
import { S3Client } from "@aws-sdk/client-s3";
import { env } from "./env";

export const s3Client = new S3Client({
   region: "auto",
   endpoint: env.AWS_S3_ENDPOINT_URL,
   forcePathStyle: false,
});