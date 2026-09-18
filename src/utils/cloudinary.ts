const BASE_URL = import.meta.env.VITE_CLOUDINARY_BASE_URL || '';

export function getCloudinaryUrl(publicId: string, options?: { width?: number; quality?: string }): string {
  if (!BASE_URL) return '';
  if (options) {
    const transforms = [];
    if (options.width) transforms.push(`w_${options.width}`);
    transforms.push(`q_${options.quality || 'auto'}`);
    transforms.push('f_auto');
    return `${BASE_URL}/${transforms.join(',')}/${publicId}`;
  }
  return `${BASE_URL}/${publicId}`;
}

export function getCloudinaryVideoUrl(publicId: string): string {
  if (!BASE_URL) return '';
  const videoBase = BASE_URL.replace('/image/upload/', '/video/upload/');
  return `${videoBase}/${publicId}`;
}
