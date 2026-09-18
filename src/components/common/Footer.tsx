import type { FC } from 'react';
import { Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';
import { Watermark } from '../Watermark';

interface FooterProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'case-study' | 'product-detail' | 'contact') => void;
}

export const Footer: FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: 'home' | 'about' | 'products' | 'case-study' | 'product-detail' | 'contact', hash?: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full font-['Outfit',sans-serif] bg-white px-3 sm:px-4 md:px-6 lg:px-8 pt-4 pb-4 sm:pb-6 md:pb-8">
      {/* Outer Card Container matching Hero Section Width & Border-Radius */}
      <div className="w-full bg-[#0c1219] border border-white/10 rounded-2xl sm:rounded-[24px] md:rounded-[26px] lg:rounded-[28px] p-5 sm:p-8 md:p-10 lg:p-12 text-white relative overflow-hidden shadow-2xl shadow-black/60">
        
        {/* Top-left Ambient Accent */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Centered Content Container matching other sections' width */}
        <div className="max-w-7xl mx-auto w-full relative z-10 px-2 sm:px-4">
          
          {/* 4-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-8 lg:gap-10">
            
            {/* Column 1: Tagline & Socials */}
            <div className="lg:col-span-4 space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-[#3B82F6]/20 border border-[#3B82F6]/40 text-[#60A5FA] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                  Mfg. Since 1969 • 55+ Years
                </span>
                <p className="text-neutral-200 text-xs sm:text-sm md:text-base leading-relaxed max-w-sm font-normal">
                  Manufacturer and global exporter of certified pressed steel and iron fence fittings. Over 150M+ pieces exported.
                </p>
              </div>

              {/* Social Icons Pills with Hover Effects */}
              <div className="flex items-center gap-2.5 sm:gap-3 pt-1">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white hover:bg-[#3B82F6] text-black hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm transform hover:scale-110 cursor-pointer"
                >
                  <Linkedin className="w-4 h-4 fill-current stroke-0" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white hover:bg-[#3B82F6] text-black hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm transform hover:scale-110 cursor-pointer"
                >
                  <Instagram className="w-4 h-4 stroke-[2.2]" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter / X"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white hover:bg-[#3B82F6] text-black hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm transform hover:scale-110 cursor-pointer"
                >
                  <Twitter className="w-4 h-4 fill-current stroke-0" />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white hover:bg-[#3B82F6] text-black hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm transform hover:scale-110 cursor-pointer"
                >
                  <Youtube className="w-4 h-4 stroke-[2.2]" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-2 space-y-3 sm:space-y-4">
              <h4 className="font-bold text-white text-sm sm:text-base md:text-lg tracking-tight">
                Quick Links
              </h4>
              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm md:text-base text-neutral-200 font-normal">
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('home')}
                    className="hover:text-[#3B82F6] hover:translate-x-1.5 inline-block transition-all duration-200 cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('about')}
                    className="hover:text-[#3B82F6] hover:translate-x-1.5 inline-block transition-all duration-200 cursor-pointer"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('products')}
                    className="hover:text-[#3B82F6] hover:translate-x-1.5 inline-block transition-all duration-200 cursor-pointer"
                  >
                    Products
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('case-study')}
                    className="hover:text-[#3B82F6] hover:translate-x-1.5 inline-block transition-all duration-200 cursor-pointer"
                  >
                    Applications
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('contact')}
                    className="hover:text-[#3B82F6] hover:translate-x-1.5 inline-block transition-all duration-200 cursor-pointer"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Products */}
            <div className="lg:col-span-3 space-y-3 sm:space-y-4">
              <h4 className="font-bold text-white text-sm sm:text-base md:text-lg tracking-tight">
                Product Categories
              </h4>
              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm md:text-base text-neutral-200 font-normal">
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('products')}
                    className="hover:text-[#3B82F6] hover:translate-x-1.5 inline-block transition-all duration-200 text-left"
                  >
                    Pressed Steel Fittings
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('products')}
                    className="hover:text-[#3B82F6] hover:translate-x-1.5 inline-block transition-all duration-200 text-left"
                  >
                    Malleable Iron Fittings
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('products')}
                    className="hover:text-[#3B82F6] hover:translate-x-1.5 inline-block transition-all duration-200 text-left"
                  >
                    Aluminum Fence Fittings
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('products')}
                    className="hover:text-[#3B82F6] hover:translate-x-1.5 inline-block transition-all duration-200 text-left"
                  >
                    Tension Bars &amp; Bands
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('products')}
                    className="hover:text-[#3B82F6] hover:translate-x-1.5 inline-block transition-all duration-200 text-left"
                  >
                    Cantilever &amp; Gate Hardware
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('products')}
                    className="hover:text-[#3B82F6] hover:translate-x-1.5 inline-block transition-all duration-200 text-left"
                  >
                    Custom Sheet Metal Fabrication
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div className="lg:col-span-3 space-y-3 sm:space-y-4">
              <h4 className="font-bold text-white text-sm sm:text-base md:text-lg tracking-tight">
                Contact &amp; Office
              </h4>
              <div className="space-y-2 text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal">
                <p className="text-white font-semibold">
                  Head Office:
                </p>
                <p className="text-neutral-300">
                  28B, Shakespeare Sarani, 10B, Neelamber Bldg, Kolkata - 700017, India
                </p>
                <p className="text-white font-semibold pt-1">
                  Factory:
                </p>
                <p className="text-neutral-300">
                  Saraswati Complex, Bhandardaha, Domjur, Howrah - 711405, West Bengal
                </p>
                <div className="pt-1.5 space-y-1">
                  <p>
                    <a
                      href="tel:+919830083777"
                      className="hover:text-[#3B82F6] hover:underline inline-block transition-colors duration-200"
                    >
                      India: +91 9830083777
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+13464337572"
                      className="hover:text-[#3B82F6] hover:underline inline-block transition-colors duration-200"
                    >
                      USA: +1 (346) 433-7572
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:opmaskara1008@gmail.com"
                      className="hover:text-[#3B82F6] hover:underline inline-block transition-colors duration-200"
                    >
                      opmaskara1008@gmail.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:som83777@gmail.com"
                      className="hover:text-[#3B82F6] hover:underline inline-block transition-colors duration-200"
                    >
                      som83777@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Huge Metallic Gradient CHARU ENTERPRISES-INDIA Text Background Banner */}
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 mb-2 sm:mb-4 select-none pointer-events-none text-center overflow-hidden flex items-center justify-center">
            <h1 className="text-[22px] xs:text-[28px] sm:text-[44px] md:text-[60px] lg:text-[60px] xl:text-[84px] 2xl:text-[104px] font-black tracking-tight leading-none uppercase break-words text-transparent bg-clip-text bg-gradient-to-b from-white/90 via-white/40 to-white/0 font-['Outfit',sans-serif]">
              CHARU ENTERPRISES
            </h1>
          </div>

          {/* Bottom Bar Divider & Copyright */}
          <div className="border-t border-white/15 pt-5 sm:pt-6 flex flex-col items-center justify-center text-center gap-2.5 text-xs sm:text-sm text-neutral-300 font-medium">
            <p className="hover:text-white transition-colors text-center">
              © 2026 Charu Enterprises - India (Mfg Since 1969). All Rights Reserved.
            </p>
            <div className="flex items-center justify-center gap-3 sm:gap-5 text-neutral-400 text-[11px] sm:text-xs">
              <a href="#" className="hover:text-[#3B82F6] transition-colors duration-200">
                Privacy Policy
              </a>
              <span className="text-white/20">•</span>
              <a href="#" className="hover:text-[#3B82F6] transition-colors duration-200">
                Terms &amp; Conditions
              </a>
            </div>
          </div>

          {/* Watermark */}
          <Watermark />

        </div>
      </div>
    </footer>
  );
};
