import { getCloudinaryUrl } from '../utils/cloudinary';

const BASE_URL = import.meta.env.VITE_CLOUDINARY_BASE_URL || '';

const PRODUCT_SLUGS: Record<number, string> = {
  1: '1-barbed-arm-14-ga-16-ga',
  2: '2-barbed-arm-vertical-16-ga',
  3: '3-barbed-arm-cup-type',
  4: '4-barbed-y-arm-14-ga-16-ga',
  5: '5-boulevard-clamp-14-ga-16-ga-line-rail-clamp',
  6: '6-box-hinge-malleable',
  7: '7-box-hinge-press-steel',
  8: '8-brace-band-regular-34-x-12-ga',
  9: '9-bull-dog-hinge-pressed-steel',
  10: '10-bullet-cap-aluminium',
  11: '11-carriage-bolt-nut',
  12: '12-cantilever-roller-nylon-pressed-steel-with-cover',
  13: '13-cantilever-roller-nylon-pressed-steel-without-cover',
  14: '14-cantiliver-malleable',
  15: '15-collar',
  16: '16-drop-rod',
  17: '17-end-clamp',
  18: '18-female-hinge',
  19: '19-flange-plate',
  20: '20-floor-flange-malleable',
  21: '21-fork',
  22: '22-fork-collar-assambly',
  23: '23-gate-clip',
  24: '24-gate-corner-pressed-steel',
  25: '25-gate-corner-aluminium',
  26: '26-hog-ring-aluminium',
  27: '27-industrial-offset-hinge-malleable-180',
  28: '28-industrial-offset-hinge-pressed-steel-180',
  29: '29-kennel-clamp',
  30: '30-loop-cap-aluminium',
  31: '31-loop-cap-pressed-steel',
  32: '32-male-hinge',
  33: '33-post-cap-pressed-steel',
  34: '34-post-cap-aluminium',
  35: '35-purlin-backet',
  36: '36-rail-end-aluminium',
  37: '37-rail-end-1-hole-pressed-steel',
  38: '38-rail-end-2-hole-pressed-steel',
  39: '39-rail-end-half-moon-pressed-steel',
  40: '40-rail-end-malleable',
  41: '41-ratched-winder-with-malleable-shaft',
  42: '42-42-1pc-6-double-carrier-wheel_-2pc-track-wheel_-6pc-track-bracket_-1pc-rolon-bracket_-2pc-adjustable-bracket',
  43: '43-saddle-clamp',
  44: '44-sleeve-top-rail',
  45: '45-single-wheel',
  46: '46-46-tension-band-regular-34x-14-ga',
  47: '47-tension-bar',
  48: '48-tie-wire-aluminium',
  49: '49-track-10',
  50: '50-truss-rod',
  51: '51-truss-rod-tightener',
  52: '52-unversal-line-track-bracket',
  53: '53-wall-spike-740mm',
  54: '54-wire-winder',
  55: '55-wood-steel-adapter',
  56: '56-walk-gate-set-single-collar-2-pcs_-fork-1-pcs_-female-2-pcs_-male-2-pcs_-bolt-3l8x3-2-pcs-3i8x2-2-pcs_-drop-rod-1-pcs',
  57: '57-57-walk-gate-set-doublecollar-2-pcs_-fork-1-pcs_female-6-pcs_-male-4-pcs_-bolt-38x3-4-pcs-3l8x2-6-pcs_-drop-rod-1-pcs',
  58: '58-58-wheels-for-sliding-gates-double-wheel-gate-carrier-w-6-solid-rubber',
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
