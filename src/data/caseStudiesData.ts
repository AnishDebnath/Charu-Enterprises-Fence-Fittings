import { getCloudinaryUrl } from '../utils/cloudinary';

// Application page case study files
export const applicationCaseStudyFiles = [
  'arrange-fence-fittings-on-surface',
  'chain-link-fence-surrounding-com',
  'chain-link-security-gate-system',
  'commercial-chain-link-fence-ins',
  'commercial-chain-link-gate-system',
  'create-hero-photograph-for-website',
  'create-industrial-engineering',
  // 'creating-engineering-product-flange',
  'fence-fitting-installed-on-fence',
  'fence-fitting-installed-on-fence1',
  'fence-fittings-product-photograph',
  'fence-hardware-product-photograph',
  'fence-hardware-quality-testing',
  'galvanized-chain-link-fence-inst',
  'galvanized-fence-hardware',
  'galvanized-steel-fence-hardware',
  'galvanized-steel-fence-hardware1',
  'photograph-fence-fittings',
  'powder-coated-fence-hardware',
  'powder-coated-fence-hardware-ins',
];

export const applicationSupplyImageList = applicationCaseStudyFiles.map((f) => getCloudinaryUrl(`${f}.jpg`));

export const applicationCaseStudies = applicationCaseStudyFiles.map((f) => {
  const title = f
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return { title, description: '' };
});

// Home page case study files
export const homeCaseStudyFiles = [
  'commercial-chain-link-gate-system',
  'commercial-chain-link-fence-ins',
  'galvanized-fence-hardware',
  'create-industrial-engineering',
  'galvanized-chain-link-fence-inst',
  'chain-link-fence-surrounding-com',
];

export const homeSupplyImageList = homeCaseStudyFiles.map((f) => getCloudinaryUrl(`${f}.jpg`));

export const homeCaseStudyCards = [
  { title: 'Commercial Chain-Link Fencing' },
  { title: 'Industrial Facility Perimeters' },
  { title: 'Heavy-Duty Gate Systems' },
  { title: 'High-Security & Utility Facilities' },
  { title: 'Highway & Infrastructure Barriers' },
  { title: 'Logistics & Warehouse Enclosures' },
];
