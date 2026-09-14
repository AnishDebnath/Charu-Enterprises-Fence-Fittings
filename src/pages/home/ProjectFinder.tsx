import type { FC } from 'react';
import yearBadge from '../../assets/badge/year.png';
import isoBadge from '../../assets/badge/iso.png';
import zeroDefectBadge from '../../assets/badge/zero-defect.png';

interface ProjectFinderProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'case-study' | 'product-detail' | 'contact') => void;
}

export const ProjectFinder: FC<ProjectFinderProps> = ({ onNavigate }) => {
  const badges = [
    {
      id: 'heritage',
      image: yearBadge,
      tag: 'Generational Trust',
      title: '55+ Years of Industry Trust',
      description:
        'Over 6 decades of continuous manufacturing excellence, proprietary tooling, and trusted global supply partnerships.',
      alt: '55+ Years of Trust and Manufacturing Heritage Badge',
    },
    {
      id: 'iso',
      image: isoBadge,
      tag: 'Global Standards',
      title: 'ISO 9001:2015 Certified',
      description:
        'Strictly audited quality management ensuring metallurgical integrity, ASTM A153 galvanizing, and batch traceability.',
      alt: 'ISO 9001:2015 Quality Management System Certification Badge',
    },
    {
      id: 'zero-defect',
      image: zeroDefectBadge,
      tag: '100% Inspected',
      title: 'Zero-Defect Quality Assurance',
      description:
        'Multi-stage pre-shipment inspections including Go/No-Go thread gauging, tensile stress testing, and Mill Test Certificates.',
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
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2400&q=85"
          alt="Charu Enterprises precision manufacturing facility"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay matching website aesthetic */}
        <div className="absolute inset-0 bg-[#071128]/90 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071128] via-[#071128]/80 to-[#071128]/95" />
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
            Certified Manufacturing &amp; Reliability <br className="hidden sm:inline" />
            for High-Volume Global Procurement.
          </h2>
        </div>

        {/* Compact Centered 3 Badges Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch">
          {badges.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate?.('contact')}
              className="bg-white rounded-[20px] sm:rounded-[22px] p-4 sm:p-5 flex flex-col items-center text-center shadow-xl hover:shadow-[0_16px_40px_rgba(59,130,246,0.18)] transition-all duration-300 transform hover:-translate-y-1 group border border-slate-100/90 cursor-pointer"
            >
              {/* Badge Visual Container */}
              <div className="relative w-20 h-20 sm:w-22 sm:h-22 mb-3.5 flex items-center justify-center p-2 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-[#f0f6ff] transition-colors duration-300">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Tag Pill */}
              <span className="inline-block px-2.5 py-0.5 bg-[#f0f6ff] text-[#1E40AF] text-[11px] font-bold rounded-full mb-2 border border-blue-100">
                {item.tag}
              </span>

              {/* Title */}
              <h3 className="text-sm sm:text-[15px] font-bold text-[#0a1532] tracking-tight group-hover:text-[#3B82F6] transition-colors mb-1.5">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
