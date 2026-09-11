import { useState, type FC } from 'react';
import { Play, Check, ArrowRight } from 'lucide-react';

export const AboutTeam: FC = () => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const stats = [
    {
      value: '12',
      label: 'Years of deck and patio experience',
    },
    {
      value: '320+',
      label: 'Outdoor projects completed',
    },
    {
      value: '500+',
      label: 'Happy local homeowners',
    },
    {
      value: '4.9',
      label: 'Average customer rating',
    },
  ];

  return (
    <section id="about" className="w-full bg-white py-16 sm:py-20 lg:py-24 font-['Outfit',sans-serif] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-14 items-start">
          {/* Left Eyebrow */}
          <div className="lg:col-span-3 flex items-start pt-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block" />
              <span className="text-[#3B82F6] text-sm sm:text-base font-bold tracking-tight">
                Get to know us
              </span>
            </div>
          </div>

          {/* Right Detailed Narrative Headline */}
          <div className="lg:col-span-9">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] font-medium leading-[1.28] text-slate-500 tracking-tight">
              <span className="font-bold text-[#0a1532]">
                Meet your local team for decks, patios, and outdoor living spaces. With years of hands-on building experience, We helps homeowners
              </span>{' '}
              <span className="text-slate-600 font-normal">
                turn unused yards into better spaces for relaxing, dining, hosting, and spending more time outside.
              </span>
            </h2>
          </div>
        </div>

        {/* Middle Visual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 mb-14 sm:mb-16 lg:mb-20 items-stretch">
          {/* Left Large Showcase Image Card with Centered Play Button (16:9 ratio) */}
          <div className="lg:col-span-8 relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/9] w-full shadow-lg group border border-blue-100 bg-neutral-900">
            <img
              src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=80"
              alt="Outdoor backyard patio with lawn and wooden slat fence"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/10 transition-colors duration-300" />

            {/* Centered Circular Play Button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
              <button
                onClick={() => setIsPlayingVideo(true)}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white text-[#0a1532] flex items-center justify-center shadow-2xl hover:bg-[#3B82F6] hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group/btn"
                aria-label="Play introduction video"
              >
                <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Right Dark Feature Card matching Hero Palette */}
          <div className="lg:col-span-4 relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[320px] lg:min-h-0 h-full shadow-lg bg-[#0a1532] border border-blue-900/50 flex flex-col justify-between p-6 sm:p-7 xl:p-8 text-white group">
            {/* Background builder image with reduced gradient overlay for clear visibility */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                alt="Contractor constructing outdoor deck"
                className="w-full h-full object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071128]/90 via-[#071128]/50 to-[#071128]/25" />
            </div>

            {/* Top Content */}
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white leading-tight tracking-tight">
                A clear path from idea <br /> to build
              </h3>
            </div>

            {/* Bottom Content Group (Badge, Description & Service Button) */}
            <div className="relative z-10 space-y-3.5 sm:space-y-4 pt-6">
              {/* Consult Plan Build Badge */}
              <div className="flex items-center gap-2.5 text-white text-sm sm:text-base font-semibold">
                <div className="w-5 h-5 rounded-full bg-[#3B82F6] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Check className="w-3 h-3 stroke-[3.5]" />
                </div>
                <span>Consult Plan Build</span>
              </div>

              {/* Subtext description */}
              <p className="text-neutral-100 text-sm sm:text-base leading-relaxed font-normal">
                Share your outdoor goals, review material options, and get a clear plan for your deck, patio, pergola, or backyard upgrade.
              </p>

              {/* Bottom Button matching hero CTA */}
              <div className="pt-2">
                <button
                  className="group/btn w-full sm:w-auto bg-[#3B82F6] hover:bg-[#DBEAFE] text-white hover:text-black font-bold pl-5 pr-2.5 py-3 rounded-full flex items-center justify-between sm:justify-start gap-3 text-sm sm:text-base shadow-xl transition-all transform hover:scale-105 cursor-pointer"
                >
                  <span className="transition-colors">Schedule Service</span>
                  <div className="w-6 h-6 rounded-full bg-white group-hover/btn:bg-[#3B82F6] flex items-center justify-center text-[#3B82F6] group-hover/btn:text-white shadow-sm shrink-0 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 4-Column Stats Row with Exact Vertical Dividers */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-2">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col justify-start ${
                  index !== 0 ? 'md:border-l md:border-blue-200/70 md:pl-8' : ''
                }`}
              >
                <span className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0a1532] tracking-tight mb-2 font-['Outfit',sans-serif]">
                  {stat.value}
                </span>
                <p className="text-sm sm:text-base text-slate-600 leading-snug font-medium max-w-[190px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal if Play button clicked */}
      {isPlayingVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsPlayingVideo(false)}
        >
          <div
            className="bg-[#0d1319] border border-neutral-700 rounded-2xl p-4 max-w-2xl w-full text-white shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <h4 className="font-bold text-base text-white">Deckora Craftsmanship Video Tour</h4>
              <button
                onClick={() => setIsPlayingVideo(false)}
                className="text-neutral-400 hover:text-white p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video w-full rounded-xl overflow-hidden mt-3 bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Deckora Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
