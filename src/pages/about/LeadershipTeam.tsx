import type { FC } from 'react';
import { COMPANY_INFO } from '../../data/companyData';
import { getCloudinaryUrl } from '../../utils/cloudinary';
const opMaskaraImg = getCloudinaryUrl('mr-op-maskara.jpg');
const somMaskaraImg = getCloudinaryUrl('mr-som-maskara.jpg');

export const LeadershipTeam: FC = () => {
  const leadership = [
    {
      name: COMPANY_INFO.founders[0].name,
      role: COMPANY_INFO.founders[0].role,
      experience: COMPANY_INFO.founders[0].experience,
      bio: COMPANY_INFO.founders[0].bio,
      image: opMaskaraImg,
      alt: `${COMPANY_INFO.founders[0].name} - Founder President`,
    },
    {
      name: COMPANY_INFO.founders[1].name,
      role: COMPANY_INFO.founders[1].role,
      experience: COMPANY_INFO.founders[1].experience,
      bio: COMPANY_INFO.founders[1].bio,
      image: somMaskaraImg,
      alt: `${COMPANY_INFO.founders[1].name} - Vice President`,
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-18 font-['Outfit',sans-serif] border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center mb-8 sm:mb-10 lg:mb-12">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block" />
            <span className="text-[#3B82F6] text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Our Founders
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#0a1532] leading-[1.2] tracking-tight mb-3">
            Company Leadership
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
            Over 55 years of manufacturing leadership, quality focus, and global export excellence.
          </p>
        </div>

        {/* Team Cards: 1 Card per row with alternating flex direction with balanced medium proportions */}
        <div className="flex flex-col gap-6 sm:gap-7 max-w-4xl xl:max-w-5xl mx-auto">
          {leadership.map((member, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={idx}
                className={`group bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-5 sm:p-6 lg:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-5 sm:gap-7 lg:gap-9 transform hover:-translate-y-1 ${
                  isReversed ? 'sm:flex-row-reverse' : 'sm:flex-row'
                }`}
              >
                {/* 4:5 Ratio Showcase Image */}
                <div className="w-48 xs:w-52 sm:w-[190px] md:w-[210px] lg:w-[230px] shrink-0 aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 relative border border-slate-100 shadow-sm mx-auto sm:mx-0">
                  <img
                    src={member.image}
                    alt={member.alt}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                </div>

                {/* Details on the side of the card strictly matching original card design */}
                <div
                  className={`flex-1 flex flex-col justify-center text-center py-1 sm:py-2 ${
                    isReversed ? 'sm:pl-3 lg:pl-5 sm:text-right' : 'sm:pr-3 lg:pr-5 sm:text-left'
                  }`}
                >
                  <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#0a1532] tracking-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#2563EB] mb-1 tracking-wide">
                    {member.role}
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-slate-400 mb-2.5 sm:mb-3">
                    {member.experience}
                  </p>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {member.bio}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default LeadershipTeam;
