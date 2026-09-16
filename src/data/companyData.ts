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
  tagline: 'Leading Manufacturer & Global Exporter of Pressed Steel Fence Fittings & Hardware Since 1969',
  established: 1969,
  yearsOfExperience: '55+ Years of Growth (1969 - 2025)',
  totalPiecesExported: '150+ Million Pieces Exported Across 4 Continents',
  globalReach: 'USA, Canada, Australia, Europe, South America & Middle East',
  satisfactionRate: '100% Satisfaction - Zero Defects',
  fencetechHistory: '30+ Years Exhibiting at FENCETECH (USA)',
  certifications: {
    iso: 'ISO 9001:2015 Certified Manufacturer',
    isoCertNo: 'QDL691222',
    msmeUdyam: 'UDYAM-WB-10-0019534',
    gstin: '19AABFC7920J1ZC',
    eepc: 'EEPC Certificate of Export Excellence - Govt. of India',
  },
  facility: {
    area: '20,000 SQ. FT. State-of-the-Art Plant',
    features: [
      'In-House Hot-Dip Galvanizing & Electro-Plating',
      'Advanced Tool Room & In-House Die/Mold Development',
      'High-Tonnage Hydraulic & Mechanical Power Presses',
      'Sheet Metal Fabrication & Stamping as per Product Specifications',
      'Complete Metallurgical Testing & Quality Control Lab',
      'Worldwide Direct Shipping (FOB / CIF / DDP Delivery to Warehouse)',
    ],
  },
  contact: {
    phoneIndia: '+91 98300 83777',
    phoneIndiaLandline: '+91 (33) 2287 3027 / 28 / 31 / 32',
    phoneUSA: '+1 (346) 433-7572',
    phoneUSAAlt: '+1 (832) 749-9118',
    emailPrimary: 'som83777@gmail.com',
    emailSecondary: 'opmaskara1008@gmail.com',
    emailGeneral: 'info@charufence.com',
    websitePrimary: 'www.charufence.in',
    websiteSecondary: 'www.charuenterprises.com',
    addressOffice: '28B, Shakespeare Sarani, 10B, Neelamber Building, 10th Floor, Kolkata - 700017, West Bengal, India',
    addressFactory: 'Saraswati Complex, Bhandardaha, Domjur, Howrah - 711405 (Near Srijon Industrial Park), West Bengal, India',
  },
  phones: {
    india: '+91 98300 83777',
    indiaPrimary: '+91 98300 83777',
    indiaAlt: '+91 (33) 2287 3027 / 28 / 31 / 32',
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
      full: '28B, Shakespeare Sarani, 10B, Neelamber Building, 10th Floor, Kolkata - 700017, West Bengal, India',
      line1: '28B, Shakespeare Sarani, 10B, Neelamber Building, 10th Floor',
      line2: 'Kolkata - 700017',
      city: 'Kolkata',
      pincode: '700017',
    },
    factory: {
      full: 'Saraswati Complex, Bhandardaha, Domjur, Howrah - 711405 (Near Srijon Industrial Park), West Bengal, India',
      line1: 'Saraswati Complex, Bhandardaha, Domjur',
      line2: 'Near Srijon Industrial Park, Howrah - 711405',
      city: 'Howrah',
      pincode: '711405',
    },
  },
  founders: [
    {
      name: 'Mr. OP Maskara',
      role: 'Founder President',
      experience: '62+ Years in Exports & Engineering Goods',
      bio: 'Our Founder President, a renowned Yoga Guru, has taught yoga to 300,000 people across India for free over two decades. With 62 years in exports and engineering goods, he also served as Deputy Regional Chairman (ER) of the Government Engineering Export Promotion Council. A Lions Clubs International member for 57 years, he was Deputy District Governor. He has also appeared on TV shows regularly.',
    },
    {
      name: 'Mr. Som Maskara',
      role: 'Vice President',
      experience: 'Humanitarian & Global Trade Leader',
      bio: 'Our Vice President is a dedicated humanitarian and former President of Leo Club International, actively contributing to projects that provide meals to millions of underprivileged children. With a strong passion for sports, he participates in competitive badminton and rifle shooting, demonstrating discipline and precision. As an advanced yoga practitioner, he combines physical fitness with mindfulness and personal excellence.',
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
    comment: 'We have bought full container loads of pressed steel fence fittings from Charu Enterprises for over 15 years. Their galvanizing quality is clean and durable, their size tolerances are spot on, and every shipment arrives on schedule.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Robert Jenkins',
    role: 'Operations Head',
    company: 'Great Northern Fence Supply',
    location: 'Ontario, Canada',
    comment: 'Charu Enterprises delivers top quality pressed steel barbed arms, brace bands, and hinges. Their direct factory pricing and seamless DDP warehouse delivery make them our primary international manufacturing partner.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Michael Evans',
    role: 'Managing Director',
    company: 'Southern Cross Fencing Pty Ltd',
    location: 'Melbourne, Australia',
    comment: 'Sheet metal fabrication according to our product specifications was handled effortlessly. The team at Charu has world-class tooling expertise and their zero-defect guarantee has held true across hundreds of thousands of parts.',
    rating: 5,
  },
];
