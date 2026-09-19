import { useState, useEffect, useMemo, type FC } from 'react';
import { Phone, ArrowRight, Star, Check, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CATALOG_PRODUCTS, type CatalogProduct } from '../../data/companyData';
import { getProductImage } from '../../data/productImages';
import { productSlug } from '../../App';
import { bannerVideo, faceImage1, faceImage2, faceImage3, faceImage4 } from '../../data/images';
import logo from '../../assets/white-logo.png';

interface HeroProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'application' | 'product-detail' | 'contact', product?: CatalogProduct) => void;
}

export const HomeHero: FC<HeroProps> = ({ onNavigate }) => {
  const showcaseProducts = useMemo(() => {
    return CATALOG_PRODUCTS.filter((p) => getProductImage(p.itemNumber) || p.image);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (showcaseProducts.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showcaseProducts.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [showcaseProducts.length]);

  const currentProduct = showcaseProducts[currentIndex] || CATALOG_PRODUCTS[0];
  const currentImgSrc = getProductImage(currentProduct.itemNumber) || currentProduct.image;
  return (
    <div className="w-full bg-white px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 pt-2 sm:pt-3 pb-2">
      {/* Outer Rounded Hero Container Card with proportional min-height */}
      <div className="w-full bg-[#0a1532] rounded-2xl sm:rounded-[24px] lg:rounded-[28px] overflow-hidden relative shadow-2xl min-h-[640px] md:min-h-[720px] lg:min-h-[780px] xl:min-h-[840px] flex flex-col justify-between border border-blue-900/50 font-['Outfit',sans-serif]">
        {/* Background Image / Video spanning full card */}
        <div className="absolute inset-0 z-0">
          <video
            src={bannerVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover object-[70%_center] lg:object-[80%_center] opacity-85"
          />
          {/* Reduced multi-stop gradient overlay so image clearly shows */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071128]/90 via-[#071128]/65 via-50% to-[#071128]/25 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071128]/95 via-transparent to-[#071128]/35 z-10" />
        </div>

        {/* Hero Body Content */}
        <div className="relative z-20 w-full flex-1 flex flex-col justify-center my-auto pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 pb-12 sm:pb-14 md:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-10 xl:gap-12 items-end">
            {/* Left Column Content */}
            <div className="lg:col-span-8 space-y-5 sm:space-y-6 md:space-y-7">
              {/* Logo */}
              <img src={logo} alt="Charu Enterprises" className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto mb-2 sm:mb-3 md:mb-4" />

              {/* Eyebrow */}
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block shrink-0 self-start mt-0.5 sm:mt-1" />
                <span className="text-[#60A5FA] text-xs sm:text-sm md:text-base font-semibold tracking-wide uppercase">
                  Mfg. Since 1969 • 55+ Years
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-[50px] lg:text-[54px] xl:text-[62px] font-bold tracking-tight text-[#FFFFFF] leading-[1.12]">
                Quality Fence Fittings &amp; Hardware
              </h1>

              {/* Subtitle */}
              <p className="text-neutral-100 text-sm sm:text-base md:text-base lg:text-lg max-w-xl md:max-w-2xl leading-relaxed font-normal">
                We make and export pressed steel, malleable iron, and aluminum fence fittings. Over 150 million pieces exported worldwide.
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1">
                <button
                  type="button"
                  onClick={() => onNavigate?.('products')}
                  className="group w-fit bg-[#3B82F6] hover:bg-[#DBEAFE] text-white hover:text-black font-bold pl-5 sm:pl-6 pr-2.5 py-2.5 sm:py-3 md:py-3.5 rounded-full inline-flex items-center gap-3 text-xs sm:text-sm md:text-base shadow-xl transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
                >
                  <span className="transition-colors">View Catalog</span>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white group-hover:bg-[#3B82F6] flex items-center justify-center text-[#3B82F6] group-hover:text-white shadow-sm shrink-0 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </button>
                <a
                  href="tel:+919830083777"
                  className="group w-fit bg-transparent hover:bg-[#DBEAFE] text-white hover:text-black font-semibold pl-3 sm:pl-3.5 pr-5 sm:pr-6 py-2.5 sm:py-3 md:py-3.5 rounded-full inline-flex items-center gap-2.5 border border-white hover:border-[#DBEAFE] backdrop-blur-sm text-xs sm:text-sm md:text-base transition-all transform hover:scale-105 shadow-lg whitespace-nowrap"
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white group-hover:bg-[#22C55E] text-[#0a1532] group-hover:text-white flex items-center justify-center shadow-sm shrink-0 transition-colors">
                    <Phone className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className="transition-colors">Call Now</span>
                </a>
              </div>

              {/* Ratings row */}
              <div className="pt-2 flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-3.5">
                <div className="flex items-center -space-x-2.5 shrink-0 px-1 py-1">
                  <img src={faceImage1} alt="Client" className="inline-flex h-8 w-8 sm:h-9.5 sm:w-9.5 md:h-10 md:w-10 rounded-full ring-2 ring-white shadow-md shrink-0 relative z-40 object-cover" />
                  <img src={faceImage2} alt="Client" className="inline-flex h-8 w-8 sm:h-9.5 sm:w-9.5 md:h-10 md:w-10 rounded-full ring-2 ring-white shadow-md shrink-0 relative z-30 object-cover" />
                  <img src={faceImage3} alt="Client" className="inline-flex h-8 w-8 sm:h-9.5 sm:w-9.5 md:h-10 md:w-10 rounded-full ring-2 ring-white shadow-md shrink-0 relative z-20 object-cover" />
                  <img src={faceImage4} alt="Client" className="inline-flex h-8 w-8 sm:h-9.5 sm:w-9.5 md:h-10 md:w-10 rounded-full ring-2 ring-white shadow-md shrink-0 relative z-10 object-cover" />
                </div>
                <div className="shrink-0">
                  <div className="flex items-center gap-1 text-[#f0c75e]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm md:text-sm text-[#FFFFFF] font-semibold mt-0.5">
                    100% Quality • 150M+ Exported
                  </p>
                </div>
              </div>

              {/* Bottom Feature Key Points */}
              <div className="pt-4 sm:pt-6 md:pt-7 lg:pt-8">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 items-center gap-3 sm:gap-5 md:gap-6 xl:gap-0 text-xs sm:text-sm md:text-sm lg:text-[15px] text-[#FFFFFF] font-semibold">
                  <div className="flex items-center gap-2 w-full">
                    <div className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-[#3B82F6] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Check className="w-3 h-3 sm:w-3.2 sm:h-3.2 text-white stroke-[3.5]" />
                    </div>
                    <span>ISO 9001:2015</span>
                  </div>
                  <div className="flex items-center gap-2 w-full">
                    <div className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-[#3B82F6] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Check className="w-3 h-3 sm:w-3.2 sm:h-3.2 text-white stroke-[3.5]" />
                    </div>
                    <span>Zero Defects</span>
                  </div>
                  <div className="flex items-center gap-2 w-full">
                    <div className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-[#3B82F6] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Check className="w-3 h-3 sm:w-3.2 sm:h-3.2 text-white stroke-[3.5]" />
                    </div>
                    <span>30+ Yrs FENCETECH</span>
                  </div>
                  <div className="flex items-center gap-2 w-full">
                    <div className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-[#3B82F6] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Check className="w-3 h-3 sm:w-3.2 sm:h-3.2 text-white stroke-[3.5]" />
                    </div>
                    <span>Export Awardee</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Floating Product Showcase Card */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end items-end w-full pt-4 lg:pt-0">
              <a
                href={`/products/${productSlug(currentProduct)}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.('product-detail', currentProduct);
                }}
                className="bg-white rounded-[22px] sm:rounded-[24px] p-2.5 sm:p-3 shadow-2xl border border-white/80 max-w-[260px] xs:max-w-[280px] sm:max-w-[310px] md:max-w-[320px] w-full transform transition-all hover:-translate-y-1 group cursor-pointer select-none"
              >
                {/* 1:1 Aspect Ratio Image Container with smooth transition */}
                <div className="relative w-full aspect-square bg-[#f1f4f8] rounded-[16px] sm:rounded-[18px] overflow-hidden mb-2.5 border border-slate-100 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentProduct.id}
                      src={currentImgSrc}
                      alt={currentProduct.name}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.03 }}
                      transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                </div>

                {/* Bottom row with restored vertical fade animation for text */}
                <div className="px-1.5 py-1 flex items-center justify-between gap-2">
                  <div className="flex flex-col min-w-0 pr-1 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentProduct.id}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="flex flex-col min-w-0"
                      >
                        <span className="text-sm sm:text-[15px] font-bold text-neutral-900 tracking-tight truncate group-hover:text-[#3B82F6] transition-colors">
                          {currentProduct.name}
                        </span>
                        <span className="text-xs font-semibold text-slate-500 truncate">
                          {currentProduct.variants.length > 0
                            ? `${currentProduct.variants.length} Sizes Available`
                            : '1 Standard Size'}
                        </span>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#3B82F6] flex items-center justify-center text-neutral-900 group-hover:text-white transition-colors shrink-0 shadow-xs">
                    <ArrowUpRight className="w-3.8 h-3.8 stroke-[2.2]" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
