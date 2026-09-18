import type { FC } from 'react';
import { 
  Layers, 
  Cpu, 
  Droplets, 
  Sparkles, 
  CheckCircle2, 
  PackageCheck 
} from 'lucide-react';

interface ImprovementItem {
  number: string;
  title: string;
  description: string;
  icon: typeof Layers;
}

export const defaultImprovements: ImprovementItem[] = [
  {
    number: '01',
    title: 'Raw Steel Testing',
    description: 'Carbon steel tested for tensile strength and gauge thickness before stamping.',
    icon: Layers,
  },
  {
    number: '02',
    title: 'Precision Die Stamping',
    description: 'High-tonnage stamping presses ensure clean edges and exact bolt hole spacing.',
    icon: Cpu,
  },
  {
    number: '03',
    title: 'Chemical Surface Pickling',
    description: 'Acid cleaning and flux treatment remove scale for permanent zinc bonding.',
    icon: Droplets,
  },
  {
    number: '04',
    title: 'ASTM A153 Galvanizing',
    description: 'Molten zinc bath provides a thick 85+ micron coating for high corrosion resistance.',
    icon: Sparkles,
  },
  {
    number: '05',
    title: 'Fitment & Load Testing',
    description: 'Calibrated testing ensures perfect pipe fit and mechanical shear strength.',
    icon: CheckCircle2,
  },
  {
    number: '06',
    title: 'Export Pallet Packing',
    description: 'Weather-tight bags and banded pallets packed securely for ocean container transit.',
    icon: PackageCheck,
  },
];

interface ProductImprovementsProps {
  items?: ImprovementItem[];
}

export const ProductSpecs: FC<ProductImprovementsProps> = ({
  items = defaultImprovements,
}) => {
  return (
    <section className="w-full bg-[#DBEAFE] py-10 sm:py-12 lg:py-14 font-['Outfit',sans-serif] border-t border-b border-blue-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-blue-200/70">
          <div>
            <div className="inline-flex items-center gap-2 mb-1.5">
              <span className="w-1.5 h-3.5 bg-[#f0c75e] rounded-full inline-block" />
              <span className="text-[#2563EB] text-xs font-bold tracking-tight uppercase">
                Quality Assurance
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0a1532] tracking-tight">
              Manufacturing &amp; Testing Standards
            </h2>
          </div>
          <p className="text-slate-700 text-xs sm:text-sm font-medium max-w-md">
            ISO 9001:2015 certified process control from raw carbon steel to container dispatch.
          </p>
        </div>

        {/* 2 in a row Grid on Mobile, 3 columns on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 lg:gap-5">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 border border-blue-100 shadow-sm hover:shadow-md hover:border-[#3B82F6]/60 transition-all duration-200 flex flex-col sm:flex-row items-start gap-2.5 sm:gap-3.5 group"
              >
                {/* Icon & Number Badge (Row on mobile, side by side on desktop) */}
                <div className="flex items-center justify-between w-full sm:w-auto sm:justify-start">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-50 text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-colors duration-200 flex items-center justify-center shrink-0 shadow-xs">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
                  </div>
                  <span className="sm:hidden text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                    {item.number}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-1 flex-1 min-w-0 w-full">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xs sm:text-base font-bold text-[#0a1532] tracking-tight line-clamp-2 sm:line-clamp-1 group-hover:text-[#3B82F6] transition-colors">
                      {item.title}
                    </h3>
                    <span className="hidden sm:inline-block text-[11px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded shrink-0">
                      {item.number}
                    </span>
                  </div>
                  <p className="text-slate-600 text-[11px] sm:text-[13px] leading-relaxed font-normal line-clamp-3 sm:line-clamp-none">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProductSpecs;
