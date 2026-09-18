import type { FC } from 'react';
import { ArrowRight } from 'lucide-react';
import { getCloudinaryUrl } from '../../utils/cloudinary';
import { DraggableMarquee } from '../../components/common/DraggableMarquee';

const caseStudyFiles = [
  'commercial-chain-link-gate-system',
  'commercial-chain-link-fence-ins',
  'galvanized-fence-hardware',
  'create-industrial-engineering',
  'galvanized-chain-link-fence-inst',
  'chain-link-fence-surrounding-com',
];

const supplyImageList = caseStudyFiles.map((f) => getCloudinaryUrl(`${f}.jpg`));

const caseStudyCards = [
  { title: 'Commercial Chain-Link Fencing' },
  { title: 'Industrial Facility Perimeters' },
  { title: 'Heavy-Duty Gate Systems' },
  { title: 'High-Security & Utility Facilities' },
  { title: 'Highway & Infrastructure Barriers' },
  { title: 'Logistics & Warehouse Enclosures' },
];

interface RecentProjectsProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'case-study' | 'product-detail' | 'contact') => void;
}

export const CaseStudyMarquee: FC<RecentProjectsProps> = ({ onNavigate }) => {
  const marqueeCards = [
    ...caseStudyCards,
    ...caseStudyCards,
    ...caseStudyCards,
    ...caseStudyCards,
  ];

  return (
    <section
      id="recent-projects"
      className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 font-['Outfit',sans-serif] overflow-hidden border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-8 sm:mb-10 md:mb-12 lg:mb-16 items-start">
          {/* Left Column: Eyebrow + Headline */}
          <div className="lg:col-span-7 space-y-2.5 sm:space-y-3.5">
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block shrink-0 self-start mt-0.5 sm:mt-1" />
              <span className="text-[#3B82F6] text-xs sm:text-sm md:text-base font-bold tracking-tight uppercase">
                Applications &amp; Uses
              </span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-[40px] lg:text-[44px] font-bold text-[#0a1532] leading-[1.18] tracking-tight">
              Where Our Fittings Are Used
            </h2>
          </div>

          {/* Right Column: Narrative Subtitle + CTA Button */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-3.5 sm:space-y-5 pt-1 lg:pt-2">
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              Our manufactured steel fittings, post caps, and gate parts are used on commercial fences, factory gates, and security perimeters around the world.
            </p>

            <button
              type="button"
              onClick={() => onNavigate?.('case-study')}
              className="group/btn w-fit bg-[#3B82F6] hover:bg-[#DBEAFE] text-white hover:text-black font-bold pl-5 sm:pl-6 pr-2.5 py-2.5 sm:py-3 rounded-full inline-flex items-center gap-3 text-xs sm:text-sm md:text-base shadow-xl transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              <span className="transition-colors">View All Applications</span>
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white group-hover/btn:bg-[#3B82F6] text-[#3B82F6] group-hover/btn:text-white flex items-center justify-center shadow-sm shrink-0 group-hover/btn:translate-x-0.5 transition-all">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Marquee Container - Draggable */}
      <DraggableMarquee speed={0.75} pauseOnHover={true}>
        {marqueeCards.map((card, index) => {
          const imgSrc = supplyImageList[index % supplyImageList.length];
          return (
            <div
              key={index}
              onClick={() => onNavigate?.('case-study')}
              className="group relative rounded-[22px] xs:rounded-[26px] sm:rounded-[30px] overflow-hidden aspect-square w-[240px] xs:w-[270px] sm:w-[300px] md:w-[340px] lg:w-[370px] xl:w-[380px] shrink-0 bg-[#071128] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between p-4 sm:p-5 md:p-6 cursor-pointer border border-slate-200/60 select-none"
            >
              {/* Background Supply Image */}
              <img
                src={imgSrc}
                alt={card.title}
                loading="lazy"
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover object-center opacity-100 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071128]/95 via-[#071128]/40 via-50% to-[#071128]/10 pointer-events-none" />

              {/* Top spacer */}
              <div />

              {/* Bottom Content Area */}
              <div className="relative z-10 pointer-events-none">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight leading-snug drop-shadow-sm">
                  {card.title}
                </h3>
              </div>
            </div>
          );
        })}
      </DraggableMarquee>
    </section>
  );
};

export default CaseStudyMarquee;
