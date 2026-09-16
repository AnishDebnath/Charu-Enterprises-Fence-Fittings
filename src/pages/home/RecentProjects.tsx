import type { FC } from 'react';
import { ArrowRight } from 'lucide-react';

const supplyImages = import.meta.glob('../../assets/supply in action/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const supplyImageList = Object.values(supplyImages);

const caseStudyCards = [
  { title: 'Commercial Chain Link Gate Hardware' },
  { title: 'Commercial Fence Gate and Hardware' },
  { title: 'Galvanized Fence Fittings Macro' },
  { title: 'Industrial Fence Hardware Manufacturing' },
  { title: 'Installing Commercial Chain Link' },
  { title: 'Warehouse Inventory of Fence Hardware' },
];

interface RecentProjectsProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'case-study' | 'product-detail' | 'contact') => void;
}

export const RecentProjects: FC<RecentProjectsProps> = ({ onNavigate }) => {
  const marqueeCards = [...caseStudyCards, ...caseStudyCards];

  return (
    <section
      id="recent-projects"
      className="w-full bg-white py-16 sm:py-20 lg:py-24 font-['Outfit',sans-serif] overflow-hidden border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-12 sm:mb-14 lg:mb-16 items-start">
          {/* Left Column: Eyebrow + Headline */}
          <div className="lg:col-span-7 space-y-3.5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block" />
              <span className="text-[#3B82F6] text-sm sm:text-base font-bold tracking-tight uppercase">
                Supply in Action
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0a1532] leading-[1.18] tracking-tight">
              High-Demand Fence Hardware <br className="hidden sm:inline" />
              & Catalog A25 Highlights.
            </h2>
          </div>

          {/* Right Column: Narrative Subtitle + CTA Button */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-5 pt-1 lg:pt-2">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              See our most popular fence fittings, trusted by commercial fence suppliers and distributors across 4 continents.
            </p>

            <button
              type="button"
              onClick={() => onNavigate?.('case-study')}
              className="group/btn bg-[#3B82F6] hover:bg-[#DBEAFE] text-white hover:text-black font-bold pl-6 pr-2.5 py-3 rounded-full flex items-center gap-3 text-sm sm:text-base shadow-xl transition-all transform hover:scale-105 cursor-pointer"
            >
              <span className="transition-colors">Explore Case Study</span>
              <div className="w-7 h-7 rounded-full bg-white group-hover/btn:bg-[#3B82F6] text-[#3B82F6] group-hover/btn:text-white flex items-center justify-center shadow-sm shrink-0 group-hover/btn:translate-x-0.5 transition-all">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden py-4">
        <div className="animate-marquee flex gap-6 sm:gap-7 lg:gap-8 cursor-grab active:cursor-grabbing px-4">
          {marqueeCards.map((card, index) => {
            const imgSrc = supplyImageList[index % supplyImageList.length];
            return (
              <div
                key={index}
                onClick={() => onNavigate?.('case-study')}
                className="group relative rounded-[28px] sm:rounded-[32px] overflow-hidden aspect-square w-[300px] sm:w-[350px] md:w-[380px] lg:w-[410px] shrink-0 bg-[#071128] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between p-6 sm:p-7 cursor-pointer border border-slate-200/60 select-none"
              >
                {/* Background Supply Image */}
                <img
                  src={imgSrc}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-100 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071128]/95 via-[#071128]/40 via-50% to-[#071128]/10 pointer-events-none" />

                {/* Top spacer */}
                <div />

                {/* Bottom Content Area */}
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-sm">
                    {card.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
