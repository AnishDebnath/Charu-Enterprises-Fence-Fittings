import { getCloudinaryUrl } from '../utils/cloudinary';

const isoCert = getCloudinaryUrl('ISO-certi.jpg');
const awardCert = getCloudinaryUrl('Award.jpg');
const gstCert = getCloudinaryUrl('GST.jpg');
const msmeCert = getCloudinaryUrl('MSME.jpg');

export interface CertificationItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  alt: string;
  details: string;
}

export const certifications: CertificationItem[] = [
  { id: 'iso', title: 'ISO 9001:2015', subtitle: 'Quality Management System', category: 'International Standards', image: isoCert, alt: 'ISO 9001:2015 Quality Management System Certificate - Charu Enterprises', details: 'Certified quality standards for manufacturing, hot-dip galvanizing, and global supply of fence fittings.' },
  { id: 'award', title: 'Export Excellence', subtitle: 'International Trade Certificate', category: 'Government Recognition', image: awardCert, alt: 'Export Excellence and Outstanding Performance Award - Charu Enterprises', details: 'Awarded for outstanding performance in engineering exports and global shipments.' },
  { id: 'gst', title: 'GST', subtitle: 'Registration Certificate', category: 'Tax & Regulatory Compliance', image: gstCert, alt: 'Government of India GST Registration Certificate - Charu Enterprises', details: 'Registered under Goods and Services Tax (GSTIN: 19AABFC7920J1ZC) for compliant trade.' },
  { id: 'msme', title: 'MSME', subtitle: 'Registration Certificate', category: 'Ministry of MSME, Govt of India', image: msmeCert, alt: 'Ministry of MSME Industrial Registration Certificate - Charu Enterprises', details: 'Registered MSME enterprise (UDYAM-WB-10-0019534) recognized by the Government of India.' },
];
