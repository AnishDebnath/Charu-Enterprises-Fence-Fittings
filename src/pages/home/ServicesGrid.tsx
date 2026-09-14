import type { FC } from 'react';
import { ArrowRight } from 'lucide-react';

interface ServicesGridProps {
  onNavigate?: (page: 'home' | 'about' | 'services' | 'projects' | 'project-detail' | 'contact') => void;
}

export const ServicesGrid: FC<ServicesGridProps> = ({ onNavigate }) => {
  const services = [
    {
      title: 'Pressed Steel Fence Fittings',
      description: 'Barbed wire arms, boulevard clamps, gate corners, male hinges, and heavy-duty chainlink hardware.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Malleable Iron Fittings',
      description: '180° industrial offset hinges, box hinges, round floor flanges, and industrial gate hardware.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Aluminum Fittings & Caps',
      description: 'High-grade bullet caps, loop caps, acorn post caps, tie wires, and hog rings for commercial fences.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Tension Bars & Bands',
      description: 'Galvanized high-tensile tension bars, 3/4" x 14 GA & 12 GA bands, brace bands, and truss rods.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Cantilever & Gate Hardware',
      description: 'Heavy cantilever rollers with covers, sliding gate hardware kits, and double wheel carriers.',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Custom Sheet Metal Fabrication',
      description: 'Complete in-house tool & die development for custom metal stampings as per your engineering drawings.',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    },
  ];

  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...services, ...services];

  return (
    <section id="products" className="w-full bg-[#DBEAFE] py-16 sm:py-20 lg:py-24 font-['Outfit',sans-serif] overflow-hidden border-b border-blue-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-12 sm:mb-14 lg:mb-16 items-start">
          {/* Left Column: Eyebrow + Big Headline */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block" />
              <span className="text-[#2563EB] text-sm sm:text-base font-bold tracking-tight uppercase">
                Manufacturing Range
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0a1532] leading-[1.18] tracking-tight">
              Engineered Fence Fittings <br className="hidden sm:inline" />
              & Custom Fabrications.
            </h2>
          </div>

          {/* Right Column: Paragraph + Blue CTA Button */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-4 pt-1">
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-md font-medium">
              Supplying high-tensile hot-dip galvanized pressed steel, malleable iron, and aluminum fence hardware to master distributors worldwide.
            </p>

            <button
              type="button"
              onClick={() => onNavigate?.('services')}
              className="group/btn bg-[#3B82F6] hover:bg-[#0a1532] text-white font-bold pl-6 pr-2.5 py-3 rounded-full flex items-center gap-3 text-sm sm:text-base shadow-xl transition-all transform hover:scale-105 cursor-pointer"
            >
              <span className="transition-colors">View All Products</span>
              <div className="w-7 h-7 rounded-full bg-white group-hover/btn:bg-[#3B82F6] text-[#3B82F6] group-hover/btn:text-white flex items-center justify-center shadow-sm shrink-0 group-hover/btn:translate-x-0.5 transition-all">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Marquee Container moving left-to-right showing ~3 large cards per view */}
      <div className="relative w-full overflow-hidden py-4">
        <div className="animate-marquee-ltr flex gap-6 sm:gap-7 lg:gap-8 cursor-grab active:cursor-grabbing px-4">
          {marqueeItems.map((service, index) => (
            <div
              key={index}
              onClick={() => onNavigate?.('services')}
              className="group relative rounded-[32px] sm:rounded-[36px] overflow-hidden aspect-square w-[310px] sm:w-[360px] md:w-[390px] lg:w-[420px] xl:w-[440px] shrink-0 bg-[#071128] flex flex-col justify-between p-6 sm:p-7 transition-all duration-500 hover:-translate-y-1.5 shadow-lg hover:shadow-2xl cursor-pointer select-none border border-slate-200/60"
            >
              {/* Card Image - Clear high visibility */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover object-center opacity-100 group-hover:scale-105 transition-transform duration-700"
              />

              {/* Reduced Gradient Overlay so image clearly shows while maintaining text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071128]/95 via-[#071128]/40 via-50% to-[#071128]/10" />

              {/* Top-Right Cutout Notch with Concave Fillets */}
              <div className="absolute top-0 right-0 w-[74px] h-[74px] sm:w-[82px] sm:h-[82px] bg-[#DBEAFE] rounded-bl-[28px] sm:rounded-bl-[32px] pointer-events-none z-20 flex items-center justify-center">
                {/* Left concave fillet */}
                <div className="absolute top-0 -left-5 w-5 h-5 overflow-hidden pointer-events-none">
                  <div className="w-10 h-10 rounded-tr-[22px] shadow-[10px_-10px_0_0_#DBEAFE]" />
                </div>
                {/* Bottom concave fillet */}
                <div className="absolute -bottom-5 right-0 w-5 h-5 overflow-hidden pointer-events-none">
                  <div className="w-10 h-10 rounded-tr-[22px] shadow-[10px_-10px_0_0_#DBEAFE]" />
                </div>

                {/* Circular Arrow Button inside the Notch */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white group-hover:bg-[#3B82F6] text-[#0a1532] group-hover:text-white flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105 pointer-events-auto border border-blue-200">
                  <ArrowRight className="w-5 h-5 stroke-[2] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              {/* Top spacer */}
              <div />

              {/* Bottom Content Area */}
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
