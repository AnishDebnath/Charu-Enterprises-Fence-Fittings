import type { FC } from 'react';

export const TeamSection: FC = () => {
  const teamMembers = [
    {
      name: 'Ethan Brooks',
      role: 'Project Lead',
      bio: 'Ethan keeps every outdoor project organized from the first site visit to the final walkthrough.',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80',
      alt: 'Ethan Brooks - Project Lead wearing safety vest on site',
    },
    {
      name: 'Daniel Carter',
      role: 'Construction Specialist',
      bio: 'Daniel handles custom deck builds with careful measurements, strong structure, and clean finishing.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      alt: 'Daniel Carter - Construction Specialist holding blueprints',
    },
    {
      name: 'Olivia Hayes',
      role: 'Design Consultant',
      bio: 'Olivia helps homeowners choose layouts, materials, and ideas that fit their outdoor space.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      alt: 'Olivia Hayes - Design Consultant on outdoor timber site',
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
              Get to know us
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#0a1532] leading-[1.2] tracking-tight mb-3">
            Meet the People Behind Every Outdoor Project
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
            Our team brings planning, building, and installation experience together to help homeowners create decks, patios, pergolas, and outdoor spaces that feel ready to use every day.
          </p>
        </div>

        {/* Team Cards: 1 Card per row with alternating flex direction scaled to full section width */}
        <div className="flex flex-col gap-6 sm:gap-8 max-w-5xl xl:max-w-6xl mx-auto">
          {teamMembers.map((member, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={idx}
                className={`group bg-white rounded-2xl sm:rounded-3xl lg:rounded-[32px] border border-slate-200/80 p-4 sm:p-6 lg:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 transform hover:-translate-y-1 ${
                  isReversed ? 'sm:flex-row-reverse' : 'sm:flex-row'
                }`}
              >
                {/* 1:1 Square Ratio Large Showcase Image */}
                <div className="w-full sm:w-[220px] md:w-[260px] lg:w-[300px] xl:w-[320px] shrink-0 aspect-square rounded-xl sm:rounded-2xl lg:rounded-[24px] overflow-hidden bg-slate-100 relative border border-slate-100 shadow-sm">
                  <img
                    src={member.image}
                    alt={member.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                </div>

                {/* Details on the side of the card strictly matching original card design */}
                <div
                  className={`flex-1 flex flex-col justify-center text-center py-1 sm:py-2 ${
                    isReversed ? 'sm:pl-4 lg:pl-6 sm:text-right' : 'sm:pr-4 lg:pr-6 sm:text-left'
                  }`}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0a1532] tracking-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-slate-500 mb-3 sm:mb-4 tracking-wide">
                    {member.role}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
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

export default TeamSection;
