import { env } from "@/lib/env";

export const useConstructUrl = (fileKey: string): string => {
  return `https://${env.NEXT_PUBLIC_S3_NAME_BUCKET_IMAGES}.fly.storage.tigris.dev/${fileKey}`;
};
