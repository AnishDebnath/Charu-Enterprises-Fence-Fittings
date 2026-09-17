import { type FC } from 'react';

const supplyImages = import.meta.glob('../../assets/case-study/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const supplyImageList = Object.values(supplyImages);

const caseStudies = [
  { title: 'Arrange Fence Fittings on Surface', description: 'Fence fittings arranged for product photography showcase.' },
  { title: 'Chain-Link Fence Surrounding Complex', description: 'Chain-link fence installation surrounding commercial complex.' },
  { title: 'Chain-Link Security Gate System', description: 'High-security chain-link gate system with heavy-duty fittings.' },
  { title: 'Commercial Chain Link Fence Installation', description: 'Large-scale commercial chain-link fence deployment.' },
  { title: 'Commercial Chain-Link Gate System', description: 'Commercial-grade chain-link gate with galvanized hardware.' },
  { title: 'Create Hero Photograph for Website', description: 'Hero product photography for marketing collateral.' },
  { title: 'Create Industrial Engineering', description: 'Industrial engineering fence hardware production.' },
  { title: 'Creating Engineering Product Flange', description: 'Engineering product flange fabrication and assembly.' },
  { title: 'Fence Fitting Installed on Fence', description: 'Fence fitting installed on commercial perimeter fence.' },
  { title: 'Fence Fitting Installed on Fence Variant', description: 'Alternate view of fence fitting installation on site.' },
  { title: 'Fence Fittings Product Photograph', description: 'Professional product photography of fence fittings range.' },
  { title: 'Fence Hardware Product Photograph', description: 'Detailed product shot of fence hardware catalog items.' },
  { title: 'Fence Hardware Quality Testing', description: 'Quality inspection and testing of fence hardware components.' },
  { title: 'Galvanized Chain-Link Fence Installation', description: 'Hot-dip galvanized chain-link fence installed on site.' },
  { title: 'Galvanized Fence Hardware', description: 'Complete range of galvanized fence hardware products.' },
  { title: 'Galvanized Steel Fence Hardware', description: 'Galvanized steel fence hardware for heavy-duty applications.' },
  { title: 'Galvanized Steel Fence Hardware Variant', description: 'Alternate view of galvanized steel fence hardware range.' },
  { title: 'Photograph Fence Fittings', description: 'Studio photography of fence fittings product line.' },
  { title: 'Powder-Coated Fence Hardware Inspection', description: 'Quality inspection of powder-coated fence hardware finish.' },
  { title: 'Powder-Coated Fence Hardware', description: 'Powder-coated fence hardware for corrosion resistance.' },
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
            See how our hot-dip galvanized and powder-coated fence fittings perform in real commercial and industrial projects worldwide.
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

export default CaseStudySection;
