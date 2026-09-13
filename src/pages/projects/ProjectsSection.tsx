import { useState, type FC } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProjectsSectionProps {
  onNavigate?: (page: 'home' | 'about' | 'services' | 'projects' | 'project-detail' | 'contact') => void;
}

type ProjectCategory = 'All' | 'Decks' | 'Patio' | 'Pergola' | 'Porch' | 'Fence';

interface ProjectItem {
  id: number;
  category: 'Decks' | 'Patio' | 'Pergola' | 'Porch' | 'Fence';
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const ProjectsSection: FC<ProjectsSectionProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Decks');

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'Decks', value: 'Decks' },
    { label: 'Patio', value: 'Patio' },
    { label: 'Pergola', value: 'Pergola' },
    { label: 'Porch', value: 'Porch' },
    { label: 'Fence', value: 'Fence' },
    { label: 'All Projects', value: 'All' },
  ];

  const projects: ProjectItem[] = [
    {
      id: 1,
      category: 'Decks',
      title: 'Old deck restored for daily use',
      description: 'Repaired boards, safer stairs, and stronger railing for everyday outdoor use.',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
      alt: 'Craftsman restoring natural wood deck with weather seal stain',
    },
    {
      id: 2,
      category: 'Decks',
      title: 'Backyard deck with built-in seating',
      description: 'Composite decking, railing, stairs, and a simple layout for family gatherings.',
      image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
      alt: 'Spacious backyard composite deck with lounge seating and fire pit',
    },
    {
      id: 3,
      category: 'Patio',
      title: 'Covered patio for outdoor dining',
      description: 'Shade, seating, and a cleaner space for meals outside.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      alt: 'Covered patio with wooden pergola, dining table, and lanterns',
    },
    {
      id: 4,
      category: 'Pergola',
      title: 'Architectural cedar pergola & lounge',
      description: 'Custom-milled cedar pergola providing filtered sunlight and overhead fan mounting.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Modern cedar timber pergola with ambient patio lighting',
    },
    {
      id: 5,
      category: 'Porch',
      title: 'Elevated front porch & craftsman rail',
      description: 'Welcoming front entryway featuring composite floor boards and classic white balusters.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
      alt: 'Classic covered front porch with rocking chairs and flowers',
    },
    {
      id: 6,
      category: 'Fence',
      title: 'Horizontal cedar privacy fence & gate',
      description: 'Clean modern horizontal cedar fence with powder-coated steel posts and secure hardware.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      alt: 'Modern timber privacy fence with lush backyard landscaping',
    },
    {
      id: 7,
      category: 'Decks',
      title: 'Multi-level hillside redwood deck',
      description: 'Tiered deck structure designed around natural terrain slopes with integrated stairs.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      alt: 'Multi-level redwood deck with scenic yard views',
    },
    {
      id: 8,
      category: 'Patio',
      title: 'Flagstone terrace with outdoor fireplace',
      description: 'Natural stone patio extension with built-in stone hearth and bench seating.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
      alt: 'Outdoor stone patio with fire pit and outdoor kitchen setup',
    },
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 font-['Outfit',sans-serif] border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center mb-10 sm:mb-12">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block" />
            <span className="text-[#3B82F6] text-xs sm:text-sm font-bold tracking-tight uppercase">
              Recent projects
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0a1532] leading-[1.15] tracking-tight mb-3 sm:mb-4">
            From Worn Backyard to Usable Outdoor Space.
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-2xl">
            Show finished decks, patios, pergolas, railing work, and outdoor living upgrades with clear project details.
          </p>
        </div>

        {/* Category Filter Pills Bar with Website Theme Colors */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12 sm:mb-14">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => setActiveCategory(cat.value)}
                className={`px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#3B82F6] text-white shadow-lg shadow-blue-500/25 scale-105 ring-2 ring-[#3B82F6]/30'
                    : 'bg-[#EEF2F6] hover:bg-[#DBEAFE]/70 text-slate-700 hover:text-[#0a1532]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onNavigate?.('project-detail')}
              className="group relative rounded-[28px] sm:rounded-[32px] overflow-hidden aspect-[4/5] sm:aspect-[3/4] w-full bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between p-4 sm:p-5 cursor-pointer border border-slate-200/80 select-none"
            >
              {/* Background Project Photo */}
              <img
                src={project.image}
                alt={project.alt}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 pointer-events-none"
              />

              {/* Gradient Overlay for subtle depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 group-hover:from-black/50 transition-colors duration-300 pointer-events-none" />

              {/* Top Row: Floating Theme Action Badge matching Home Page */}
              <div className="relative z-10 flex justify-end">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md text-[#0a1532] flex items-center justify-center shadow-xl border border-white/80 group-hover:scale-110 group-hover:bg-[#3B82F6] group-hover:text-white group-hover:border-[#3B82F6] transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Bottom Floating White Information Card matching Home Page */}
              <div className="relative z-10 bg-white rounded-[20px] sm:rounded-[22px] p-4 sm:p-5 shadow-xl border border-white/90 space-y-1.5 transform transition-all duration-300 group-hover:-translate-y-1">
                <h3 className="text-base sm:text-[17px] font-bold text-[#0a1532] tracking-tight leading-snug group-hover:text-[#3B82F6] transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
