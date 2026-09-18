import { useState, useEffect, useRef, type FC } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import logo from '../../assets/logo.png';

interface NavbarProps {
  currentPage?: 'home' | 'about' | 'products' | 'case-study' | 'product-detail' | 'contact';
  onNavigate?: (page: 'home' | 'about' | 'products' | 'case-study' | 'product-detail' | 'contact') => void;
}

export const Navbar: FC<NavbarProps> = ({ currentPage = 'home', onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (page: 'home' | 'about' | 'products' | 'case-study' | 'product-detail' | 'contact', hash?: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    if (hash) {
      setTimeout(() => {
        const elem = document.querySelector(hash);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Close mobile menu on click outside and on Escape key
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent | PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('pointerdown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let accumulatedDelta = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const diff = currentY - lastScrollY;

          // Always expand when near the top
          if (currentY <= 60) {
            setIsScrolled(false);
            accumulatedDelta = 0;
          } else {
            // Reset accumulator if scrolling direction flips
            if ((diff > 0 && accumulatedDelta < 0) || (diff < 0 && accumulatedDelta > 0)) {
              accumulatedDelta = 0;
            }
            accumulatedDelta += diff;

            // Stable threshold to prevent micro-jitter and bouncing
            if (accumulatedDelta > 20) {
              setIsScrolled(true);
            } else if (accumulatedDelta < -20) {
              setIsScrolled(false);
            }
          }

          lastScrollY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="main-navbar-container"
      className={`fixed left-0 right-0 z-50 pointer-events-none transition-[top] duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] font-['Outfit',sans-serif] ${
        isScrolled ? 'top-4 sm:top-4.5 md:top-5 lg:top-6' : 'top-5 sm:top-6 md:top-7 lg:top-8'
      }`}
    >
      {/* Outer Flex Wrapper for Centered Shrinking */}
      <div ref={navRef} className="w-full flex flex-col items-center px-2 sm:px-4 md:px-6 pointer-events-auto">
        {/* Transparent Glassmorphism Navbar Container */}
        <div
          id="glass-navbar"
          className={`w-full rounded-full flex items-center justify-between border border-white/25 bg-[#0d1319]/90 shadow-2xl shadow-black/60 backdrop-blur-md sm:backdrop-blur-lg px-3.5 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 transition-[max-width] duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[max-width] ${
            isScrolled
              ? 'max-w-[280px] sm:max-w-[340px] lg:max-w-[380px]'
              : 'max-w-[280px] sm:max-w-[340px] lg:max-w-7xl'
          }`}
        >
          {/* Logo */}
          <div className="bg-[#DBEAFE] rounded-full px-2.5 py-1 sm:px-3 sm:py-1.5 shrink-0 transition-transform duration-300 hover:scale-105">
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className="flex items-center cursor-pointer"
            >
              <img src={logo} alt="Charu Enterprises" className="h-6 sm:h-7 md:h-8 w-auto" />
            </button>
          </div>

          {/* Desktop Nav Links with synchronized zero-shift width and opacity transition */}
          <div className="hidden lg:flex items-center">
            <AnimatePresence initial={false}>
              {!isScrolled && (
                <motion.div
                  key="desktop-nav-wrapper"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden flex items-center"
                >
                  <nav className="flex items-center gap-7 xl:gap-8 text-sm font-bold tracking-wider uppercase text-neutral-100 whitespace-nowrap px-4 xl:px-6">
                    <button
                      type="button"
                      onClick={() => handleNavClick('home')}
                      className={`transition-colors cursor-pointer ${
                        currentPage === 'home'
                          ? 'text-[#60A5FA] font-extrabold'
                          : 'text-neutral-100 hover:text-white'
                      }`}
                    >
                      HOME
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNavClick('about')}
                      className={`transition-colors cursor-pointer ${
                        currentPage === 'about'
                          ? 'text-[#60A5FA] font-extrabold'
                          : 'text-neutral-100 hover:text-white'
                      }`}
                    >
                      ABOUT
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNavClick('products')}
                      className={`transition-colors cursor-pointer ${
                        currentPage === 'products' || currentPage === 'product-detail'
                          ? 'text-[#60A5FA] font-extrabold'
                          : 'text-neutral-100 hover:text-white'
                      }`}
                    >
                      PRODUCTS
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNavClick('case-study')}
                      className={`transition-colors cursor-pointer ${
                        currentPage === 'case-study'
                          ? 'text-[#60A5FA] font-extrabold'
                          : 'text-neutral-100 hover:text-white'
                      }`}
                    >
                      APPLICATIONS
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNavClick('contact')}
                      className={`transition-colors cursor-pointer ${
                        currentPage === 'contact'
                          ? 'text-[#60A5FA] font-extrabold'
                          : 'text-neutral-100 hover:text-white'
                      }`}
                    >
                      CONTACT
                    </button>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right on Desktop: Phone + Request Quote CTA */}
          <div className="hidden lg:flex items-center shrink-0">
            <a
              href="tel:+919830083777"
              className="flex items-center gap-2 text-white text-sm font-semibold hover:text-[#60A5FA] transition-colors py-1 px-2 rounded-full hover:bg-white/5 shrink-0"
            >
              <Phone className="w-4 h-4 text-[#60A5FA]" />
              <span className="whitespace-nowrap">+91 9830083777</span>
            </a>

            <AnimatePresence initial={false}>
              {!isScrolled && (
                <motion.div
                  key="estimate-cta-wrapper"
                  initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                  animate={{ opacity: 1, width: 'auto', marginLeft: 12 }}
                  exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden flex items-center shrink-0"
                >
                  <button
                    type="button"
                    onClick={() => handleNavClick('contact')}
                    className="group bg-[#3B82F6] hover:bg-[#DBEAFE] text-white hover:text-black font-bold pl-5 pr-2 py-2 rounded-full flex items-center gap-2.5 text-sm transition-colors cursor-pointer shadow-lg font-['Outfit',sans-serif] whitespace-nowrap shrink-0"
                  >
                    <span className="transition-colors">Get Quote</span>
                    <div className="w-6 h-6 rounded-full bg-white group-hover:bg-[#3B82F6] flex items-center justify-center text-[#3B82F6] group-hover:text-white shadow-sm shrink-0 transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right on Mobile / Tablet: Call Option + Hamburger Menu */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            {/* Call Option */}
            <a
              href="tel:+919830083777"
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-white bg-blue-600/30 hover:bg-blue-600/50 rounded-full border border-blue-400/40 shadow-sm transition-colors cursor-pointer"
              aria-label="Call +91 9830083777"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#60A5FA]" />
            </a>

            {/* Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-neutral-200 hover:text-white bg-black/40 hover:bg-black/60 rounded-full border border-white/20 shadow-sm transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.div
                    key="close-icon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu-icon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Website Dark Theme and Reference Structure */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-glass-menu"
              initial={{ opacity: 0, y: -10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2.5 bg-[#0d1319]/95 backdrop-blur-2xl border border-white/20 rounded-2xl p-4 sm:p-5 shadow-2xl shadow-black/90 text-white origin-top w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] flex flex-col gap-3 font-['Outfit',sans-serif]"
            >
              {/* Navigation Links */}
              <div className="space-y-1">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'products', label: 'Products' },
                  { id: 'about', label: 'About' },
                  { id: 'case-study', label: 'Applications' },
                  { id: 'contact', label: 'Contact' },
                ].map((item, idx) => {
                  const isActive = currentPage === item.id || (item.id === 'products' && currentPage === 'product-detail');
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.03 * (idx + 1) }}
                      className={isActive ? 'bg-blue-600/15 border border-blue-500/25 rounded-xl px-3.5 py-2.5' : 'px-3.5 py-2'}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          handleNavClick(item.id as any);
                        }}
                        className={`text-left text-base font-bold tracking-tight transition-colors cursor-pointer block w-full ${
                          isActive ? 'text-white' : 'text-neutral-300 hover:text-white'
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && <div className="w-7 h-[2.5px] bg-[#60A5FA] rounded-full mt-1" />}
                      </button>
                    </motion.div>
                  );
                })}
              </div>

              {/* Direct Wholesale Trade Desk Phone Line */}
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="pt-1"
              >
                <a
                  href="tel:+919830083777"
                  className="flex items-center gap-3 px-3 py-2 text-left rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-600/25 text-[#60A5FA] flex items-center justify-center shrink-0 border border-blue-400/30 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="leading-tight">
                    <span className="text-[10px] font-bold text-blue-300 uppercase tracking-wider block">
                      Sales Desk
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-200 transition-colors tracking-tight block">
                      +91 98300 83777
                    </span>
                  </div>
                </a>
              </motion.div>

              {/* Request Quote Button matching Desktop Navbar Button Design */}
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24 }}
              >
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleNavClick('contact');
                  }}
                  className="group w-full bg-[#3B82F6] hover:bg-[#DBEAFE] text-white hover:text-black font-bold pl-5 pr-2 py-2.5 rounded-full flex items-center justify-between text-sm transition-all cursor-pointer shadow-lg font-['Outfit',sans-serif]"
                >
                  <span className="transition-colors">Get Quote</span>
                  <div className="w-6 h-6 rounded-full bg-white group-hover:bg-[#3B82F6] flex items-center justify-center text-[#3B82F6] group-hover:text-white shadow-sm shrink-0 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};


