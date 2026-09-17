const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'YOUR_CLOUD_NAME';
const CLOUDINARY_BASE = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload`;

export interface CloudinaryOptions {
  width?: number;
  height?: number;
  quality?: number | 'auto';
  format?: 'auto' | 'webp' | 'jpg' | 'png';
  crop?: 'fill' | 'fit' | 'scale' | 'pad';
  gravity?: 'auto' | 'center' | 'face';
}

export function cloudinaryUrl(publicId: string, options: CloudinaryOptions = {}): string {
  const {
    width,
    height,
    quality = 'auto',
    format = 'auto',
    crop = 'fill',
    gravity = 'auto',
  } = options;

  const parts: string[] = [];

  if (width || height) {
    const transforms: string[] = [];
    if (width) transforms.push(`w_${width}`);
    if (height) transforms.push(`h_${height}`);
    transforms.push(`c_${crop}`, `g_${gravity}`);
    parts.push(transforms.join(','));
  }

  parts.push(`q_${quality}`, `f_${format}`);

  return `${CLOUDINARY_BASE}/${parts.join('/')}/${publicId}`;
}

export function productImage(itemNumber: number, options?: CloudinaryOptions): string {
  return cloudinaryUrl(`products/${itemNumber}`, options);
}

export function testimonialImage(id: number, options?: CloudinaryOptions): string {
  return cloudinaryUrl(`testimonials/${id}`, options);
}

export function staticImage(name: string, options?: CloudinaryOptions): string {
  return cloudinaryUrl(`site/${name}`, options);
}
