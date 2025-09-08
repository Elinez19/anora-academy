import "server-only"
import { S3Client } from "@aws-sdk/client-s3";
import { env } from "./env";

export const s3Client = new S3Client({
   region: env.AWS_REGION || "us-east-1",
   ...(env.AWS_ACCESS_KEY_ID && env.AWS_SECRET_ACCESS_KEY && {
      credentials: {
         accessKeyId: env.AWS_ACCESS_KEY_ID,
         secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
      }
   }),
   ...(env.AWS_S3_ENDPOINT_URL && { endpoint: env.AWS_S3_ENDPOINT_URL }),
   forcePathStyle: false,
});