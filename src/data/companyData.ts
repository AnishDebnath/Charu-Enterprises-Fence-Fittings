import { PRODUCTS_PART_1, type CatalogProduct, type ProductSizeVariant } from './productsPart1';
import { PRODUCTS_PART_2 } from './productsPart2';
import { getProductImage } from './productImages';

export type { CatalogProduct, ProductSizeVariant };

export interface CompanyInfo {
  name: string;
  tagline: string;
  established: number;
  yearsOfExperience: string;
  totalPiecesExported: string;
  globalReach: string;
  satisfactionRate: string;
  fencetechHistory: string;
  certifications: {
    iso: string;
    isoCertNo: string;
    msmeUdyam: string;
    gstin: string;
    eepc: string;
  };
  facility: {
    area: string;
    features: string[];
  };
  contact: {
    phoneIndia: string;
    phoneIndiaLandline: string;
    phoneUSA: string;
    phoneUSAAlt: string;
    emailPrimary: string;
    emailSecondary: string;
    emailGeneral: string;
    websitePrimary: string;
    websiteSecondary: string;
    addressOffice: string;
    addressFactory: string;
  };
  phones: {
    india: string;
    indiaPrimary: string;
    indiaAlt: string;
    usa: string;
    usaPrimary: string;
    usaAlt: string;
  };
  emails: {
    primary: string;
    sales: string;
    official: string;
  };
  addresses: {
    office: {
      full: string;
      line1: string;
      line2: string;
      city: string;
      pincode: string;
    };
    factory: {
      full: string;
      line1: string;
      line2: string;
      city: string;
      pincode: string;
    };
  };
  founders: {
    name: string;
    role: string;
    experience: string;
    bio: string;
  }[];
}

export const COMPANY_INFO: CompanyInfo = {
  name: 'Charu Enterprises',
  tagline: 'Fence fittings and hardware manufacturer since 1969.',
  established: 1969,
  yearsOfExperience: '55+ Years Experience',
  totalPiecesExported: '150M+ Pieces Exported',
  globalReach: 'USA, Canada, Australia & Europe',
  satisfactionRate: '100% Quality Tested',
  fencetechHistory: '30+ Years at FENCETECH (USA)',
  certifications: {
    iso: 'ISO 9001:2015 Certified',
    isoCertNo: 'QDL691222',
    msmeUdyam: 'UDYAM-WB-10-0019534',
    gstin: '19AABFC7920J1ZC',
    eepc: 'EEPC Export Award Winner',
  },
  facility: {
    area: '20,000 Sq. Ft. Plant',
    features: [
      'In-house galvanizing and plating',
      'Tool room and custom die making',
      'Heavy hydraulic power presses',
      'Custom sheet metal stamping',
      'In-house quality test lab',
      'Worldwide container shipping',
    ],
  },
  contact: {
    phoneIndia: '+91 98300 83777',
    phoneIndiaLandline: '+91 (33) 2287 3027',
    phoneUSA: '+1 (346) 433-7572',
    phoneUSAAlt: '+1 (832) 749-9118',
    emailPrimary: 'som83777@gmail.com',
    emailSecondary: 'opmaskara1008@gmail.com',
    emailGeneral: 'info@charufence.com',
    websitePrimary: 'www.charufence.in',
    websiteSecondary: 'www.charuenterprises.com',
    addressOffice: '28B, Shakespeare Sarani, 10B, Neelamber Building, Kolkata - 700017, India',
    addressFactory: 'Saraswati Complex, Bhandardaha, Domjur, Howrah - 711405, India',
  },
  phones: {
    india: '+91 98300 83777',
    indiaPrimary: '+91 98300 83777',
    indiaAlt: '+91 (33) 2287 3027',
    usa: '+1 (346) 433-7572',
    usaPrimary: '+1 (346) 433-7572',
    usaAlt: '+1 (832) 749-9118',
  },
  emails: {
    primary: 'som83777@gmail.com',
    sales: 'opmaskara1008@gmail.com',
    official: 'info@charufence.com',
  },
  addresses: {
    office: {
      full: '28B, Shakespeare Sarani, 10B, Neelamber Building, Kolkata - 700017, India',
      line1: '28B Shakespeare Sarani, Neelamber Bldg',
      line2: 'Kolkata - 700017',
      city: 'Kolkata',
      pincode: '700017',
    },
    factory: {
      full: 'Saraswati Complex, Bhandardaha, Domjur, Howrah - 711405, India',
      line1: 'Saraswati Complex, Domjur',
      line2: 'Howrah - 711405',
      city: 'Howrah',
      pincode: '711405',
    },
  },
  founders: [
    {
      name: 'Mr. OP Maskara',
      role: 'Founder President',
      experience: '62+ Years Experience',
      bio: '62 years in engineering exports. Former Deputy Regional Chairman of EEPC India. Renowned yoga teacher and community leader.',
    },
    {
      name: 'Mr. Som Maskara',
      role: 'Vice President',
      experience: 'Global Trade Leader',
      bio: 'Leads global trade and operations. Dedicated humanitarian, athlete, and yoga practitioner focusing on quality and fast service.',
    },
  ],
};

const RAW_PRODUCTS: CatalogProduct[] = [...PRODUCTS_PART_1, ...PRODUCTS_PART_2];

export const CATALOG_PRODUCTS: CatalogProduct[] = RAW_PRODUCTS.map((prod) => ({
  ...prod,
  image: getProductImage(prod.itemNumber),
}));

export const CATEGORIES = [
  'All Products',
  'Fittings & Arms',
  'Hinges & Hardware',
  'Bands & Clamps',
  'Caps & Closures',
  'Gate & Track',
  'Tension & Fasteners',
] as const;

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  comment: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'David Miller',
    role: 'Procurement Director',
    company: 'Apex Perimeter Solutions',
    location: 'Houston, Texas, USA',
    comment: 'We have ordered containers from Charu for 15+ years. Galvanizing is clean, dimensions are accurate, and shipments arrive on time.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Robert Jenkins',
    role: 'Operations Head',
    company: 'Great Northern Fence Supply',
    location: 'Ontario, Canada',
    comment: 'Great quality barbed arms, brace bands, and hinges. Factory pricing and fast delivery make them our top supplier.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Michael Evans',
    role: 'Managing Director',
    company: 'Southern Cross Fencing Pty Ltd',
    location: 'Melbourne, Australia',
    comment: 'Custom stamping to our exact drawings was easy and accurate. Strong tooling skills and dependable zero-defect quality.',
    rating: 5,
  },
];
