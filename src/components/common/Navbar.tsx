import { useState, useEffect, type FC } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import logo from '../../assets/logo.png';

interface NavbarProps {
  currentPage?: 'home' | 'about' | 'services' | 'projects' | 'project-detail' | 'contact';
  onNavigate?: (page: 'home' | 'about' | 'services' | 'projects' | 'project-detail' | 'contact') => void;
}

export const Navbar: FC<NavbarProps> = ({ currentPage = 'home', onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: 'home' | 'about' | 'services' | 'projects' | 'project-detail' | 'contact', hash?: string) => {
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
        isScrolled ? 'top-2.5 sm:top-3.5 md:top-4' : 'top-4 sm:top-6 md:top-7 lg:top-8'
      }`}
    >
      {/* Outer Flex Wrapper for Centered Shrinking */}
      <div className="w-full flex flex-col items-center px-2 sm:px-4 md:px-6 pointer-events-auto">
        {/* Transparent Glassmorphism Navbar Container */}
        <div
          id="glass-navbar"
          className={`w-full rounded-full flex items-center justify-between border border-white/25 bg-[#0d1319]/90 shadow-2xl shadow-black/60 backdrop-blur-md sm:backdrop-blur-lg px-4 sm:px-6 py-2.5 sm:py-3 transition-[max-width] duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[max-width] ${
            isScrolled
              ? 'max-w-[300px] sm:max-w-[380px]'
              : 'max-w-7xl'
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
                      onClick={() => handleNavClick('services')}
                      className={`transition-colors cursor-pointer ${
                        currentPage === 'services'
                          ? 'text-[#60A5FA] font-extrabold'
                          : 'text-neutral-100 hover:text-white'
                      }`}
                    >
                      PRODUCTS
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNavClick('projects')}
                      className={`transition-colors cursor-pointer ${
                        currentPage === 'projects' || currentPage === 'project-detail'
                          ? 'text-[#60A5FA] font-extrabold'
                          : 'text-neutral-100 hover:text-white'
                      }`}
                    >
                      CATALOG A25
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

          {/* Right: Phone + CTA with zero unmount shift */}
          <div className="hidden sm:flex items-center shrink-0">
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
                    <span className="transition-colors">Request Quote</span>
                    <div className="w-6 h-6 rounded-full bg-white group-hover:bg-[#3B82F6] flex items-center justify-center text-[#3B82F6] group-hover:text-white shadow-sm shrink-0 transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <a
              href="tel:+919830083777"
              className="text-neutral-200 hover:text-white p-2 cursor-pointer bg-black/40 hover:bg-black/60 rounded-full border border-white/20 shadow-sm transition-colors"
              aria-label="Call Us"
            >
              <Phone className="w-4 h-4 text-[#60A5FA]" />
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              className="group sm:hidden bg-[#3B82F6] hover:bg-[#DBEAFE] text-white hover:text-black font-bold px-3 py-1.5 rounded-full text-xs shadow-sm transition-colors"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-neutral-200 hover:text-white p-2 cursor-pointer bg-black/40 hover:bg-black/60 rounded-full border border-white/20 shadow-sm transition-colors"
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

        {/* Mobile Dropdown Menu with Smooth Spring Motion Animation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-glass-menu"
              initial={{ opacity: 0, y: -14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={`mt-2.5 bg-[#0c1219]/95 backdrop-blur-2xl border border-white/20 rounded-2xl p-5 space-y-3 shadow-2xl text-white origin-top w-full ${
                isScrolled ? 'max-w-[300px] sm:max-w-[420px] md:max-w-[440px]' : 'max-w-7xl'
              }`}
            >
              <motion.button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick('home');
                }}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 }}
                className={`w-full text-left py-2 font-bold text-base border-b border-white/10 transition-colors cursor-pointer ${
                  currentPage === 'home' ? 'text-[#60A5FA]' : 'text-neutral-200 hover:text-white'
                }`}
              >
                HOME
              </motion.button>
              <motion.button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick('about');
                }}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.09 }}
                className={`w-full text-left py-2 font-bold text-base border-b border-white/10 transition-colors cursor-pointer ${
                  currentPage === 'about' ? 'text-[#60A5FA]' : 'text-neutral-200 hover:text-white'
                }`}
              >
                ABOUT
              </motion.button>
              <motion.button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick('services');
                }}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.13 }}
                className={`w-full text-left py-2 text-base border-b border-white/10 transition-colors cursor-pointer ${
                  currentPage === 'services' ? 'text-[#60A5FA] font-bold' : 'text-neutral-200 hover:text-white'
                }`}
              >
                PRODUCTS
              </motion.button>
              <motion.button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick('projects');
                }}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.17 }}
                className={`w-full text-left py-2 text-base border-b border-white/10 transition-colors cursor-pointer ${
                  currentPage === 'projects' || currentPage === 'project-detail' ? 'text-[#60A5FA] font-bold' : 'text-neutral-200 hover:text-white'
                }`}
              >
                CATALOG A25
              </motion.button>
              <motion.button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick('contact');
                }}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.21 }}
                className={`w-full text-left py-2 text-base transition-colors cursor-pointer ${
                  currentPage === 'contact' ? 'text-[#60A5FA] font-bold' : 'text-neutral-200 hover:text-white'
                }`}
              >
                CONTACT
              </motion.button>
              <motion.div
                className="pt-2"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleNavClick('contact');
                  }}
                  className="w-full bg-[#3B82F6] hover:bg-[#DBEAFE] text-white hover:text-black font-bold py-3 rounded-full text-center flex items-center justify-center gap-2 text-sm shadow-lg transition-colors cursor-pointer"
                >
                  <span>Request Product Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};


