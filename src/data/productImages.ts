import { getCloudinaryUrl } from '../utils/cloudinary';

const BASE_URL = import.meta.env.VITE_CLOUDINARY_BASE_URL || '';

const PRODUCT_SLUGS: Record<number, string> = {
  1: '1-charufence-barbed-arm-14-ga-16-ga',
  2: '2-charufence-barbed-arm-vertical-16-ga',
  3: '3-charufence-barbed-arm-cup-type',
  4: '4-charufence-barbed-y-arm-14-ga-16-ga',
  5: '5-charufence-boulevard-clamp-14-ga-16-ga',
  6: '6-charufence-box-hinge-malleable',
  7: '7-charufence-box-hinge-pressed-steel',
  8: '8-charufence-brace-band-regular-3-4-x-12-ga',
  9: '9-charufence-bull-dog-hinge-pressed-steel',
  10: '10-charufence-bullet-cap-aluminium',
  11: '11-charufence-carriage-bolt-nut',
  12: '12-charufence-cantilever-roller-nylon-pressed-steel-with-cover',
  13: '13-charufence-cantilever-roller-nylon-pressed-steel-without-cover',
  14: '14-charufence-cantilever-malleable',
  15: '15-charufence-collar',
  16: '16-charufence-drop-rod',
  17: '17-charufence-end-clamp',
  18: '18-charufence-female-hinge',
  19: '19-charufence-flange-plate',
  20: '20-charufence-floor-flange-malleable',
  21: '21-charufence-fork',
  22: '22-charufence-fork-collar-assembly',
  23: '23-charufence-gate-clip',
  24: '24-charufence-gate-corner-pressed-steel',
  25: '25-charufence-gate-corner-aluminium',
  26: '26-charufence-hog-ring-aluminium',
  27: '27-charufence-industrial-offset-hinge-malleable-180',
  28: '28-charufence-industrial-offset-hinge-pressed-steel-180',
  29: '29-charufence-kennel-clamp',
  30: '30-charufence-loop-cap-aluminium',
  31: '31-charufence-loop-cap-pressed-steel',
  32: '32-charufence-male-hinge',
  33: '33-charufence-post-cap-pressed-steel',
  34: '34-charufence-post-cap-aluminium',
  35: '35-charufence-purlin-bracket',
  36: '36-charufence-rail-end-aluminium',
  37: '37-charufence-rail-end-1-hole-pressed-steel',
  38: '38-charufence-rail-end-2-hole-pressed-steel',
  39: '39-charufence-rail-end-half-moon-pressed-steel',
  40: '40-charufence-rail-end-malleable',
  41: '41-charufence-ratchet-winder-malleable-shaft',
  42: '42-charufence-rolling-gate-hardware-kit',
  43: '43-charufence-saddle-clamp',
  44: '44-charufence-sleeve-top-rail',
  45: '45-charufence-single-wheel',
  46: '46-charufence-tension-band-regular-3-4-x-14-ga',
  47: '47-charufence-tension-bar',
  48: '48-charufence-tie-wire-aluminium',
  49: '49-charufence-track-10ft',
  50: '50-charufence-truss-rod',
  51: '51-charufence-truss-rod-tightener',
  52: '52-charufence-universal-line-track-bracket',
  53: '53-charufence-wall-spike-740mm',
  54: '54-charufence-wire-winder',
  55: '55-charufence-wood-steel-adapter',
  56: '56-charufence-walk-gate-set-single',
  57: '57-charufence-walk-gate-set-double',
  58: '58-charufence-wheels-sliding-gates-double-wheel-carrier',
};

export function getProductImage(itemNumber: number): string {
  if (BASE_URL) {
    const slug = PRODUCT_SLUGS[itemNumber];
    if (slug) return getCloudinaryUrl(`${slug}.jpg`);
  }
  return '';
}

export function getProductImageUrl(itemNumber: number, options?: { width?: number }): string {
  if (BASE_URL) {
    const slug = PRODUCT_SLUGS[itemNumber];
    if (slug) return getCloudinaryUrl(`${slug}.jpg`, { width: options?.width || 800 });
  }
  return '';
}

export const ALL_PRODUCT_IMAGES: Record<number, string> = {};
