import { useState, useEffect, type FC } from 'react';
import { Play, Check, ArrowRight, X } from 'lucide-react';
import { getCloudinaryUrl, getCloudinaryVideoUrl } from '../../utils/cloudinary';
const introVideo = getCloudinaryVideoUrl('intro-video.mp4');
const aboutDetail = getCloudinaryUrl('about-detail.jpg');

interface AboutTeamProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'projects' | 'project-detail' | 'contact') => void;
}

export const CompanyOverview: FC<AboutTeamProps> = ({ onNavigate }) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsPlayingVideo(false);
      }
    };
    if (isPlayingVideo) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isPlayingVideo]);

  const stats = [
    {
      value: '55+',
      label: 'Years experience',
    },
    {
      value: '150M+',
      label: 'Fittings exported',
    },
    {
      value: '20,000',
      label: 'Sq. Ft. plant',
    },
    {
      value: '100%',
      label: 'Zero defects tested',
    },
  ];

  return (
    <section id="about" className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 font-['Outfit',sans-serif] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12 lg:mb-14 items-start">
          {/* Left Eyebrow */}
          <div className="lg:col-span-3 flex items-start pt-1 md:pt-2">
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block shrink-0 self-start mt-0.5 sm:mt-1" />
              <span className="text-[#3B82F6] text-xs sm:text-sm md:text-base font-bold tracking-tight uppercase">
                About Us
              </span>
            </div>
          </div>

          {/* Right Detailed Narrative Headline */}
          <div className="lg:col-span-9">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-[32px] lg:text-[34px] xl:text-[36px] font-medium leading-[1.28] text-slate-500 tracking-tight">
              <span className="font-bold text-[#0a1532]">
                Manufacturing Since 1969. Over 55 years of quality fence hardware production.
              </span>{' '}
              <span className="text-slate-600 font-normal">
                We make pressed steel, malleable iron, and aluminum fence fittings with in-house tooling and ASTM galvanizing.
              </span>
            </h2>
          </div>
        </div>

        {/* DESKTOP LAYOUT (lg+) */}
        <div className="hidden lg:block">
          {/* Middle Visual Cards Grid */}
          <div className="grid grid-cols-12 gap-6 xl:gap-8 mb-12 xl:mb-16 items-stretch">
            {/* Left Large Showcase Video Card (16:9 ratio) */}
            <div
              onClick={() => setIsPlayingVideo(true)}
              className="col-span-8 relative rounded-3xl overflow-hidden aspect-[16/9] w-full shadow-lg group border border-blue-100 bg-neutral-900 cursor-pointer"
            >
              <video
                src={introVideo}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300" />

              {/* Centered Circular Play Button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPlayingVideo(true);
                  }}
                  className="w-16 h-16 rounded-full bg-white text-[#0a1532] flex items-center justify-center shadow-2xl hover:bg-[#3B82F6] hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group/btn"
                  aria-label="Play introduction video"
                >
                  <Play className="w-6 h-6 fill-current translate-x-0.5" />
                </button>
              </div>
            </div>

            {/* Right Dark Feature Card */}
            <div className="col-span-4 relative rounded-3xl overflow-hidden h-full shadow-lg bg-[#0a1532] border border-blue-900/50 flex flex-col justify-between p-7 xl:p-8 text-white group">
              {/* Background builder image */}
              <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
                <img
                  src={aboutDetail}
                  alt="Precision tool and die room"
                  loading="lazy"
                  className="w-full h-full object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071128]/95 via-[#071128]/60 to-[#071128]/30" />
              </div>

              {/* Top Content */}
              <div className="relative z-10">
                <h3 className="text-2xl xl:text-[28px] font-bold text-white leading-tight tracking-tight">
                  Sheet Metal Stamping &amp; Forming
                </h3>
              </div>

              {/* Bottom Content Group */}
              <div className="relative z-10 space-y-3.5 xl:space-y-4 pt-6">
                <div className="flex items-center gap-2.5 text-white text-sm xl:text-base font-semibold">
                  <div className="w-5 h-5 rounded-full bg-[#3B82F6] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Check className="w-3 h-3 stroke-[3.5]" />
                  </div>
                  <span>ISO 9001:2015 Quality</span>
                </div>

                <p className="text-neutral-100 text-sm xl:text-base leading-relaxed font-normal">
                  Custom parts made to your drawings, samples, and exact specifications.
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onNavigate?.('products')}
                    className="group/btn w-full bg-[#3B82F6] hover:bg-[#DBEAFE] text-white hover:text-black font-bold pl-5 pr-2.5 py-3 rounded-full flex items-center justify-between gap-3 text-sm xl:text-base shadow-xl transition-all transform hover:scale-105 cursor-pointer"
                  >
                    <span className="transition-colors">View Products</span>
                    <div className="w-6 h-6 rounded-full bg-white group-hover/btn:bg-[#3B82F6] flex items-center justify-center text-[#3B82F6] group-hover/btn:text-white shadow-sm shrink-0 transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop 4-Column Horizontal Stats Row with Exact Vertical Dividers */}
          <div className="max-w-5xl mx-auto pt-2">
            <div className="grid grid-cols-4 gap-6 xl:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`flex flex-col justify-start ${
                    index !== 0 ? 'border-l border-blue-200/70 pl-6 xl:pl-8' : ''
                  }`}
                >
                  <span className="text-3xl xl:text-[46px] font-extrabold text-[#0a1532] tracking-tight mb-1.5 font-['Outfit',sans-serif]">
                    {stat.value}
                  </span>
                  <p className="text-sm xl:text-base text-slate-600 leading-snug font-medium max-w-[200px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TABLET LAYOUT (sm: to lg:) */}
        <div className="hidden sm:block lg:hidden space-y-6">
          {/* Top: Video Card (16:9 ratio) */}
          <div
            onClick={() => setIsPlayingVideo(true)}
            className="relative rounded-2xl overflow-hidden aspect-[16/9] w-full shadow-lg group border border-blue-100 bg-neutral-900 cursor-pointer"
          >
            <video
              src={introVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPlayingVideo(true);
                }}
                className="w-14 h-14 rounded-full bg-white text-[#0a1532] flex items-center justify-center shadow-2xl hover:bg-[#3B82F6] hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group/btn"
                aria-label="Play introduction video"
              >
                <Play className="w-6 h-6 fill-current translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Split Row: Left Feature Card (4:5 ratio) + Right Vertical Stats Stack */}
          <div className="grid grid-cols-2 gap-5 items-stretch">
            {/* Left Shifted Feature Card (4:5 aspect ratio) */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg bg-[#0a1532] border border-blue-900/50 flex flex-col justify-between p-5 text-white group">
              <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
                <img
                  src={aboutDetail}
                  alt="Precision tool and die room"
                  loading="lazy"
                  className="w-full h-full object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071128]/95 via-[#071128]/60 to-[#071128]/30" />
              </div>

              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white leading-tight tracking-tight">
                  Sheet Metal Stamping
                </h3>
              </div>

              <div className="relative z-10 space-y-2.5 pt-2">
                <div className="flex items-center gap-2 text-white text-xs font-semibold">
                  <div className="w-4 h-4 rounded-full bg-[#3B82F6] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                  </div>
                  <span>ISO 9001:2015 Quality</span>
                </div>

                <p className="text-neutral-100 text-xs leading-relaxed font-normal">
                  Custom parts made to your drawings and specifications.
                </p>

                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => onNavigate?.('products')}
                    className="group/btn w-full bg-[#3B82F6] hover:bg-[#DBEAFE] text-white hover:text-black font-bold pl-4 pr-2 py-2 rounded-full flex items-center justify-between gap-2 text-xs shadow-xl transition-all transform hover:scale-105 cursor-pointer"
                  >
                    <span className="transition-colors">View Products</span>
                    <div className="w-5 h-5 rounded-full bg-white group-hover/btn:bg-[#3B82F6] flex items-center justify-center text-[#3B82F6] group-hover/btn:text-white shadow-sm shrink-0 transition-colors">
                      <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Same Desktop Stats Design in Tablet View (Center positioned) */}
            <div className="grid grid-cols-2 gap-x-5 gap-y-6 sm:gap-y-8 content-center justify-items-center items-center text-center h-full py-4 pl-4 sm:pl-6 border-l border-blue-200/70">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center justify-center text-center">
                  <span className="text-2xl sm:text-3xl md:text-[32px] font-extrabold text-[#0a1532] tracking-tight mb-1 font-['Outfit',sans-serif]">
                    {stat.value}
                  </span>
                  <p className="text-xs text-slate-600 leading-snug font-medium max-w-[170px] text-center">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE LAYOUT (< sm / phone screens) */}
        <div className="block sm:hidden space-y-5">
          {/* Top: Video Card (16:9 ratio) */}
          <div
            onClick={() => setIsPlayingVideo(true)}
            className="relative rounded-2xl overflow-hidden aspect-[16/9] w-full shadow-lg group border border-blue-100 bg-neutral-900 cursor-pointer"
          >
            <video
              src={introVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPlayingVideo(true);
                }}
                className="w-12 h-12 rounded-full bg-white text-[#0a1532] flex items-center justify-center shadow-2xl hover:bg-[#3B82F6] hover:text-white active:scale-95 transition-all cursor-pointer"
                aria-label="Play introduction video"
              >
                <Play className="w-5 h-5 fill-current translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Full-width Feature Card on Mobile */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg bg-[#0a1532] border border-blue-900/50 flex flex-col justify-between p-5 text-white group min-h-[300px]">
            <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
              <img
                src={aboutDetail}
                alt="Precision tool and die room"
                loading="lazy"
                className="w-full h-full object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071128]/95 via-[#071128]/60 to-[#071128]/30" />
            </div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white leading-tight tracking-tight">
                Sheet Metal Stamping
              </h3>
            </div>

            <div className="relative z-10 space-y-3 pt-4">
              <div className="flex items-center gap-2 text-white text-xs font-semibold">
                <div className="w-4 h-4 rounded-full bg-[#3B82F6] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                </div>
                <span>ISO 9001:2015 Quality</span>
              </div>

              <p className="text-neutral-100 text-xs leading-relaxed font-normal">
                Custom parts made to your drawings and specifications.
              </p>

              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => onNavigate?.('products')}
                  className="group/btn w-full bg-[#3B82F6] hover:bg-[#DBEAFE] text-white hover:text-black font-bold px-4 py-2.5 rounded-full flex items-center justify-between gap-2 text-xs shadow-xl transition-all cursor-pointer"
                >
                  <span>View Products</span>
                  <div className="w-5 h-5 rounded-full bg-white text-[#3B82F6] flex items-center justify-center shrink-0">
                    <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Stats in 2x2 Grid Below Card on Mobile (not squeezed on card side) */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200/80">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col justify-start">
                <span className="text-2xl font-extrabold text-[#0a1532] tracking-tight mb-1 font-['Outfit',sans-serif]">
                  {stat.value}
                </span>
                <p className="text-xs text-slate-600 leading-snug font-medium">
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
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-8"
          onClick={() => setIsPlayingVideo(false)}
        >
          <div
            className="relative max-w-5xl w-full flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Minimal Top Close Control */}
            <div className="flex justify-end mb-2 sm:mb-3">
              <button
                type="button"
                onClick={() => setIsPlayingVideo(false)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Clean Video Player */}
            <div className="aspect-[16/9] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10">
              <video
                src={introVideo}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain bg-black"
              >
                Your browser does not support HTML5 video playback.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
