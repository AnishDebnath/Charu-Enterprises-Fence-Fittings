import type { FC } from 'react';
import { Phone, ArrowRight, Star, Check, ArrowUpRight } from 'lucide-react';

export const Hero: FC = () => {
  return (
    <div className="w-full bg-white px-2 sm:px-3 md:px-4 pt-2 sm:pt-3 pb-2">
      {/* Outer Rounded Hero Container Card with slightly increased height */}
      <div className="w-full bg-[#0a1532] rounded-2xl sm:rounded-[24px] lg:rounded-[28px] overflow-hidden relative shadow-2xl min-h-[700px] md:min-h-[760px] lg:min-h-[800px] xl:min-h-[830px] flex flex-col justify-between border border-blue-900/50 font-['Outfit',sans-serif]">
        {/* Background Image spanning full screen size card with reduced overlay for maximum clarity */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2560&q=85"
            alt="Carpenter crafting outdoor deck"
            className="w-full h-full object-cover object-[70%_center] lg:object-[80%_center] opacity-95"
          />
          {/* Reduced multi-stop gradient overlay so image clearly shows */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071128]/85 via-[#071128]/55 via-50% to-[#071128]/15 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071128]/90 via-transparent to-[#071128]/25 z-10" />
        </div>

        {/* Hero Body Content */}
        <div className="relative z-20 w-full flex-1 flex flex-col justify-center my-auto pt-30 sm:pt-34 lg:pt-38 pb-12 sm:pb-14 lg:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
            {/* Left Column Content */}
            <div className="lg:col-span-8 space-y-5 sm:space-y-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block" />
                <span className="text-[#60A5FA] text-sm sm:text-base font-semibold tracking-wide">
                  Your Partner in Outdoor Living
                </span>
              </div>

              {/* Headline - Restored original font size */}
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-[#FFFFFF] leading-[1.12]">
                Build Outdoor Space <br />
                Made for Better Living
              </h1>

              {/* Subtitle - Restored original font size */}
              <p className="text-neutral-100 text-base sm:text-lg max-w-xl leading-relaxed font-normal">
                Deckora helps homeowners plan and build decks, patios, pergolas, porches, and outdoor spaces that feel useful, warm, and ready for everyday life.
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                {/* Schedule Service Pill */}
                <button
                  className="group bg-[#3B82F6] hover:bg-[#DBEAFE] text-white hover:text-black font-bold pl-6 pr-2.5 py-3 rounded-full flex items-center gap-3 text-sm sm:text-base shadow-xl transition-all transform hover:scale-105 cursor-pointer"
                >
                  <span className="transition-colors">Schedule Service</span>
                  <div className="w-7 h-7 rounded-full bg-white group-hover:bg-[#3B82F6] flex items-center justify-center text-[#3B82F6] group-hover:text-white shadow-sm shrink-0 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </button>

                {/* Call Now Pill */}
                <a
                  href="tel:+123450346"
                  className="group bg-transparent hover:bg-[#DBEAFE] text-white hover:text-black font-semibold pl-3.5 pr-6 py-3 rounded-full flex items-center gap-2.5 border border-white hover:border-[#DBEAFE] backdrop-blur-sm text-sm sm:text-base transition-all transform hover:scale-105 shadow-lg"
                >
                  <div className="w-7 h-7 rounded-full bg-white group-hover:bg-[#22C55E] text-[#0a1532] group-hover:text-white flex items-center justify-center shadow-sm shrink-0 transition-colors">
                    <Phone className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className="transition-colors">Call Now</span>
                </a>
              </div>

              {/* Ratings row */}
              <div className="pt-2 flex items-center gap-3.5">
                <div className="flex -space-x-2 overflow-hidden py-1">
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white border border-white object-cover shadow-sm"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    alt="Customer"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white border border-white object-cover shadow-sm"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="Customer"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white border border-white object-cover shadow-sm"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80"
                    alt="Customer"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white border border-white object-cover shadow-sm"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                    alt="Customer"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-1 text-[#f0c75e]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-[#FFFFFF] font-semibold mt-0.5">
                    4.9 rating from local homeowners
                  </p>
                </div>
              </div>

              {/* Bottom Feature Key Points in a single line with blue background and white check icons */}
              <div className="pt-5 border-t border-white/20">
                <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 sm:gap-6 text-sm sm:text-[15px] text-[#FFFFFF] font-semibold">
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-5 h-5 rounded-full bg-[#3B82F6] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Check className="w-3.2 h-3.2 text-white stroke-[3.5]" />
                    </div>
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-5 h-5 rounded-full bg-[#3B82F6] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Check className="w-3.2 h-3.2 text-white stroke-[3.5]" />
                    </div>
                    <span>Built for Real Homes</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-5 h-5 rounded-full bg-[#3B82F6] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Check className="w-3.2 h-3.2 text-white stroke-[3.5]" />
                    </div>
                    <span>Clear Estimates</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-5 h-5 rounded-full bg-[#3B82F6] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Check className="w-3.2 h-3.2 text-white stroke-[3.5]" />
                    </div>
                    <span>On-time Builds</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Floating 320+ Projects Card */}
            <div className="lg:col-span-4 flex justify-end items-end w-full">
              <div className="bg-white rounded-[22px] p-2.5 sm:p-3 shadow-2xl border border-white/80 max-w-[300px] sm:max-w-[330px] w-full transform transition-all hover:-translate-y-1 group cursor-pointer">
                {/* Thumbnail of finished backyard project */}
                <div className="h-44 sm:h-50 rounded-[16px] overflow-hidden mb-2.5 relative bg-neutral-100">
                  <img
                    src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=700&q=80"
                    alt="Backyard Deck Project"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Bottom row matching user screenshot */}
                <div className="px-1.5 py-1 flex items-center justify-between">
                  <span className="text-base sm:text-[17px] font-semibold text-neutral-900 tracking-tight">
                    320+ Projects completed
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
