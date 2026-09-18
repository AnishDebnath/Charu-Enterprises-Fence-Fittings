import type { FC } from 'react';
import plantPic1 from '../../assets/plant-images/our-team-pic-1.jpg';
import plantPic2 from '../../assets/plant-images/our-team-pic-2.jpg';
import plantPic3 from '../../assets/plant-images/our-team-pic-3.jpg';
import plantPic4 from '../../assets/plant-images/our-team-pic-4.jpg';

interface PlantFacilityItem {
  id: string;
  title: string;
  image: string;
  alt: string;
}

const facilityItems: PlantFacilityItem[] = [
  {
    id: 'facility-1',
    title: 'Manufacturing Facility',
    image: plantPic1,
    alt: 'Charu Enterprises state-of-the-art manufacturing facility with automated galvanizing line',
  },
  {
    id: 'facility-2',
    title: 'Production & Quality Team',
    image: plantPic2,
    alt: 'Charu Enterprises skilled production team reviewing blueprints and fence fittings',
  },
  {
    id: 'facility-3',
    title: 'Heavy-Duty Stamping Presses',
    image: plantPic3,
    alt: 'Heavy stamping press equipment producing precision steel fence fittings',
  },
  {
    id: 'facility-4',
    title: 'Metallurgical Testing Lab',
    image: plantPic4,
    alt: 'Quality control laboratory testing fence hardware dimensions and tolerances',
  },
];

export const PlantAndTeamSection: FC = () => {
  return (
    <section
      id="plant-and-team"
      className="w-full bg-white py-16 sm:py-20 lg:py-24 font-['Outfit',sans-serif]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 lg:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 justify-center mb-2.5">
            <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block" />
            <span className="text-[#2563EB] text-xs sm:text-sm font-bold tracking-wider uppercase">
              Our Plant &amp; Team
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0a1532] tracking-tight leading-[1.2]">
            Our Plant &amp; Team
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal mt-3 max-w-2xl mx-auto">
            Our 20,000 sq. ft. factory in Howrah, India has modern stamping presses, in-house galvanizing, and an expert testing team.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 lg:gap-8 max-w-6xl mx-auto">
          {facilityItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Gradient Overlay - Visible on mobile, hover on desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071128]/85 via-[#071128]/25 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Text at Bottom Left Side - Visible on mobile, hover on desktop */}
                <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 z-10 opacity-100 sm:opacity-0 sm:transform sm:translate-y-2 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300 ease-out pointer-events-none">
                  <span className="inline-block font-bold text-white text-sm sm:text-lg md:text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wide">
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantAndTeamSection;
