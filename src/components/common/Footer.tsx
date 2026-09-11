import type { FC } from 'react';
import { Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';

export const Footer: FC = () => {
  return (
    <footer className="w-full font-['Outfit',sans-serif] bg-white px-2 sm:px-3 md:px-4 pt-4 pb-4 sm:pb-6">
      {/* Outer Card Container matching Hero Section Width & Border-Radius */}
      <div className="w-full bg-[#0c1219] border border-white/10 rounded-2xl sm:rounded-[24px] lg:rounded-[28px] p-6 sm:p-10 lg:p-12 text-white relative overflow-hidden shadow-2xl shadow-black/60">
        
        {/* Top-left Ambient Accent */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Centered Content Container matching other sections' width */}
        <div className="max-w-7xl mx-auto w-full relative z-10 px-2 sm:px-4">
          
          {/* 4-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Column 1: Tagline & Socials */}
            <div className="lg:col-span-4 space-y-6">
              <p className="text-neutral-200 text-sm sm:text-base leading-relaxed max-w-sm font-normal">
                Custom outdoor decks, pergolas, and backyard living spaces built with precision craftsmanship, durable materials, and dedicated service.
              </p>

              {/* Social Icons Pills with Hover Effects */}
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-white hover:bg-[#3B82F6] text-black hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm transform hover:scale-110 cursor-pointer"
                >
                  <Linkedin className="w-4.5 h-4.5 fill-current stroke-0" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white hover:bg-[#3B82F6] text-black hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm transform hover:scale-110 cursor-pointer"
                >
                  <Instagram className="w-4.5 h-4.5 stroke-[2.2]" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter / X"
                  className="w-9 h-9 rounded-full bg-white hover:bg-[#3B82F6] text-black hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm transform hover:scale-110 cursor-pointer"
                >
                  <Twitter className="w-4.5 h-4.5 fill-current stroke-0" />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-white hover:bg-[#3B82F6] text-black hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm transform hover:scale-110 cursor-pointer"
                >
                  <Youtube className="w-4.5 h-4.5 stroke-[2.2]" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-bold text-white text-base sm:text-lg tracking-tight">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm sm:text-base text-neutral-200 font-normal">
                <li>
                  <a href="#" className="hover:text-[#3B82F6] hover:translate-x-1.5 inline-block transition-all duration-200">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#3B82F6] hover:translate-x-1.5 inline-block transition-all duration-200">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#3B82F6] hover:translate-x-1.5 inline-block transition-all duration-200">
                    Service
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-[#3B82F6] hover:translate-x-1.5 inline-block transition-all duration-200">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-[#3B82F6] hover:translate-x-1.5 inline-block transition-all duration-200">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-bold text-white text-base sm:text-lg tracking-tight">
                Services
              </h4>
              <ul className="space-y-3 text-sm sm:text-base text-neutral-200 font-normal">
                <li>
                  <a href="#services" className="hover:text-[#3B82F6] hover:translate-x-1.5 inline-block transition-all duration-200">
                    Deck building
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#3B82F6] hover:translate-x-1.5 inline-block transition-all duration-200">
                    Deck Repair
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#3B82F6] hover:translate-x-1.5 inline-block transition-all duration-200">
                    Patio Construction
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#3B82F6] hover:translate-x-1.5 inline-block transition-all duration-200">
                    Pergola Installation
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#3B82F6] hover:translate-x-1.5 inline-block transition-all duration-200">
                    Custom Deck
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-bold text-white text-base sm:text-lg tracking-tight">
                Contact Us
              </h4>
              <div className="space-y-3 text-sm sm:text-base text-neutral-200 leading-relaxed font-normal">
                <p className="hover:text-white transition-colors duration-200">
                  Mon – Sat : 8am to 6pm, Sunday: closed
                </p>
                <p className="hover:text-white transition-colors duration-200">
                  123 Deckora Avenue, New York, NY 10001
                </p>
                <p>
                  <a
                    href="mailto:hello@Deckora.com"
                    className="hover:text-[#3B82F6] hover:underline inline-block transition-colors duration-200"
                  >
                    hello@Deckora.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+123450346"
                    className="hover:text-[#3B82F6] hover:underline inline-block transition-colors duration-200"
                  >
                    +123 450 346
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Huge Metallic Gradient CHARU ENTERPRISE Text Background Banner */}
          <div className="mt-8 sm:mt-12 lg:mt-14 mb-2 sm:mb-4 select-none pointer-events-none text-center overflow-hidden flex items-center justify-center">
            <h1 className="text-[28px] xs:text-[36px] sm:text-[54px] md:text-[72px] lg:text-[98px] xl:text-[118px] 2xl:text-[132px] font-black tracking-tight leading-none uppercase whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-white/90 via-white/40 to-white/0 font-['Outfit',sans-serif]">
              CHARU ENTERPRISE
            </h1>
          </div>

          {/* Bottom Bar Divider & Copyright */}
          <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-neutral-300 font-medium">
            <p className="hover:text-white transition-colors">© 2026 Charu Enterprise. All Rights Reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-[#3B82F6] transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#3B82F6] transition-colors duration-200">
                Terms & Conditions
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
