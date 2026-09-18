export const PartnerLogos = () => {
  const partners = [
    {
      name: 'FENCETECH (30+ YEARS)',
      icon: (
        <span className="font-extrabold text-lg sm:text-xl tracking-wider text-slate-700 flex items-center gap-1.5 hover:text-[#2563EB] transition-colors uppercase font-['Outfit',sans-serif]">
          <span className="text-[#3B82F6] font-black text-xl">★</span>FENCETECH (30+ YRS)
        </span>
      ),
    },
    {
      name: 'ISO 9001:2015',
      icon: (
        <span className="font-extrabold text-lg sm:text-xl tracking-wider text-slate-700 flex items-center gap-1.5 hover:text-[#2563EB] transition-colors uppercase font-['Outfit',sans-serif]">
          <span className="text-[#3B82F6] text-base font-black">✔</span>ISO 9001:2015
        </span>
      ),
    },
    {
      name: 'EEPC INDIA',
      icon: (
        <span className="font-extrabold text-lg sm:text-xl tracking-wider text-slate-700 flex items-center gap-1.5 hover:text-[#2563EB] transition-colors uppercase font-['Outfit',sans-serif]">
          <span className="w-3.5 h-3.5 rounded-full bg-[#f0c75e] inline-block"></span>EEPC GOVT. OF INDIA
        </span>
      ),
    },
    {
      name: 'MSME UDYAM',
      icon: (
        <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-700 flex items-center gap-1.5 hover:text-[#2563EB] transition-colors uppercase font-['Outfit',sans-serif]">
          <span className="text-[#3B82F6] font-black text-lg">◆</span>MINISTRY OF MSME
        </span>
      ),
    },
    {
      name: '150M+ PIECES EXPORTED',
      icon: (
        <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-700 flex items-center gap-1.5 hover:text-[#2563EB] transition-colors uppercase font-['Outfit',sans-serif]">
          <span className="text-[#3B82F6] font-black text-xl">❖</span>150M+ EXPORTED
        </span>
      ),
    },
    {
      name: '4 CONTINENTS',
      icon: (
        <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-700 flex items-center gap-1.5 hover:text-[#2563EB] transition-colors uppercase font-['Outfit',sans-serif]">
          <span className="text-[#f0c75e] font-black text-lg">●</span>4 CONTINENTS
        </span>
      ),
    },
  ];

  // Tripled list for seamless, infinite looping
  const marqueeItems = [...partners, ...partners, ...partners];

  return (
    <div className="w-full bg-white px-2 sm:px-3 md:px-4 py-8 sm:py-10">
      {/* Marquee viewport container matching hero section width with fade gradients on both edges */}
      <div className="w-full relative overflow-hidden">
        {/* Left Side Fade Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 lg:w-52 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Right Side Fade Effect */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 lg:w-52 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Infinite Running Marquee Track (Right to Left) */}
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 md:gap-20 py-2">
          {marqueeItems.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center shrink-0 grayscale hover:grayscale-0 transition-all cursor-default select-none px-2"
            >
              {partner.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
