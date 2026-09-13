import type { FC } from 'react';

interface ImprovementItem {
  number: string;
  title: string;
  description: string;
}

interface ProjectImprovementsProps {
  items?: ImprovementItem[];
}

export const defaultImprovements: ImprovementItem[] = [
  {
    number: '01',
    title: 'Custom Deck Layout',
    description:
      'The deck was planned to improve movement, seating space, and daily outdoor use.',
  },
  {
    number: '02',
    title: 'Pergola Installation',
    description:
      'A pergola was added to provide shade, structure, and a more finished outdoor feel.',
  },
  {
    number: '03',
    title: 'Outdoor Seating Zone',
    description:
      'The space was arranged for relaxing, dining, hosting, and family gatherings.',
  },
  {
    number: '04',
    title: 'Railing & Safety Details',
    description:
      'New railing and edge details were included for better safety and a cleaner look.',
  },
  {
    number: '05',
    title: 'Material Upgrade',
    description:
      'Durable decking materials were used to reduce maintenance and improve long-term use.',
  },
  {
    number: '06',
    title: 'Final Finishing',
    description:
      'The project was completed with clean details, smooth transitions, and ready-to-use outdoor areas.',
  },
];

export const ProjectImprovements: FC<ProjectImprovementsProps> = ({
  items = defaultImprovements,
}) => {
  return (
    <section className="w-full bg-[#DBEAFE] py-16 sm:py-20 lg:py-24 font-['Outfit',sans-serif] border-t border-b border-blue-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          {/* Eyebrow badge matching testimonial & website style */}
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block" />
            <span className="text-[#2563EB] text-sm sm:text-base font-bold tracking-tight">
              Project Scope
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0a1532] tracking-tight leading-[1.18]">
            What We Improved in This Outdoor Space
          </h2>

          {/* Subtitle */}
          <p className="text-slate-700 text-sm sm:text-base md:text-[17px] leading-relaxed font-normal">
            A quick look at the main upgrades that helped make this backyard more useful, comfortable, and ready for everyday living.
          </p>
        </div>

        {/* 6-Card 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {items.map((item) => (
            <div
              key={item.number}
              className="bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 border border-blue-200/80 shadow-md hover:shadow-2xl hover:border-[#3B82F6] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-5 group"
            >
              {/* Circular Number Badge matching Family Owned section styling */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#f0f6ff] text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-all duration-300 flex items-center justify-center font-bold text-base sm:text-lg shadow-sm group-hover:shadow-md select-none shrink-0">
                {item.number}
              </div>

              {/* Text Block */}
              <div className="space-y-2">
                <h3 className="text-lg sm:text-[19px] font-bold text-[#0a1532] tracking-tight group-hover:text-[#3B82F6] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectImprovements;
