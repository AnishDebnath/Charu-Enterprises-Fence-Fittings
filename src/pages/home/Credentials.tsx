import type { FC } from 'react';
import { yearBadge, isoBadge, zeroDefectBadge, bannerAbout } from '../../data/images';

interface ProjectFinderProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'application' | 'product-detail' | 'contact') => void;
}

export const ProjectFinder: FC<ProjectFinderProps> = ({ onNavigate }) => {
  const badges = [
    {
      id: 'heritage',
      image: yearBadge,
      tag: 'Generational Trust',
      title: '55+ Years of Industry Trust',
      description:
        'Over 55 years of manufacturing experience, high-precision tooling, and trusted global supply partnerships.',
      alt: '55+ Years of Trust and Manufacturing Heritage Badge',
    },
    {
      id: 'iso',
      image: isoBadge,
      tag: 'Global Standards',
      title: 'ISO 9001:2015 Certified',
      description:
        'Strict quality system ensuring strong steel, ASTM A153 hot-dip galvanizing, and full batch traceability.',
      alt: 'ISO 9001:2015 Quality Management System Certification Badge',
    },
    {
      id: 'zero-defect',
      image: zeroDefectBadge,
      tag: '100% Inspected',
      title: 'Zero-Defect Quality Assurance',
      description:
        'Multi-stage inspections including thread gauging, tensile stress testing, and official Mill Test Certificates.',
      alt: '100% Zero-Defect Quality Assurance Guarantee Badge',
    },
  ];

  return (
    <section
      id="procurement-assurance"
      className="w-full relative py-12 sm:py-14 lg:py-16 font-['Outfit',sans-serif] overflow-hidden border-t border-b border-slate-900/60"
    >
      {/* Background Image with Dark Vignette & Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bannerAbout}
          alt="Charu Enterprises precision manufacturing facility"
          loading="lazy"
          className="w-full h-full object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070e24]/90 via-[#0a1532]/80 to-[#070e24]/90" />
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#3B82F6]/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Center Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 justify-center">
            <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block" />
            <span className="text-[#60A5FA] text-xs sm:text-sm font-bold tracking-tight uppercase">
              Procurement &amp; Quality Credentials
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight leading-[1.2]">
            Certified Quality &amp; Reliable Supply <br className="hidden sm:inline" />
            for Global Fence Distributors.
          </h2>
        </div>

        {/* Grid: 2-1 layout on Mobile (< sm), Single Line 3-Column layout on Tablet & Desktop (sm+) */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-6 items-stretch">
          {badges.map((item, index) => {
            const isLast = index === badges.length - 1;
            return (
              <div
                key={item.id}
                onClick={() => onNavigate?.('contact')}
                className={`bg-white rounded-[18px] sm:rounded-[20px] md:rounded-[22px] p-3.5 xs:p-4 sm:p-5 md:p-6 flex flex-col items-center text-center shadow-xl hover:shadow-[0_16px_40px_rgba(59,130,246,0.18)] transition-all duration-300 transform hover:-translate-y-1 group border border-slate-100/90 cursor-pointer ${
                  isLast
                    ? 'col-span-2 w-[calc(50%-0.375rem)] xs:w-[calc(50%-0.5rem)] sm:w-full sm:col-span-1 mx-auto sm:mx-0'
                    : 'w-full'
                }`}
              >
                {/* Badge Visual Container */}
                <div className="relative w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 mb-2.5 xs:mb-3 sm:mb-3.5 flex items-center justify-center p-2 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-[#f0f6ff] transition-colors duration-300">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Tag Pill */}
                <span className="inline-block px-2 xs:px-2.5 py-0.5 bg-[#f0f6ff] text-[#1E40AF] text-[10px] xs:text-[11px] font-bold rounded-full mb-1.5 xs:mb-2 border border-blue-100">
                  {item.tag}
                </span>

                {/* Title */}
                <h3 className="text-xs xs:text-sm sm:text-[15px] font-bold text-[#0a1532] tracking-tight group-hover:text-[#3B82F6] transition-colors mb-1 xs:mb-1.5 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-[10px] xs:text-[11px] sm:text-xs leading-tight xs:leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
