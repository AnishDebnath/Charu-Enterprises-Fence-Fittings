import type { FC } from 'react';
import { Phone, ArrowRight, Star, Check, ArrowUpRight } from 'lucide-react';
import bannerVideo from '../../assets/banner video.mp4';

interface HeroProps {
  onNavigate?: (page: 'home' | 'about' | 'services' | 'projects' | 'project-detail' | 'contact') => void;
}

export const Hero: FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-white px-2 sm:px-3 md:px-4 pt-2 sm:pt-3 pb-2">
      {/* Outer Rounded Hero Container Card with slightly increased height */}
      <div className="w-full bg-[#0a1532] rounded-2xl sm:rounded-[24px] lg:rounded-[28px] overflow-hidden relative shadow-2xl min-h-[700px] md:min-h-[760px] lg:min-h-[800px] xl:min-h-[830px] flex flex-col justify-between border border-blue-900/50 font-['Outfit',sans-serif]">
        {/* Background Video spanning full screen size card with industrial metallurgy texture */}
        <div className="absolute inset-0 z-0">
          <video
            src={bannerVideo}
            poster="/charu poster.jpeg"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-[70%_center] lg:object-[80%_center] opacity-85"
          >
            <source src={bannerVideo} type="video/mp4" />
          </video>
          {/* Reduced multi-stop gradient overlay so image clearly shows */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071128]/90 via-[#071128]/65 via-50% to-[#071128]/25 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071128]/95 via-transparent to-[#071128]/35 z-10" />
        </div>

        {/* Hero Body Content */}
        <div className="relative z-20 w-full flex-1 flex flex-col justify-center my-auto pt-32 sm:pt-36 lg:pt-42 pb-14 sm:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
            {/* Left Column Content */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-7">
              {/* Eyebrow */}
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block" />
                <span className="text-[#60A5FA] text-sm sm:text-base font-semibold tracking-wide uppercase">
                  Mfg Since 1969 • Celebrating 55+ Years of Growth
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#FFFFFF] leading-[1.12]">
                Global Leader in <br />
                Fence Fittings & Hardware
              </h1>

              {/* Subtitle */}
              <p className="text-neutral-100 text-base sm:text-lg max-w-xl leading-relaxed font-normal">
                Manufacturers & exporters of Pressed Steel, Malleable Iron, and Aluminum Fence Fittings & Tension Bars. 150 Million+ pieces exported across 4 continents with 100% Zero Defects and duty-paid warehouse delivery.
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                {/* Explore Catalog Pill */}
                <button
                  type="button"
                  onClick={() => onNavigate?.('projects')}
                  className="group bg-[#3B82F6] hover:bg-[#DBEAFE] text-white hover:text-black font-bold pl-6 pr-2.5 py-3 rounded-full flex items-center gap-3 text-sm sm:text-base shadow-xl transition-all transform hover:scale-105 cursor-pointer"
                >
                  <span className="transition-colors">Explore Catalog A25</span>
                  <div className="w-7 h-7 rounded-full bg-white group-hover:bg-[#3B82F6] flex items-center justify-center text-[#3B82F6] group-hover:text-white shadow-sm shrink-0 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </button>

                {/* Call Now Pill */}
                <a
                  href="tel:+919830083777"
                  className="group bg-transparent hover:bg-[#DBEAFE] text-white hover:text-black font-semibold pl-3.5 pr-6 py-3 rounded-full flex items-center gap-2.5 border border-white hover:border-[#DBEAFE] backdrop-blur-sm text-sm sm:text-base transition-all transform hover:scale-105 shadow-lg"
                >
                  <div className="w-7 h-7 rounded-full bg-white group-hover:bg-[#22C55E] text-[#0a1532] group-hover:text-white flex items-center justify-center shadow-sm shrink-0 transition-colors">
                    <Phone className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className="transition-colors">Call: +91 9830083777</span>
                </a>
              </div>

              {/* Ratings row */}
              <div className="pt-2 flex flex-wrap sm:flex-nowrap items-center gap-3.5">
                <div className="flex items-center -space-x-2.5 shrink-0 px-1 py-1">
                  <img
                    className="inline-block h-9.5 w-9.5 rounded-full ring-2 ring-white object-cover shadow-md shrink-0 relative z-40"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    alt="International Client"
                  />
                  <img
                    className="inline-block h-9.5 w-9.5 rounded-full ring-2 ring-white object-cover shadow-md shrink-0 relative z-30"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="International Client"
                  />
                  <img
                    className="inline-block h-9.5 w-9.5 rounded-full ring-2 ring-white object-cover shadow-md shrink-0 relative z-20"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80"
                    alt="International Client"
                  />
                  <img
                    className="inline-block h-9.5 w-9.5 rounded-full ring-2 ring-white object-cover shadow-md shrink-0 relative z-10"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                    alt="International Client"
                  />
                </div>

                <div className="shrink-0">
                  <div className="flex items-center gap-1 text-[#f0c75e]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-[#FFFFFF] font-semibold mt-0.5">
                    100% Satisfaction • 150M+ Pieces Exported Globally
                  </p>
                </div>
              </div>

              {/* Bottom Feature Key Points with increased top gap */}
              <div className="pt-7 sm:pt-8">
                <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 sm:gap-6 text-sm sm:text-[15px] text-[#FFFFFF] font-semibold">
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-5 h-5 rounded-full bg-[#3B82F6] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Check className="w-3.2 h-3.2 text-white stroke-[3.5]" />
                    </div>
                    <span>ISO 9001:2015 Certified</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-5 h-5 rounded-full bg-[#3B82F6] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Check className="w-3.2 h-3.2 text-white stroke-[3.5]" />
                    </div>
                    <span>Zero Defects Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-5 h-5 rounded-full bg-[#3B82F6] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Check className="w-3.2 h-3.2 text-white stroke-[3.5]" />
                    </div>
                    <span>30+ Yrs FENCETECH</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-5 h-5 rounded-full bg-[#3B82F6] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Check className="w-3.2 h-3.2 text-white stroke-[3.5]" />
                    </div>
                    <span>Govt. Export Awardee</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Floating 150M+ Pieces Card */}
            <div className="lg:col-span-4 flex justify-end items-end w-full">
              <div
                onClick={() => onNavigate?.('projects')}
                className="bg-white rounded-[22px] p-2.5 sm:p-3 shadow-2xl border border-white/80 max-w-[300px] sm:max-w-[330px] w-full transform transition-all hover:-translate-y-1 group cursor-pointer"
              >
                {/* Thumbnail of industrial fence fittings catalog */}
                <div className="h-44 sm:h-50 rounded-[16px] overflow-hidden mb-2.5 relative bg-neutral-100">
                  <img
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=80"
                    alt="Charu Enterprises Fence Fittings"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#0a1532]/90 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs font-bold">
                    Catalog A25
                  </div>
                </div>
                
                {/* Bottom row matching user screenshot */}
                <div className="px-1.5 py-1 flex items-center justify-between">
                  <span className="text-base sm:text-[17px] font-semibold text-neutral-900 tracking-tight">
                    150M+ Pieces Exported
                  </span>
                  <div className="flex flex-col items-center justify-center shrink-0 pl-2 text-neutral-900 group-hover:text-[#3B82F6] transition-colors">
                    <ArrowUpRight className="w-4.5 h-4.5 stroke-[2.2] -mb-0.5" />
                    <span className="w-3.5 h-[1.5px] bg-current rounded-full"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
