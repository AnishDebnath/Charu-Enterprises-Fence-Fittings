import type { FC } from 'react';
import { ArrowRight, Phone } from 'lucide-react';

interface BackyardCTAProps {
  onNavigate?: (page: 'home' | 'about' | 'services' | 'projects' | 'project-detail' | 'contact') => void;
}

export const BackyardCTA: FC<BackyardCTAProps> = ({ onNavigate }) => {
  return (
    <section
      id="estimate-cta"
      className="relative w-full overflow-hidden font-['Outfit',sans-serif] border-t border-b border-slate-900/60"
    >
      {/* Background Image of Outdoor Yard & Craftsmanship */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80"
          alt="Outdoor craftsman working on backyard improvement"
          className="w-full h-full object-cover object-[center_35%]"
        />
        {/* Balanced Dark Navy Overlay to keep image visible while ensuring contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070e24]/85 via-[#0a1532]/75 to-[#070e24]/85" />
        {/* Subtle Brand Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#3B82F6]/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Content Container with Compact Slim Height */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 text-center flex flex-col items-center justify-center">
        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.2] max-w-3xl drop-shadow-md">
          Ready to turn your backyard into a space you actually use?
        </h2>

        {/* Supporting Description */}
        <p className="mt-2.5 sm:mt-3 text-slate-100 text-xs sm:text-sm md:text-base max-w-2xl font-medium leading-relaxed drop-shadow-sm">
          Tell us what you want to build, repair, or improve. We will help you plan the next step with a clear project estimate.
        </p>

        {/* Interactive CTA Buttons Row */}
        <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          {/* Primary Action Button: Get a Free Estimate */}
          <button
            type="button"
            onClick={() => onNavigate ? onNavigate('contact') : (window.location.hash = '/contact')}
            className="group w-full sm:w-auto bg-[#3B82F6] hover:bg-[#DBEAFE] text-white hover:text-black font-bold pl-5 sm:pl-6 pr-2 py-2.5 sm:py-3 rounded-full flex items-center justify-center gap-3 text-xs sm:text-sm md:text-base shadow-xl transition-all transform hover:scale-105 cursor-pointer"
          >
            <span className="transition-colors">Get a free estimate</span>
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white group-hover:bg-[#3B82F6] flex items-center justify-center text-[#3B82F6] group-hover:text-white shadow-sm shrink-0 transition-colors">
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
            </div>
          </button>

          {/* Secondary Action Button: Call Direct */}
          <a
            href="tel:5550128842"
            className="group w-full sm:w-auto bg-black/35 hover:bg-[#DBEAFE] text-white hover:text-black font-semibold pl-3 pr-5 sm:pr-6 py-2.5 sm:py-3 rounded-full flex items-center justify-center gap-2.5 border border-white/70 hover:border-[#DBEAFE] backdrop-blur-md text-xs sm:text-sm md:text-base transition-all transform hover:scale-105 shadow-lg cursor-pointer"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white group-hover:bg-[#22C55E] text-[#0a1532] group-hover:text-white flex items-center justify-center shadow-sm shrink-0 transition-colors">
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
            </div>
            <span className="transition-colors">Call (555) 012-8842</span>
          </a>
        </div>
      </div>
    </section>
  );
};
