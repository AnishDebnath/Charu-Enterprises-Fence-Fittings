import { productImage } from '../lib/cloudinary';

const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || '';

const imageFiles = import.meta.glob<string>('../assets/product-images/*', {
  eager: true,
  import: 'default',
});

const localImageMap: Record<number, string> = {};

for (const [path, url] of Object.entries(imageFiles)) {
  const filename = path.split('/').pop() || '';
  const match = filename.match(/^(\d+)\./);
  if (match) {
    const itemNum = parseInt(match[1], 10);
    localImageMap[itemNum] = url;
  }
}

export function getProductImage(itemNumber: number): string {
  if (CLOUDINARY_CLOUD_NAME && !CLOUDINARY_CLOUD_NAME.startsWith('YOUR')) {
    return productImage(itemNumber);
  }
  return localImageMap[itemNumber] || '';
}

export function getProductImageUrl(itemNumber: number): string {
  if (CLOUDINARY_CLOUD_NAME && !CLOUDINARY_CLOUD_NAME.startsWith('YOUR')) {
    return productImage(itemNumber, { width: 800, quality: 'auto' });
  }
  return localImageMap[itemNumber] || '';
}

export const ALL_PRODUCT_IMAGES = localImageMap;
