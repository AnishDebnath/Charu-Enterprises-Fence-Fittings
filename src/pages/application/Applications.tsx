import { type FC } from 'react';
import { applicationSupplyImageList as supplyImageList, applicationCaseStudies as caseStudies } from '../../data/caseStudiesData';

export const CaseStudyGrid: FC = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 font-['Outfit',sans-serif] border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block" />
            <span className="text-[#3B82F6] text-xs sm:text-sm font-bold tracking-tight uppercase">
              Applications &amp; Uses
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0a1532] leading-[1.15] tracking-tight mb-3 sm:mb-4">
            Common Fence &amp; Gate Uses
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-2xl">
            See how our factory-made fence fittings, post caps, hinges, and bands are used in real fencing and gate projects.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {supplyImageList.map((imgSrc, index) => {
            const study = caseStudies[index] || { title: `Application ${index + 1}`, description: 'Applications in action showcase.' };
            return (
              <div
                key={index}
                className="group relative rounded-[32px] sm:rounded-[36px] overflow-hidden aspect-square w-full bg-[#071128] flex flex-col justify-between p-6 sm:p-7 transition-all duration-500 hover:-translate-y-1.5 shadow-lg hover:shadow-2xl cursor-pointer select-none border border-slate-200/60"
              >
                {/* Card Image */}
                <img
                  src={imgSrc}
                  alt={study.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-100 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071128]/95 via-[#071128]/40 via-50% to-[#071128]/10" />

                {/* Top spacer */}
                <div />

                {/* Bottom Content Area */}
                <div className="relative z-10">
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

export default CaseStudyGrid;
