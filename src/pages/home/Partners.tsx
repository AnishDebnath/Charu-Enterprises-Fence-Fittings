export const Partners = () => {
  const partners = [
    {
      name: 'PRANDAJANG',
      icon: (
        <span className="font-extrabold text-xl sm:text-2xl tracking-tighter text-neutral-600 flex items-center gap-1 hover:text-neutral-950 transition-colors uppercase font-['Outfit',sans-serif]">
          <span className="text-neutral-700 font-black text-2xl">「</span>PRANDAJANG
        </span>
      ),
    },
    {
      name: 'MONDA',
      icon: (
        <span className="font-extrabold text-xl sm:text-2xl tracking-wider text-neutral-600 flex items-center gap-1 hover:text-neutral-950 transition-colors uppercase font-['Outfit',sans-serif]">
          <span className="text-neutral-700 text-base font-black">✤</span>MONDA_
        </span>
      ),
    },
    {
      name: 'SALINDRA',
      icon: (
        <span className="font-extrabold text-xl sm:text-2xl tracking-wider text-neutral-600 flex items-center gap-2 hover:text-neutral-950 transition-colors uppercase font-['Outfit',sans-serif]">
          <span className="w-4 h-4 rounded-full bg-neutral-600 inline-block"></span>SALINDRA
        </span>
      ),
    },
    {
      name: 'DUNDAI LOCK',
      icon: (
        <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-neutral-600 flex items-center gap-1 hover:text-neutral-950 transition-colors uppercase font-['Outfit',sans-serif]">
          <span className="text-neutral-700 font-serif italic text-lg">Ω</span>DUNDAI LOCK
        </span>
      ),
    },
    {
      name: 'HAUNERTEAM',
      icon: (
        <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-neutral-600 flex items-center gap-1.5 hover:text-neutral-950 transition-colors uppercase font-['Outfit',sans-serif]">
          <span className="font-black text-neutral-700 text-xl">❙❙</span>HAUNERTEAM
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
