import type { FC } from 'react';
import { Layers, Umbrella, Sun, Wrench, ArrowUpRight } from 'lucide-react';

export const ProjectFinder: FC = () => {
  const steps = [
    {
      step: 'Step 01',
      title: 'New deck',
      description: 'For more usable space connected to the home and ready for daily outdoor living.',
      icon: Layers,
    },
    {
      step: 'Step 02',
      title: 'Patio Upgrade',
      description: 'For dining, seating, grilling, relaxing, and creating a clean backyard zone.',
      icon: Umbrella,
    },
    {
      step: 'Step 03',
      title: 'Pergola or Shade',
      description: 'For more comfort, privacy, structure, and better outdoor use through the day.',
      icon: Sun,
    },
    {
      step: 'Step 04',
      title: 'Deck Repair',
      description: 'For loose boards, weak railings, cracked stairs, and worn outdoor surfaces.',
      icon: Wrench,
    },
  ];

  return (
    <section
      id="project-finder"
      className="w-full relative py-20 sm:py-24 lg:py-28 font-['Outfit',sans-serif] overflow-hidden"
    >
      {/* Background Image with Dark Vignette & Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2400&q=85"
          alt="Outdoor backyard deck and patio"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay matching website aesthetic */}
        <div className="absolute inset-0 bg-[#071128]/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071128] via-transparent to-[#071128]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Center Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20 space-y-3.5">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 justify-center">
            <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block" />
            <span className="text-[#60A5FA] text-sm sm:text-base font-bold tracking-tight">
              Project finder
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.18]">
            Choose the Right Outdoor Project <br className="hidden sm:inline" />
            for Your Backyard.
          </h2>
        </div>

        {/* 4 Feature Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 group border border-slate-100 min-h-[260px] sm:min-h-[290px]"
              >
                {/* Top Row: Icon container on left, Step label on right */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-100/90 text-slate-700 flex items-center justify-center group-hover:bg-[#3B82F6] group-hover:text-white transition-colors duration-300 shadow-xs">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-400 group-hover:text-slate-600 transition-colors tracking-wide">
                    {item.step}
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="space-y-2 pt-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-[22px] font-bold text-[#0a1532] tracking-tight group-hover:text-[#3B82F6] transition-colors">
                      {item.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:text-[#3B82F6] transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {item.description}
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
