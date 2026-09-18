const BASE_URL = import.meta.env.VITE_CLOUDINARY_BASE_URL || '';

export function getCloudinaryUrl(publicId: string): string {
  if (!BASE_URL) return '';
  return `${BASE_URL}/${publicId}`;
}

export function getCloudinaryVideoUrl(publicId: string): string {
  if (!BASE_URL) return '';
  const videoBase = BASE_URL.replace('/image/upload/', '/video/upload/');
  return `${videoBase}/${publicId}`;
}
