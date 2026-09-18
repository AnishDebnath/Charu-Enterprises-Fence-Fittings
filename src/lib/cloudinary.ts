import { getCloudinaryUrl, getCloudinaryVideoUrl } from '../utils/cloudinary';

export interface CloudinaryOptions {
  width?: number;
  height?: number;
  quality?: number | 'auto';
  format?: 'auto' | 'webp' | 'jpg' | 'png';
  crop?: 'fill' | 'fit' | 'scale' | 'pad';
  gravity?: 'auto' | 'center' | 'face';
}

export function cloudinaryUrl(publicId: string, options: CloudinaryOptions = {}): string {
  const base = getCloudinaryUrl(publicId);
  if (!base) return '';
  const {
    width,
    height,
    quality = 'auto',
    format = 'auto',
    crop = 'fill',
    gravity = 'auto',
  } = options;

  const transforms: string[] = [];
  if (width || height) {
    if (width) transforms.push(`w_${width}`);
    if (height) transforms.push(`h_${height}`);
    transforms.push(`c_${crop}`, `g_${gravity}`);
  }
  transforms.push(`q_${quality}`, `f_${format}`);

  return `${base}/${transforms.join('/')}`;
}

export function productImage(slug: string, options?: CloudinaryOptions): string {
  return cloudinaryUrl(`products/${slug}`, options);
}

export function bannerImage(name: string, options?: CloudinaryOptions): string {
  return cloudinaryUrl(`banners/${name}`, options);
}

export function founderImage(name: string, options?: CloudinaryOptions): string {
  return cloudinaryUrl(`founders/${name}`, options);
}

export function testimonialImage(name: string, options?: CloudinaryOptions): string {
  return cloudinaryUrl(`testimonials/${name}`, options);
}

export function shippingImage(name: string, options?: CloudinaryOptions): string {
  return cloudinaryUrl(`shipping/${name}`, options);
}

export function caseStudyImage(name: string, options?: CloudinaryOptions): string {
  return cloudinaryUrl(`case-study/${name}`, options);
}

export function badgeImage(name: string, options?: CloudinaryOptions): string {
  return cloudinaryUrl(`badges/${name}`, options);
}

export function certificateImage(name: string, options?: CloudinaryOptions): string {
  return cloudinaryUrl(`certificates/${name}`, options);
}

export function aboutImage(name: string, options?: CloudinaryOptions): string {
  return cloudinaryUrl(`about/${name}`, options);
}

export function siteImage(name: string, options?: CloudinaryOptions): string {
  return cloudinaryUrl(name, options);
}

export function videoUrl(name: string): string {
  return getCloudinaryVideoUrl(name);
}

export { getCloudinaryUrl } from '../utils/cloudinary';
