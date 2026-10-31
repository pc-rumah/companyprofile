const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const BUCKET_NAME = process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET || "videos";

/**
 * Generates the public URL for a video stored in Supabase Storage.
 * If NEXT_PUBLIC_SUPABASE_URL is not configured, it gracefully falls back to the local public folder.
 *
 * @param fileName - File name or path (e.g. "production.mp4" or "/video/production.mp4")
 * @returns Public URL string
 */
export function getVideoUrl(fileName: string): string {
  if (!fileName) return "";

  // If already an absolute URL (http:// or https://), return as is
  if (fileName.startsWith("http://") || fileName.startsWith("https://")) {
    return fileName;
  }

  // Strip leading slash or "video/" prefix if provided
  const cleanFileName = fileName.replace(/^\/?(video\/)?/, "");

  if (SUPABASE_URL) {
    return `${SUPABASE_URL.replace(/\/$/, "")}/storage/v1/object/public/${BUCKET_NAME}/${cleanFileName}`;
  }

  // Fallback to local /video folder
  return `/video/${cleanFileName}`;
}
