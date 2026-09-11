import type { FC } from 'react';
import { ArrowRight } from 'lucide-react';

export const FamilyOwned: FC = () => {
  const features = [
    {
      id: '01',
      title: 'Local and approachable',
      description: 'Talk directly with a team that understands homes, neighborhoods, and outdoor living needs.',
    },
    {
      id: '02',
      title: 'Clear communication',
      description: 'We keep the process simple with honest estimates, project updates, and practical guidance.',
    },
    {
      id: '03',
      title: 'Work we stand behind',
      description: 'Every deck, patio, and pergola is built with care, safety, and long-term use in mind.',
    },
  ];

  return (
    <section id="family-owned" className="w-full bg-white py-16 sm:py-20 lg:py-24 font-['Outfit',sans-serif] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-12 sm:mb-14 lg:mb-16 items-start">
          {/* Left Column: Eyebrow + Headline */}
          <div className="lg:col-span-7 space-y-3.5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block" />
              <span className="text-[#3B82F6] text-sm sm:text-base font-bold tracking-tight">
                Family-owned business
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0a1532] leading-[1.18] tracking-tight">
              Family-owned Outdoor <br className="hidden sm:inline" />
              Building with a Personal <br className="hidden sm:inline" />
              Touch.
            </h2>
          </div>

          {/* Right Column: Paragraph + CTA Button */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-5 pt-1 lg:pt-2">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Deckora is built around honest work, clear communication, and outdoor spaces made for real homes. As a family-run team, we care about every detail from the first visit to the final walkthrough.
            </p>

            <button
              className="group/btn bg-[#3B82F6] hover:bg-[#DBEAFE] text-white hover:text-black font-bold pl-6 pr-2.5 py-3 rounded-full flex items-center gap-3 text-sm sm:text-base shadow-xl transition-all transform hover:scale-105 cursor-pointer"
            >
              <span className="transition-colors">Meet the team</span>
              <div className="w-7 h-7 rounded-full bg-white group-hover/btn:bg-[#3B82F6] text-[#3B82F6] group-hover/btn:text-white flex items-center justify-center shadow-sm shrink-0 group-hover/btn:translate-x-0.5 transition-all">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </button>
          </div>
        </div>

        {/* Main Content Grid: Image + 3 Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Team Showcase Image */}
          <div className="lg:col-span-6 relative rounded-[28px] sm:rounded-[32px] overflow-hidden min-h-[360px] sm:min-h-[420px] lg:min-h-[460px] shadow-lg border border-slate-200/80 group bg-neutral-100">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
              alt="Family-owned outdoor deck builders working carefully on woodwork"
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
            />
            {/* Subtle Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Column: 3 Feature Cards Stack */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4 sm:gap-5">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 flex items-start gap-4 sm:gap-6 group"
              >
                {/* Circular Number Badge */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#f0f6ff] text-[#3B82F6] font-bold text-base sm:text-lg flex items-center justify-center shrink-0 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors duration-300 shadow-sm">
                  {feature.id}
                </div>

                {/* Content Block */}
                <div className="space-y-1.5 pt-0.5">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0a1532] tracking-tight group-hover:text-[#3B82F6] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
