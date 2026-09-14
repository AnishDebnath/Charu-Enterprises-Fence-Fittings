import type { FC } from 'react';

export interface SizeChartRow {
  code: string;
  size: string;
  pcsPerBag: number | string;
  bagPerPallet: number | string;
  pcsPerPallet: number | string;
}

export interface ProjectDetailData {
  title: string;
  description: string;
  image: string;
  alt: string;
  itemNumber: string;
  category: string;
  materialGrade: string;
  finishCoating: string;
  standardPack: string;
  palletPacking: string;
  certification: string;
  exportTerms: string;
  sizeChart?: SizeChartRow[];
}

interface ProjectDetailContentProps {
  data?: ProjectDetailData;
  onNavigate?: (page: 'home' | 'about' | 'services' | 'projects' | 'project-detail' | 'contact') => void;
}

export const defaultSizeChart: SizeChartRow[] = [
  { code: '350', size: '1 5/8"', pcsPerBag: 25, bagPerPallet: 48, pcsPerPallet: 1200 },
  { code: '370', size: '2"', pcsPerBag: 25, bagPerPallet: 40, pcsPerPallet: 1000 },
  { code: '390', size: '2 1/2"', pcsPerBag: 25, bagPerPallet: 32, pcsPerPallet: 800 },
  { code: '410', size: '3"', pcsPerBag: 20, bagPerPallet: 32, pcsPerPallet: 640 },
];

export const defaultProjectDetail: ProjectDetailData = {
  title: 'Barbed Arm - 14 GA & 16 GA (Item #1)',
  description:
    'Heavy-duty pressed steel 45-degree barbed arm extension engineered for industrial, commercial, and high-security chain link fencing perimeters. Designed with pre-notched wire capture slots for secure holding of 3 barbed wire strands, high tensile load resistance, and uniform ASTM A153 hot-dip galvanizing.',
  image:
    'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1600&q=85',
  alt: 'Pressed steel barbed arm chain link fence fitting component',
  itemNumber: 'Catalog A25 - Item #1',
  category: 'Fittings & Arms',
  materialGrade: 'Pressed Steel (14 Gauge & 16 Gauge)',
  finishCoating: 'Hot-Dip Galvanized (ASTM A153) / Powder Coated',
  standardPack: '20 - 25 Pcs / Weatherproof Poly Bag',
  palletPacking: 'Strapped Wooden Pallets / Export Master Crates',
  certification: 'ISO 9001:2015 / Certified Mill Test Reports',
  exportTerms: 'FOB Kolkata Port / CIF Worldwide / DDP Available',
  sizeChart: defaultSizeChart,
};

export const ProjectDetailContent: FC<ProjectDetailContentProps> = ({
  data = defaultProjectDetail,
}) => {
  const metaFields = [
    { label: 'Item Number', value: data.itemNumber },
    { label: 'Category', value: data.category },
    { label: 'Material Grade', value: data.materialGrade },
    { label: 'Finish / Coating', value: data.finishCoating },
    { label: 'Standard Pack', value: data.standardPack },
    { label: 'Pallet Packing', value: data.palletPacking },
    { label: 'Quality Standard', value: data.certification },
    { label: 'Export Terms', value: data.exportTerms },
  ];

  const sizeChartData = data.sizeChart || defaultSizeChart;

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 font-['Outfit',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">
        
        {/* Top Section: Project Title, Description & Two-Column Specs */}
        <div>
          {/* Project Title & Narrative Introduction */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0a1532] tracking-tight leading-[1.2] mb-3 sm:mb-4">
              {data.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-5xl font-normal">
              {data.description}
            </p>
          </div>

          {/* 2-Column Content Layout matching Screenshot */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
            
            {/* Left Column: High Resolution Featured Project Image */}
            <div className="lg:col-span-7 xl:col-span-7">
              <div className="relative rounded-[22px] sm:rounded-[28px] overflow-hidden shadow-lg border border-slate-200/80 bg-slate-100 aspect-[16/10] sm:aspect-[16/10] w-full">
                <img
                  src={data.image}
                  alt={data.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Column: Project Specifications / Metadata List */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center pt-2 sm:pt-4">
              <div className="space-y-4 sm:space-y-5 lg:space-y-5.5 text-sm sm:text-base">
                {metaFields.map((field) => (
                  <div
                    key={field.label}
                    className="grid grid-cols-12 gap-2 items-start py-0.5"
                  >
                    {/* Label */}
                    <span className="col-span-5 sm:col-span-5 text-slate-600 font-medium">
                      {field.label}
                    </span>

                    {/* Aligned Colon */}
                    <span className="col-span-1 text-slate-700 font-normal select-none text-center">
                      :
                    </span>

                    {/* Value */}
                    <span className="col-span-6 sm:col-span-6 text-[#0a1532] font-semibold leading-snug">
                      {field.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section: Product Size Chart Table Styled with Website Theme */}
        <div className="w-full max-w-5xl mx-auto">
          {/* Table Container Card */}
          <div className="w-full overflow-hidden rounded-[24px] sm:rounded-[28px] border border-slate-200 shadow-md bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-center border-collapse">
                {/* Header Row in Website Dark Navy (#0a1532) */}
                <thead>
                  <tr className="bg-[#0a1532] text-white">
                    <th className="py-4 sm:py-4.5 px-4 sm:px-6 font-bold text-xs sm:text-sm tracking-wider uppercase border-r border-blue-900/40 last:border-r-0">
                      CODE
                    </th>
                    <th className="py-4 sm:py-4.5 px-4 sm:px-6 font-bold text-xs sm:text-sm tracking-wider uppercase border-r border-blue-900/40 last:border-r-0">
                      SIZE
                    </th>
                    <th className="py-4 sm:py-4.5 px-4 sm:px-6 font-bold text-xs sm:text-sm tracking-wider uppercase border-r border-blue-900/40 last:border-r-0">
                      PCS PER BAG
                    </th>
                    <th className="py-4 sm:py-4.5 px-4 sm:px-6 font-bold text-xs sm:text-sm tracking-wider uppercase border-r border-blue-900/40 last:border-r-0">
                      BAG PER PALLET
                    </th>
                    <th className="py-4 sm:py-4.5 px-4 sm:px-6 font-bold text-xs sm:text-sm tracking-wider uppercase">
                      PCS PER PALLET
                    </th>
                  </tr>
                </thead>

                {/* Table Body Rows with Website Neutral Striping */}
                <tbody className="divide-y divide-slate-200/80 text-sm sm:text-base font-medium">
                  {sizeChartData.map((row, index) => {
                    const isEven = index % 2 === 0;
                    return (
                      <tr
                        key={row.code}
                        className={`transition-colors ${
                          isEven ? 'bg-[#EEF2F6]/60 hover:bg-[#DBEAFE]/50' : 'bg-white hover:bg-[#DBEAFE]/30'
                        }`}
                      >
                        {/* Code */}
                        <td className="py-4 sm:py-4.5 px-4 sm:px-6 font-bold text-[#0a1532] border-r border-slate-200/80">
                          {row.code}
                        </td>

                        {/* Size (Highlighted in Website Brand Blue #3B82F6) */}
                        <td className="py-4 sm:py-4.5 px-4 sm:px-6 font-bold text-[#3B82F6] border-r border-slate-200/80">
                          {row.size}
                        </td>

                        {/* Pcs Per Bag */}
                        <td className="py-4 sm:py-4.5 px-4 sm:px-6 font-bold text-[#0a1532] border-r border-slate-200/80">
                          {row.pcsPerBag}
                        </td>

                        {/* Bag Per Pallet */}
                        <td className="py-4 sm:py-4.5 px-4 sm:px-6 font-bold text-[#0a1532] border-r border-slate-200/80">
                          {row.bagPerPallet}
                        </td>

                        {/* Pcs Per Pallet */}
                        <td className="py-4 sm:py-4.5 px-4 sm:px-6 font-bold text-[#0a1532]">
                          {row.pcsPerPallet}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectDetailContent;
