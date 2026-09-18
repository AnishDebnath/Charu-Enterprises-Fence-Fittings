import { type FC } from 'react';
import { getCloudinaryUrl } from '../../utils/cloudinary';

const caseStudyFiles = [
  'arrange-fence-fittings-on-surface',
  'chain-link-fence-surrounding-com',
  'chain-link-security-gate-system',
  'commercial-chain-link-fence-ins',
  'commercial-chain-link-gate-system',
  'create-hero-photograph-for-website',
  'create-industrial-engineering',
  'creating-engineering-product-flange',
  'fence-fitting-installed-on-fence',
  'fence-fitting-installed-on-fence1',
  'fence-fittings-product-photograph',
  'fence-hardware-product-photograph',
  'fence-hardware-quality-testing',
  'galvanized-chain-link-fence-inst',
  'galvanized-fence-hardware',
  'galvanized-steel-fence-hardware',
  'galvanized-steel-fence-hardware1',
  'photograph-fence-fittings',
  'powder-coated-fence-hardware',
  'powder-coated-fence-hardware-ins',
];

const supplyImageList = caseStudyFiles.map((f) => getCloudinaryUrl(`${f}.jpg`));

const caseStudies = [
  { title: 'Commercial Chain-Link Fencing', description: 'Pressed steel fittings, tension bands, and post caps for commercial perimeter enclosures.' },
  { title: 'Industrial Security Perimeters', description: 'Heavy-gauge galvanized fittings and 3-wire barbed arms for industrial facility security.' },
  { title: 'High-Security Gate Systems', description: 'Heavy-duty industrial gate hinges, drop rods, and locking latches for high-traffic access.' },
  { title: 'Commercial Gate Hardware', description: 'Pressed steel and malleable iron hinges engineered for commercial gate frames.' },
  { title: 'Highways & Infrastructure Barriers', description: 'High-durability galvanized steel fittings meeting international ASTM specifications.' },
  { title: 'Export-Grade Fence Hardware', description: 'Certified pressed steel fence components manufactured for international distributors.' },
  { title: 'Industrial Facility Security', description: 'Custom formed brackets and heavy steel fittings for industrial perimeter protection.' },
  { title: 'Custom Sheet Metal Fabrications', description: 'Precision stamped steel flanges and custom hardware manufactured to client drawings.' },
  { title: 'Substation & Utility Enclosures', description: 'Galvanized tension bands, brace bands, and rail ends on utility perimeters.' },
  { title: 'Heavy Cantilever & Slide Gates', description: 'Steel cantilever rollers, guide brackets, and gate hardware for automated industrial gates.' },
  { title: 'Complete Fence Hardware Range', description: 'Comprehensive line of galvanized and powder-coated fittings for fence wholesalers.' },
  { title: 'Galvanized Post Caps & Fittings', description: 'Hot-dip galvanized post caps, loop caps, and rail ends for chain-link fencing.' },
  { title: 'Quality Tested Fence Hardware', description: 'Rigorous factory testing of galvanizing thickness and tensile strength.' },
  { title: 'Barbed Wire Anti-Intrusion Systems', description: 'Heavy-duty 45-degree and vertical barbed wire arms on high-security fence lines.' },
  { title: 'Corrosion-Resistant Hardware', description: 'Corrosion-resistant galvanized dome caps, eye tops, and sleeve connectors.' },
  { title: 'High-Traffic Gate Assemblies', description: 'Heavy-gauge steel hardware manufactured for continuous-operation gate systems.' },
  { title: 'OEM & Custom Metal Components', description: 'Precision stamped and formed metal components manufactured per client specifications.' },
  { title: 'Standard Chain-Link Fittings', description: 'Full selection of hot-dip galvanized fence fittings and gate hardware.' },
  { title: 'Architectural Powder-Coated Systems', description: 'Black and green powder-coated fittings for commercial and architectural fencing.' },
  { title: 'Coastal & Extreme Climate Hardware', description: 'Durable polyester powder coating over heavy zinc galvanizing for high-salinity environments.' },
];

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
