import { getCloudinaryUrl } from '../utils/cloudinary';

const shipImg1 = getCloudinaryUrl('1-warehouse-inventory-photograph.jpg');
const shipImg2 = getCloudinaryUrl('2-industrial-quality-control-inspe.jpg');
const shipImg3 = getCloudinaryUrl('3-container-loading-export-logisti.jpg');
const shipImg4 = getCloudinaryUrl('4-export-cargo-ship-at-port.jpg');

export const commonShippingSteps = [
  { id: '01', title: 'Packaging & Pallets', description: 'Anti-rust packing, strong cartons, and heat-treated pallets.', image: shipImg1, alt: 'Packaging and palletization of fence fittings' },
  { id: '02', title: 'Quality Testing', description: 'Checked for strength, ASTM A153 galvanizing, and fit.', image: shipImg2, alt: 'Quality control inspection' },
  { id: '03', title: 'Container Loading', description: 'Direct factory container stuffing and fast port customs clearance.', image: shipImg3, alt: 'Container loading and dispatch' },
  { id: '04', title: 'Global Delivery', description: 'Ocean freight to USA, Canada, Europe, and Australia with live tracking.', image: shipImg4, alt: 'Ocean shipping and delivery' },
];

export const homeShippingSteps = [
  { id: '01', title: 'Export Packaging', description: 'Anti-rust packaging, 5-ply cartons, and heat-treated wooden pallets with heavy steel strapping.', image: shipImg1, alt: 'Export packaging and pallets' },
  { id: '02', title: 'Quality Inspection', description: 'Every batch is tested for steel strength, ASTM A153 galvanizing thickness, and exact fit.', image: shipImg2, alt: 'Quality inspection' },
  { id: '03', title: 'Container Loading', description: 'Secure container stuffing at factory, port dispatch, and complete export customs clearance.', image: shipImg3, alt: 'Container loading' },
  { id: '04', title: 'Ocean Shipping & Delivery', description: 'Direct ocean freight to USA, Canada, Europe, and Australia with doorstep delivery options.', image: shipImg4, alt: 'Ocean freight delivery' },
];
