import { type FC } from 'react';
import { ArrowRight } from 'lucide-react';

const supplyImages = import.meta.glob('../../assets/supply in action/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const supplyImageList = Object.values(supplyImages);

const caseStudies = [
  { title: 'Commercial Chain Link Gate Hardware', description: 'Heavy-duty gate hardware installed for commercial perimeter security.' },
  { title: 'Commercial Fence Gate and Hardware', description: 'Full gate system with galvanized fittings for industrial complex.' },
  { title: 'Commercial Fence Hardware Installation', description: 'Large-scale fence hardware deployment across commercial property.' },
  { title: 'Commercial Security Gate and Fence', description: 'High-security gate and fence system with anti-climb fittings.' },
  { title: 'Galvanized Fence Fittings Macro', description: 'Close-up of precision hot-dip galvanized fence fittings.' },
  { title: 'Galvanized Fence Hardware System', description: 'Complete galvanized hardware system for long-term durability.' },
  { title: 'Industrial Fence Hardware Manufacturing', description: 'Factory-floor view of fence hardware production line.' },
  { title: 'Industrial Security Fence Hardware', description: 'Heavy industrial security fence with malleable iron fittings.' },
  { title: 'Installing Commercial Chain Link', description: 'On-site installation of commercial chain link fence system.' },
  { title: 'Technician Inspecting Fence Hardware', description: 'Quality inspection of galvanized fence fittings before export.' },
  { title: 'Warehouse Inventory of Fence Hardware', description: 'Warehouse stocked with container-ready fence hardware.' },
];

export const CaseStudySection: FC = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 font-['Outfit',sans-serif] border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block" />
            <span className="text-[#3B82F6] text-xs sm:text-sm font-bold tracking-tight uppercase">
              Supply In Action
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0a1532] leading-[1.15] tracking-tight mb-3 sm:mb-4">
            Our Supply Case Studies.
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-2xl">
            Real-world installations showcasing our galvanized and powder-coated fence fittings across commercial and industrial projects worldwide.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {supplyImageList.map((imgSrc, index) => {
            const study = caseStudies[index] || { title: `Case Study ${index + 1}`, description: 'Supply in action showcase.' };
            return (
              <div
                key={index}
                className="group relative rounded-[32px] sm:rounded-[36px] overflow-hidden aspect-square w-full bg-[#071128] flex flex-col justify-between p-6 sm:p-7 transition-all duration-500 hover:-translate-y-1.5 shadow-lg hover:shadow-2xl cursor-pointer select-none border border-slate-200/60"
              >
                {/* Card Image */}
                <img
                  src={imgSrc}
                  alt={study.title}
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-100 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071128]/95 via-[#071128]/40 via-50% to-[#071128]/10" />

                {/* Top-Right Cutout Notch with Concave Fillets */}
                <div className="absolute top-0 right-0 w-[74px] h-[74px] sm:w-[82px] sm:h-[82px] bg-white rounded-bl-[28px] sm:rounded-bl-[32px] pointer-events-none z-20 flex items-center justify-center">
                  <div className="absolute top-0 -left-5 w-5 h-5 overflow-hidden pointer-events-none">
                    <div className="w-10 h-10 rounded-tr-[22px] shadow-[10px_-10px_0_0_#ffffff]" />
                  </div>
                  <div className="absolute -bottom-5 right-0 w-5 h-5 overflow-hidden pointer-events-none">
                    <div className="w-10 h-10 rounded-tr-[22px] shadow-[10px_-10px_0_0_#ffffff]" />
                  </div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-100 group-hover:bg-[#3B82F6] text-[#0a1532] group-hover:text-white flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105 pointer-events-auto border border-slate-200">
                    <ArrowRight className="w-5 h-5 stroke-[2] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                {/* Top spacer */}
                <div />

                {/* Bottom Content Area */}
                <div className="relative z-10 space-y-2.5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-sm mb-2.5">
                    <svg
                      className="w-5 h-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                      <path d="m3 21 6.5-6.5" />
                      <path d="M18.5 5.5 21 3" />
                    </svg>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-sm">
                    {study.title}
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

export default CaseStudySection;
