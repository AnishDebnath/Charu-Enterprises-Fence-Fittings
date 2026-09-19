import type { FC } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { bannerAbout } from '../../data/images';

interface BackyardCTAProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'application' | 'product-detail' | 'contact') => void;
}

export const CallToAction: FC<BackyardCTAProps> = ({ onNavigate }) => {
  return (
    <section
      id="estimate-cta"
      className="relative w-full overflow-hidden font-['Outfit',sans-serif] border-t border-b border-slate-900/60"
    >
      {/* Background Image of Industrial Manufacturing & Craftsmanship */}
      <div className="absolute inset-0 z-0">
        <img
          src={bannerAbout}
          alt="Charu Enterprises fence fittings manufacturing & hot-dip galvanizing"
          loading="lazy"
          className="w-full h-full object-cover object-[center_35%]"
        />
        {/* Balanced Dark Navy Overlay to keep image visible while ensuring contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070e24]/90 via-[#0a1532]/80 to-[#070e24]/90" />
        {/* Subtle Brand Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#3B82F6]/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Content Container with Compact Slim Height */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-10 sm:py-12 md:py-14 lg:py-16 text-center flex flex-col items-center justify-center">
        {/* Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 justify-center mb-2.5 sm:mb-3">
          <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block shrink-0" />
          <span className="text-[#60A5FA] text-xs sm:text-sm md:text-base font-bold tracking-wider uppercase">
            Factory Direct Pricing
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.2] max-w-3xl drop-shadow-md">
          Ready to Order Fence Fittings?
        </h2>

        {/* Supporting Description */}
        <p className="mt-2.5 sm:mt-3 text-slate-100 text-xs sm:text-sm md:text-base max-w-2xl font-medium leading-relaxed drop-shadow-sm">
          Send your specifications or drawings. We offer direct factory prices and fast worldwide shipping.
        </p>

        {/* Interactive CTA Buttons Row */}
        <div className="mt-5 sm:mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {/* Primary Action Button: Get a Free Estimate */}
          <button
            type="button"
            onClick={() => (onNavigate ? onNavigate('contact') : (window.history.pushState(null, '', '/contact'), window.dispatchEvent(new PopStateEvent('popstate'))))}
            className="group w-fit bg-[#3B82F6] hover:bg-[#DBEAFE] text-white hover:text-black font-bold pl-5 sm:pl-6 pr-2.5 py-2.5 sm:py-3 rounded-full inline-flex items-center justify-center gap-3 text-xs sm:text-sm md:text-base shadow-xl transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <span className="transition-colors">Get a Quote</span>
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white group-hover:bg-[#3B82F6] flex items-center justify-center text-[#3B82F6] group-hover:text-white shadow-sm shrink-0 transition-colors">
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </button>

          {/* Secondary Action Button: Call Direct */}
          <a
            href={`tel:${COMPANY_INFO.phones.indiaPrimary.replace(/[^0-9+]/g, '')}`}
            className="group w-fit bg-black/35 hover:bg-[#DBEAFE] text-white hover:text-black font-semibold pl-3.5 sm:pl-4 pr-5 sm:pr-6 py-2.5 sm:py-3 rounded-full inline-flex items-center justify-center gap-2.5 border border-white/70 hover:border-[#DBEAFE] backdrop-blur-md text-xs sm:text-sm md:text-base transition-all transform hover:scale-105 shadow-lg cursor-pointer whitespace-nowrap"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white group-hover:bg-[#22C55E] text-[#0a1532] group-hover:text-white flex items-center justify-center shadow-sm shrink-0 transition-colors">
              <Phone className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="transition-colors">Call Us Now</span>
          </a>
        </div>
      </div>
    </section>
  );
};
