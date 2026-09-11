import { useState, useEffect, type FC } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail } from 'lucide-react';
import logo from '../../assets/logo.png';

export const ComingSoonPage: FC = () => {
  // Target countdown timer (28 days launch window)
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-[100dvh] bg-white font-['Outfit',sans-serif] p-1.5 sm:p-2.5 md:p-3 lg:p-4 flex flex-col justify-between overflow-hidden selection:bg-[#3B82F6] selection:text-white">
      {/* Outer Container Card */}
      <div className="w-full flex-1 h-full bg-[#0a1532] rounded-xl sm:rounded-2xl md:rounded-[24px] lg:rounded-[28px] overflow-hidden relative shadow-2xl flex flex-col justify-between border border-blue-900/50 text-white px-3 sm:px-6 lg:px-8 py-3.5 sm:py-5 lg:py-6">

        {/* Background Video with Precision Industrial Aesthetics */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <video
            src="/banner video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-[70%_center] lg:object-[80%_center] opacity-75 sm:opacity-80"
          />
          {/* Multi-stop cinematic gradient matching Home Hero */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071128]/95 via-[#071128]/85 via-50% to-[#071128]/50 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071128]/95 via-transparent to-[#071128]/40 z-10" />
        </div>

        {/* Top Header Navbar - Mobile Responsive */}
        <header className="relative z-20 w-full max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Logo Badge */}
          <div className="bg-[#DBEAFE] rounded-full px-2.5 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 shadow-md flex items-center shrink-0">
            <img
              src={logo}
              alt="Charu Enterprises"
              className="h-5 sm:h-6 md:h-7 lg:h-8 w-auto object-contain"
            />
          </div>

          {/* Quick Inquiry Call Action */}
          <a
            href="tel:+919830083777"
            className="group bg-transparent hover:bg-[#DBEAFE] text-white hover:text-black font-semibold pl-2 pr-3 py-1.5 sm:pl-3 sm:pr-4 sm:py-2 md:py-2.5 rounded-full flex items-center gap-1.5 sm:gap-2 border border-white hover:border-[#DBEAFE] backdrop-blur-sm text-[11px] sm:text-xs md:text-sm transition-all transform hover:scale-105 shadow-md shrink-0"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white group-hover:bg-[#22C55E] text-[#0a1532] group-hover:text-white flex items-center justify-center shadow-sm shrink-0 transition-colors">
              <Phone className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
            </div>
            <span className="transition-colors font-bold whitespace-nowrap">•91 98300 83777</span>
          </a>
        </header>

        {/* Center Hero Body Content - Fluid responsive scaling */}
        <main className="relative z-20 w-full max-w-3xl mx-auto py-4 sm:py-6 md:py-8 lg:py-10 my-auto text-center flex flex-col items-center justify-center">

          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-2 mb-3.5 sm:mb-4 md:mb-5"
          >

            <span className="text-[#60A5FA] text-xs sm:text-sm font-semibold tracking-wider uppercase">
              Charu Enterprises — India • 50+ Years of Manufacturing
            </span>
          </motion.div>

          {/* Responsive Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl xs:text-[26px] sm:text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-[#FFFFFF] leading-[1.2] sm:leading-[1.15] mb-2.5 sm:mb-3.5 md:mb-4 max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl"
          >
            Pressed Steel, Malleable & <br className="hidden xs:inline" />
            <span className="text-[#FFFFFF]">Aluminum Fence Fittings</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-100 text-xs sm:text-sm md:text-base max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg mx-auto leading-relaxed font-normal mb-4 sm:mb-6 md:mb-8"
          >
            Delivering 150M+ galvanized and powder-coated fence fittings across 4 continents. Exhibiting at FENCETECH for 30+ years. Our new digital catalog is launching soon.
          </motion.p>

          {/* Countdown Timer Grid - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-md mx-auto mb-4 sm:mb-6 md:mb-8"
          >
            <div className="grid grid-cols-4 gap-1.5 xs:gap-2 sm:gap-3 p-1.5 xs:p-2 sm:p-2.5 bg-white/5 border border-white/15 rounded-xl sm:rounded-2xl backdrop-blur-md shadow-2xl">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Mins', value: timeLeft.minutes },
                { label: 'Secs', value: timeLeft.seconds },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 border border-white/10 rounded-lg sm:rounded-xl p-1.5 xs:p-2 sm:p-3 flex flex-col items-center justify-center transition-all hover:bg-white/15"
                >
                  <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight font-mono mb-0.5 leading-none">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-[8px] xs:text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#93C5FD]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Inquiry Contact Badges */}
            <div className="flex items-center justify-center pt-3 sm:pt-4">
              <a
                href="mailto:info@charufence.com"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-4.5 sm:py-2 md:px-5 md:py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-[11px] xs:text-xs sm:text-sm border border-white/15 backdrop-blur-sm transition-all shadow-sm max-w-full"
              >
                <Mail className="w-3.5 h-3.5 text-[#60A5FA] shrink-0" />
                <span className="truncate">info@charufence.com</span>
              </a>
            </div>
          </motion.div>
        </main>

        {/* Minimal Clean Footer - Mobile Responsive */}
        <footer className="relative z-20 w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2 text-slate-300/90 text-[10px] sm:text-xs text-center sm:text-left border-t border-white/10 pt-2.5 sm:pt-3">
          <p>© 2026 Charu Enterprises — India. All Rights Reserved.</p>
          <p className="text-slate-400">Pressed Steel, Malleable & Aluminum Fence Fittings</p>
        </footer>
      </div>
    </div>
  );
};

export default ComingSoonPage;
