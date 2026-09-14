import type { FC } from 'react';
import { ArrowRight } from 'lucide-react';

interface ServicesShowcaseProps {
  onNavigate?: (page: 'home' | 'about' | 'services' | 'projects' | 'project-detail' | 'contact') => void;
}

export const ServicesShowcase: FC<ServicesShowcaseProps> = ({ onNavigate }) => {
  const services = [
    {
      id: 1,
      title: 'Pressed Steel Fence Fittings',
      description: 'Heavy-duty brace bands, tension bands, post caps, rail ends, and carriage bolt hardware.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      alt: 'Pressed steel fence fittings manufacturing and stamping',
    },
    {
      id: 2,
      title: 'Malleable Iron Gate Hardware',
      description: 'Industrial 180° offset hinges, malleable box hinges, cantilever rollers, & latch assemblies.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      alt: 'Malleable iron casting and fence gate hardware',
    },
    {
      id: 3,
      title: 'Hot-Dip Galvanizing (ASTM A153)',
      description: 'Automated zinc kettles delivering heavy 85+ micron protective coatings for extreme durability.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      alt: 'Hot-dip galvanizing plant and quality inspection',
    },
    {
      id: 4,
      title: 'In-House Tool & Die Engineering',
      description: 'Custom progressive stamping dies, CAD/CAM design, and rapid first-article prototype runs.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
      alt: 'In-house tool and die engineering workshop',
    },
    {
      id: 5,
      title: 'Aluminum Fence Fittings',
      description: 'Corrosion-proof aluminum dome caps, loop caps, and ornamental security bracket assemblies.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Aluminum fence fittings and caps',
    },
    {
      id: 6,
      title: 'Turnkey Container Export Logistics',
      description: 'Palletized strapping, barcode tagging, container load optimization, & FOB/CIF/DDP shipping.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      alt: 'Container shipment export packaging at dock',
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 font-['Outfit',sans-serif] border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching uploaded screenshot */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center mb-12 sm:mb-16 lg:mb-18">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block" />
            <span className="text-[#3B82F6] text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Our Capabilities &amp; Products
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0a1532] leading-[1.15] tracking-tight mb-3 sm:mb-4">
            Engineered Fence Fittings &amp; Metallurgy.
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-2xl">
            From high-volume commercial chain link hardware to custom progressive tooling, we manufacture dependable hardware for security distributors worldwide.
          </p>
        </div>

        {/* 3-Column Services Grid using exact Home Page Card Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => onNavigate?.('contact')}
              className="group relative rounded-[32px] sm:rounded-[36px] overflow-hidden aspect-square w-full bg-[#071128] flex flex-col justify-between p-6 sm:p-7 transition-all duration-500 hover:-translate-y-1.5 shadow-lg hover:shadow-2xl cursor-pointer select-none border border-slate-200/60"
            >
              {/* Card Image */}
              <img
                src={service.image}
                alt={service.alt}
                className="absolute inset-0 w-full h-full object-cover object-center opacity-100 group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071128]/95 via-[#071128]/40 via-50% to-[#071128]/10" />

              {/* Top-Right Cutout Notch with Concave Fillets matching Home Page */}
              <div className="absolute top-0 right-0 w-[74px] h-[74px] sm:w-[82px] sm:h-[82px] bg-white rounded-bl-[28px] sm:rounded-bl-[32px] pointer-events-none z-20 flex items-center justify-center">
                {/* Left concave fillet */}
                <div className="absolute top-0 -left-5 w-5 h-5 overflow-hidden pointer-events-none">
                  <div className="w-10 h-10 rounded-tr-[22px] shadow-[10px_-10px_0_0_#ffffff]" />
                </div>
                {/* Bottom concave fillet */}
                <div className="absolute -bottom-5 right-0 w-5 h-5 overflow-hidden pointer-events-none">
                  <div className="w-10 h-10 rounded-tr-[22px] shadow-[10px_-10px_0_0_#ffffff]" />
                </div>

                {/* Circular Arrow Button inside the Notch */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-100 group-hover:bg-[#3B82F6] text-[#0a1532] group-hover:text-white flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105 pointer-events-auto border border-slate-200">
                  <ArrowRight className="w-5 h-5 stroke-[2] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              {/* Top spacer */}
              <div />

              {/* Bottom Content Area matching Home Page */}
              <div className="relative z-10 space-y-2.5">
                {/* Crossed Tools Frosted Badge */}
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

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-sm">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-medium max-w-sm drop-shadow-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesShowcase;
