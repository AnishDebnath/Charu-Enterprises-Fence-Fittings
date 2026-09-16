const imageFiles = import.meta.glob<string>('../assets/product-images/*', {
  eager: true,
  import: 'default',
});

const imageMap: Record<number, string> = {};

for (const [path, url] of Object.entries(imageFiles)) {
  const filename = path.split('/').pop() || '';
  const match = filename.match(/^(\d+)\./);
  if (match) {
    const itemNum = parseInt(match[1], 10);
    imageMap[itemNum] = url;
  }
}

export function getProductImage(itemNumber: number): string {
  return imageMap[itemNumber] || '';
}

export const ALL_PRODUCT_IMAGES = imageMap;
