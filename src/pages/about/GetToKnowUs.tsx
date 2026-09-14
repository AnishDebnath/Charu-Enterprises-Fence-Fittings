import type { FC } from 'react';
import { ArrowRight } from 'lucide-react';

interface GetToKnowUsProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'case-study' | 'product-detail' | 'contact') => void;
}

export const GetToKnowUs: FC<GetToKnowUsProps> = ({ onNavigate }) => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      alt: 'Charu Enterprises precision stamping & power press facility',
      isUpper: true, // Left side image: upper position
    },
    {
      src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      alt: 'Hot-dip galvanizing zinc kettle operations per ASTM A153',
      isUpper: false, // Middle left image: lower position
    },
    {
      src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      alt: 'In-house tool and die design engineering room',
      isUpper: false, // Middle right image: lower position
    },
    {
      src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      alt: 'Palletized container export packaging ready for seaport loading',
      isUpper: true, // Right side image: upper position
    },
  ];

  const stats = [
    {
      value: '35+',
      label: 'Years of manufacturing & export excellence',
    },
    {
      value: '12,000+',
      label: 'Metric tons annual production capacity',
    },
    {
      value: '40+',
      label: 'Global export destination countries',
    },
    {
      value: '100%',
      label: 'ASTM A153 compliant hot-dip galvanizing',
    },
  ];

  return (
    <section className="w-full bg-white py-14 sm:py-18 lg:py-20 font-['Outfit',sans-serif] border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Section - Full Section Width Edge to Edge */}
        <div className="w-full text-center flex flex-col items-center mb-3 sm:mb-4 lg:mb-5">
          {/* Eyebrow with gold accent bar and royal blue text */}
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block" />
            <span className="text-[#3B82F6] text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Get to know us
            </span>
          </div>

          {/* Full section width headline with refined, harmonious font weights */}
          <h2 className="w-full text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[34px] font-normal leading-[1.35] tracking-tight">
            <span className="font-semibold text-[#0a1532]">
              Meet your dependable manufacturing partner for industrial fence fittings and hardware. With over three decades of engineering excellence, Charu Enterprises delivers
            </span>{' '}
            <span className="text-slate-500 font-light sm:font-normal">
              precision pressed steel, malleable iron castings, and custom tooling directly to international distributors.
            </span>
          </h2>

          {/* Centered CTA Pill Button matching Home page size with reduced space to images */}
          <div className="mt-3.5 sm:mt-4">
            <button
              type="button"
              onClick={() => onNavigate?.('contact')}
              className="group/btn bg-[#3B82F6] hover:bg-[#DBEAFE] text-white hover:text-black font-semibold pl-6 pr-2.5 py-3 rounded-full inline-flex items-center gap-3 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer font-['Outfit',sans-serif]"
            >
              <span className="transition-colors">Request Factory Direct Quote</span>
              <div className="w-7 h-7 rounded-full bg-white group-hover/btn:bg-[#3B82F6] flex items-center justify-center text-[#3B82F6] group-hover/btn:text-white shadow-sm shrink-0 transition-colors">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </button>
          </div>
        </div>

        {/* 4 Image Cards Grid: 3/4 ratio, outer upper / middle lower, reduced spacing to button */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-14 sm:mb-18 lg:mb-20 pt-1 lg:pt-2">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`group relative rounded-2xl sm:rounded-3xl lg:rounded-[26px] overflow-hidden aspect-[3/4] w-full shadow-md hover:shadow-xl transition-all duration-500 border border-slate-200/80 bg-slate-100 ${
                img.isUpper
                  ? 'lg:-translate-y-5 xl:-translate-y-7'
                  : 'lg:translate-y-5 xl:translate-y-7'
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom 4-Column Stats Row with refined typographic weights */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-2">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col justify-start ${
                  index !== 0 ? 'md:border-l md:border-blue-200/70 md:pl-8' : ''
                }`}
              >
                <span className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0a1532] tracking-tight mb-1.5 font-['Outfit',sans-serif]">
                  {stat.value}
                </span>
                <p className="text-sm sm:text-base text-slate-500 leading-snug font-normal max-w-[190px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GetToKnowUs;
