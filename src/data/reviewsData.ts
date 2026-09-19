import { getCloudinaryUrl } from '../utils/cloudinary';

const clientImg1 = getCloudinaryUrl('client-1.jpg');
const clientImg2 = getCloudinaryUrl('client-2.jpg');
const clientImg3 = getCloudinaryUrl('client-3.jpg');
const clientImg4 = getCloudinaryUrl('client-4.jpg');
const clientImg5 = getCloudinaryUrl('client-5.jpg');

export const commonReviews = [
  { id: 1, rating: '5.0', ratingText: '5.0 Rating • Container Orders', quote: 'Charu Enterprises has supplied our US warehouses for 8+ years. Galvanizing and dimensions are always reliable.', name: 'Robert M. Gallagher', role: 'VP Procurement (Texas, USA)', avatar: clientImg1, image: '' },
  { id: 2, rating: '5.0', ratingText: '5.0 Rating • Custom Tooling', quote: 'Their tool room made our custom roller parts with zero flaws. Containers arrive safely packed and on time.', name: 'David L. Tremblay', role: 'Director of Sourcing (Ontario, Canada)', avatar: clientImg2, image: '' },
  { id: 3, rating: '4.95', ratingText: '4.95 Rating • Quality & Delivery', quote: 'Working with the Charu team is seamless. Clear communication, fair prices, and reliable zero-defect quality.', name: 'Klaus Richter', role: 'Managing Director (Germany)', avatar: clientImg3, image: '' },
  { id: 4, rating: '5.0', ratingText: '5.0 Rating • Powder Coating', quote: 'Great powder coated fence fittings and fast support. Very dependable partner for our large container orders.', name: 'James Whitfield', role: 'Supply Chain Manager (Melbourne, Australia)', avatar: clientImg4, image: '' },
  { id: 5, rating: '4.98', ratingText: '4.98 Rating • Malleable Castings', quote: 'Consistent malleable iron parts on every order. Export paperwork and shipping are handled smoothly.', name: 'Marco Bianchi', role: 'Procurement Director (Milan, Italy)', avatar: clientImg5, image: '' },
];

export const homeReviews = [
  { id: 1, rating: '5.0', ratingText: '5.0 Rating', quote: 'Charu Enterprises has supplied our USA branches with barbed arms and hinges for 8 years. Their galvanizing quality and fit are unmatched.', name: 'Robert M. Gallagher', role: 'VP Procurement, Regional Fence Supply (USA)', avatar: clientImg1, image: '' },
  { id: 2, rating: '5.0', ratingText: '5.0 Rating', quote: 'Their tool room made our custom roller design with zero defects. Shipments always arrive on time and well packaged.', name: 'David L. Tremblay', role: 'Director of Sourcing, Perimeter Solutions (Canada)', avatar: clientImg2, image: '' },
  { id: 3, rating: '4.95', ratingText: '4.95 Rating', quote: 'Clear communication, fair direct factory prices, and verified ISO 9001 certified quality on every container.', name: 'Klaus Richter', role: 'Managing Director, Security Gates GmbH (Germany)', avatar: clientImg3, image: '' },
  { id: 4, rating: '5.0', ratingText: '5.0 Rating', quote: 'The powder coating finish and galvanizing exceeded our expectations. A dependable partner for large container orders.', name: 'James Whitfield', role: 'Supply Chain Manager, Aussie Fencing (Australia)', avatar: clientImg4, image: '' },
  { id: 5, rating: '4.98', ratingText: '4.98 Rating', quote: 'Consistent quality fittings every order. Export documentation is smooth and delivery is always on time.', name: 'Marco Bianchi', role: 'Procurement Director, Recinzioni SRL (Italy)', avatar: clientImg5, image: '' },
];
