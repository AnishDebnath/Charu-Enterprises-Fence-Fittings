export interface TipArticle {
  id: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
  date: string;
  category: string;
  content: {
    intro: string;
    points: { title: string; desc: string }[];
    conclusion: string;
  };
}

export const articles: TipArticle[] = [
  {
    id: 'astm-galvanizing',
    title: 'ASTM A153 Hot-Dip Galvanizing vs Electro-Plating',
    description: 'Why hot-dip galvanizing per ASTM A153 protects commercial fences from rust for over 30 years.',
    image: '',
    readTime: '5 min read',
    date: 'Engineering Guide',
    category: 'Metallurgy & Coatings',
    content: {
      intro: 'Rust is the biggest cause of fence hardware damage. Understanding hot-dip galvanizing helps you choose fittings that last.',
      points: [
        { title: 'Molten Zinc Bond', desc: 'Hot-dip galvanizing dips clean steel into 450°C molten zinc. This forms a hard alloy layer that does not peel or chip.' },
        { title: 'ASTM A153 Thickness', desc: 'ASTM A153 requires a thick zinc coat (over 85 microns), giving 30+ years of rust protection in harsh outdoor weather.' },
        { title: 'Self-Healing Action', desc: 'If scratched during installation, zinc naturally protects the exposed steel from rust.' },
      ],
      conclusion: 'Charu Enterprises runs in-house galvanizing lines with automated heat control and thickness testing for every batch.',
    },
  },
  {
    id: 'gate-hinge-selection',
    title: 'Choosing the Right Hinges for Industrial Gates',
    description: 'A simple guide to picking 180° offset hinges, box hinges, and heavy-duty gate hardware.',
    image: '',
    readTime: '4 min read',
    date: 'Specification Guide',
    category: 'Hardware Sizing',
    content: {
      intro: 'Industrial gates open often and face strong winds. Picking the right malleable iron or pressed steel hinges stops gate sagging.',
      points: [
        { title: '180° Offset Hinges', desc: 'Allows gates to swing fully open flat against the fence line without getting stuck.' },
        { title: 'Box Hinges with Grease Fittings', desc: 'Built for heavy automated gates. Easy to lubricate for smooth swinging and long life.' },
        { title: 'Matching Pipe Sizes', desc: 'Match gate frame pipe size (1-5/8" to 2") with post size (2-3/8" to 8-5/8") for strong, tight clamping.' },
      ],
      conclusion: 'Check Catalog A25 from Charu Enterprises for full size charts, diagrams, and load ratings.',
    },
  },
  {
    id: 'tool-and-die-speed',
    title: 'Sheet Metal Fabrication as per Product Specifications',
    description: 'How we manufacture and fabricate any sheet metal item according to your technical drawings, samples, and product specifications.',
    image: '',
    readTime: '6 min read',
    date: 'Manufacturing Insights',
    category: 'Sheet Metal Fabrication',
    content: {
      intro: 'While we do not provide custom design work, our factory can manufacture and fabricate any sheet metal item as per your required product specifications, samples, or drawings.',
      points: [
        { title: 'Sheet Metal Stamping & Forming', desc: 'Our high-tonnage mechanical power presses and tooling fabricate any sheet metal item across our fence hardware and fittings range.' },
        { title: 'Manufacture as per Samples & Drawings', desc: 'Provide your dimensions, physical samples, or technical specifications, and we fabricate the exact sheet metal parts with uniform precision.' },
        { title: 'In-House Hot-Dip Galvanizing & Coating', desc: 'Every sheet metal fabrication item is hot-dip galvanized to ASTM A153 or powder coated for maximum rust defense and long outdoor durability.' },
      ],
      conclusion: 'Send your product specifications, sample parts, or required dimensions to Charu Enterprises for direct factory pricing.',
    },
  },
];
