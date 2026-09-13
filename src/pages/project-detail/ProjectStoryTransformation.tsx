import { useState, useEffect, useRef, useCallback, type FC } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectCard {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface OtherProjectsProps {
  onNavigate?: (page: 'home' | 'about' | 'services' | 'projects' | 'project-detail' | 'contact') => void;
}

const otherProjectsList: ProjectCard[] = [
  {
    id: 1,
    category: 'Pergola',
    title: 'Backyard lounge with privacy screen',
    description: 'Privacy timber walls, overhead pergola lighting, and cozy lounge zones.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
    alt: 'Pergola with privacy screen in backyard lounge',
  },
  {
    id: 2,
    category: 'Decks',
    title: 'Covered patio for outdoor dining',
    description: 'Shade pergola, integrated dining area, and smooth stone walkway transitions.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
    alt: 'Covered patio with dining area and deck',
  },
  {
    id: 3,
    category: 'Pergola',
    title: 'Modern cedar pergola & stone fire pit',
    description: 'Warm natural timber pergola with ambient string lighting and stone hearth.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
    alt: 'Cedar pergola with stone fire pit',
  },
  {
    id: 4,
    category: 'Decks',
    title: 'Multi-level poolside composite deck',
    description: 'Slip-resistant dark walnut composite deck with glass balustrade railing.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    alt: 'Multi-level poolside composite deck',
  },
  {
    id: 5,
    category: 'Porch',
    title: 'Elevated front porch & custom planters',
    description: 'Covered cedar entryway deck with matching handcrafted timber flower boxes.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85',
    alt: 'Elevated front porch and custom planters',
  },
  {
    id: 6,
    category: 'Decks',
    title: 'Backyard deck with built-in bench seating',
    description: 'Composite decking, perimeter lighting, and custom perimeter bench seating.',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=85',
    alt: 'Backyard deck with bench seating',
  },
  {
    id: 7,
    category: 'Fence',
    title: 'Modern horizontal cedar privacy fence',
    description: 'Clean architectural lines with powder-coated steel posts and gate hardware.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    alt: 'Horizontal cedar privacy fence',
  },
  {
    id: 8,
    category: 'Patio',
    title: 'Outdoor kitchen & stone paver terrace',
    description: 'Built-in grill station, custom granite counter, and natural flagstone patio.',
    image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1200&q=85',
    alt: 'Outdoor kitchen and stone terrace',
  },
];

export const ProjectStoryTransformation: FC<OtherProjectsProps> = ({ onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const totalProjects = otherProjectsList.length;

  const scrollToCard = useCallback((index: number) => {
    const container = scrollContainerRef.current;
    const targetCard = cardRefs.current[index];
    if (container && targetCard) {
      const containerLeft = container.getBoundingClientRect().left;
      const cardLeft = targetCard.getBoundingClientRect().left;
      const scrollOffset = cardLeft - containerLeft + container.scrollLeft;

      container.scrollTo({
        left: scrollOffset,
        behavior: 'smooth',
      });
    }
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const nextIndex = (prev + 1) % totalProjects;
      scrollToCard(nextIndex);
      return nextIndex;
    });
  }, [totalProjects, scrollToCard]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => {
      const prevIndex = (prev - 1 + totalProjects) % totalProjects;
      scrollToCard(prevIndex);
      return prevIndex;
    });
  }, [totalProjects, scrollToCard]);

  const handleSelectIndex = (index: number) => {
    setCurrentIndex(index);
    scrollToCard(index);
  };

  // Automatically move one by one every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Sync scroll on manual user scroll
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    
    // Find closest card index
    let closestIndex = 0;
    let minDiff = Infinity;
    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      const diff = Math.abs(card.offsetLeft - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });
    if (closestIndex !== currentIndex) {
      setCurrentIndex(closestIndex);
    }
  };

  const handleCardClick = () => {
    if (onNavigate) {
      onNavigate('project-detail');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-[#F4F7FB]/70 py-16 sm:py-20 lg:py-24 font-['Outfit',sans-serif] border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching website theme & screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          {/* Eyebrow badge matching website style */}
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block" />
            <span className="text-[#3B82F6] text-sm sm:text-base font-bold tracking-tight">
              Other Projects
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0a1532] tracking-tight leading-[1.18]">
            A Closer Look at Other Backyard Transformations
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base md:text-[17px] leading-relaxed font-normal">
            From custom deck layouts to pergola installations, explore other outdoor spaces built for comfort, flow, and everyday living.
          </p>
        </div>

        {/* Carousel Viewport Container */}
        <div
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Smooth Scrollable Sliding Track: moving cards one by one */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 sm:gap-7 lg:gap-8 overflow-x-auto scroll-smooth py-4 no-scrollbar px-1"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {otherProjectsList.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                onClick={handleCardClick}
                className="group relative rounded-[28px] sm:rounded-[32px] overflow-hidden aspect-[4/5] sm:aspect-[3/4] w-[82vw] sm:w-[350px] md:w-[360px] lg:w-[380px] shrink-0 bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between p-4 sm:p-5 cursor-pointer border border-slate-200/80 select-none hover:-translate-y-1"
              >
                {/* Background Project Photo */}
                <img
                  src={project.image}
                  alt={project.alt}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                />

                {/* Gradient Overlay for subtle depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 group-hover:from-black/50 transition-colors duration-300 pointer-events-none" />

                {/* Top Row: Floating Theme Action Badge matching Home & Projects Page */}
                <div className="relative z-10 flex justify-end">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md text-[#0a1532] flex items-center justify-center shadow-xl border border-white/80 group-hover:scale-110 group-hover:bg-[#3B82F6] group-hover:text-white group-hover:border-[#3B82F6] transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Bottom Floating White Information Card matching Home & Projects Page */}
                <div className="relative z-10 bg-white rounded-[20px] sm:rounded-[22px] p-4 sm:p-5 shadow-xl border border-white/90 space-y-1.5 transform transition-all duration-300 group-hover:-translate-y-1">
                  <h3 className="text-base sm:text-[17px] font-bold text-[#0a1532] tracking-tight leading-snug group-hover:text-[#3B82F6] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-medium line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Bottom Control Bar: Prev Button, Indicators, Next Button */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-4 sm:gap-6">
          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous project"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#0a1532] hover:bg-[#3B82F6] hover:text-white shadow-md hover:shadow-xl border border-slate-200/90 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shrink-0"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
          </button>

          {/* Carousel Pagination Indicator Dots */}
          <div className="flex items-center gap-2">
            {otherProjectsList.map((_, index) => {
              const isActive = currentIndex === index;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSelectIndex(index)}
                  aria-label={`Go to project slide ${index + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    isActive
                      ? 'w-7 h-2.5 bg-[#3B82F6] shadow-sm'
                      : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              );
            })}
          </div>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next project"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#0a1532] hover:bg-[#3B82F6] hover:text-white shadow-md hover:shadow-xl border border-slate-200/90 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shrink-0"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProjectStoryTransformation;
