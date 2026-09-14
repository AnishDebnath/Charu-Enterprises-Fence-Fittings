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
    title: 'Raw Steel Gauge Verification',
    description:
      'High-grade carbon steel slit coils tested for yield strength and accurate gauge thickness prior to stamping.',
  },
  {
    number: '02',
    title: 'Progressive Die Stamping',
    description:
      'In-house CAD/CAM tooling produces burr-free edges, clean wire slots, and consistent carriage bolt holes.',
  },
  {
    number: '03',
    title: 'Pre-Galvanizing Surface Pickling',
    description:
      'Acid cleaning and flux treatment removes all mill scale, ensuring optimal metallurgical zinc adhesion.',
  },
  {
    number: '04',
    title: 'ASTM A153 Hot-Dip Galvanizing',
    description:
      'Automated zinc kettle bath delivers heavy 85+ micron protective zinc coating for maximum corrosion defense.',
  },
  {
    number: '05',
    title: 'Tensile & Fitment Inspection',
    description:
      'Batch testing ensures perfect pipe OD fitment and high mechanical load resistance without fracture.',
  },
  {
    number: '06',
    title: 'Export Container Packaging',
    description:
      'Weatherproof poly-bagging, wooden crate strapping, and barcode labels optimized for container unloading.',
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
              Quality Assurance
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0a1532] tracking-tight leading-[1.18]">
            Manufacturing Standards &amp; Quality Control
          </h2>

          {/* Subtitle */}
          <p className="text-slate-700 text-sm sm:text-base md:text-[17px] leading-relaxed font-normal">
            Every batch of Charu Enterprises fence fittings undergoes strict ISO 9001:2015 inspection from raw coil slitting to seaport loading.
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
