import { useState, useEffect, useMemo, type FC } from 'react';
import { Phone, ArrowRight, Star, Check, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CATALOG_PRODUCTS, type CatalogProduct } from '../../data/companyData';
import { getProductImage } from '../../data/productImages';
import { productSlug } from '../../App';
import bannerVideo from '../../assets/banner-video.mp4';

interface HeroProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'case-study' | 'product-detail' | 'contact', product?: CatalogProduct) => void;
}

export const Hero: FC<HeroProps> = ({ onNavigate }) => {
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
    <div className="w-full bg-white px-2 sm:px-3 md:px-4 pt-2 sm:pt-3 pb-2">
      {/* Outer Rounded Hero Container Card with slightly increased height */}
      <div className="w-full bg-[#0a1532] rounded-2xl sm:rounded-[24px] lg:rounded-[28px] overflow-hidden relative shadow-2xl min-h-[700px] md:min-h-[760px] lg:min-h-[800px] xl:min-h-[830px] flex flex-col justify-between border border-blue-900/50 font-['Outfit',sans-serif]">
        {/* Background Image spanning full screen size card with industrial metallurgy texture */}
        <div className="absolute inset-0 z-0">
          <video
            src={bannerVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-[70%_center] lg:object-[80%_center] opacity-85"
          />
          {/* Reduced multi-stop gradient overlay so image clearly shows */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071128]/90 via-[#071128]/65 via-50% to-[#071128]/25 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071128]/95 via-transparent to-[#071128]/35 z-10" />
        </div>

        {/* Hero Body Content */}
        <div className="relative z-20 w-full flex-1 flex flex-col justify-center my-auto pt-32 sm:pt-36 lg:pt-42 pb-14 sm:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
            {/* Left Column Content */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-7">
              {/* Eyebrow */}
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block" />
                <span className="text-[#60A5FA] text-sm sm:text-base font-semibold tracking-wide uppercase">
                  Mfg Since 1969 • Celebrating 55+ Years of Growth
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#FFFFFF] leading-[1.12]">
                Global Leader in <br />
                Fence Fittings & Hardware
              </h1>

              {/* Subtitle */}
              <p className="text-neutral-100 text-base sm:text-lg max-w-xl leading-relaxed font-normal">
                We manufacture and export high-quality pressed steel, malleable iron, and aluminum fence fittings. Over 150 million pieces exported to 4 continents with zero defects and direct warehouse delivery.
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                {/* Explore Catalog Pill */}
                <button
                  type="button"
                  onClick={() => onNavigate?.('case-study')}
                  className="group bg-[#3B82F6] hover:bg-[#DBEAFE] text-white hover:text-black font-bold pl-6 pr-2.5 py-3 rounded-full flex items-center gap-3 text-sm sm:text-base shadow-xl transition-all transform hover:scale-105 cursor-pointer"
                >
                  <span className="transition-colors">Explore Catalog A25</span>
                  <div className="w-7 h-7 rounded-full bg-white group-hover:bg-[#3B82F6] flex items-center justify-center text-[#3B82F6] group-hover:text-white shadow-sm shrink-0 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </button>

                {/* Call Now Pill */}
                <a
                  href="tel:+919830083777"
                  className="group bg-transparent hover:bg-[#DBEAFE] text-white hover:text-black font-semibold pl-3.5 pr-6 py-3 rounded-full flex items-center gap-2.5 border border-white hover:border-[#DBEAFE] backdrop-blur-sm text-sm sm:text-base transition-all transform hover:scale-105 shadow-lg"
                >
                  <div className="w-7 h-7 rounded-full bg-white group-hover:bg-[#22C55E] text-[#0a1532] group-hover:text-white flex items-center justify-center shadow-sm shrink-0 transition-colors">
                    <Phone className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className="transition-colors">Call: +91 9830083777</span>
                </a>
              </div>

              {/* Ratings row */}
              <div className="pt-2 flex flex-wrap sm:flex-nowrap items-center gap-3.5">
                <div className="flex items-center -space-x-2.5 shrink-0 px-1 py-1">
                  <div className="inline-flex h-9.5 w-9.5 rounded-full ring-2 ring-white shadow-md shrink-0 relative z-40 items-center justify-center bg-[#3B82F6] text-white text-xs font-bold">
                    JD
                  </div>
                  <div className="inline-flex h-9.5 w-9.5 rounded-full ring-2 ring-white shadow-md shrink-0 relative z-30 items-center justify-center bg-[#2563EB] text-white text-xs font-bold">
                    RK
                  </div>
                  <div className="inline-flex h-9.5 w-9.5 rounded-full ring-2 ring-white shadow-md shrink-0 relative z-20 items-center justify-center bg-[#1E40AF] text-white text-xs font-bold">
                    SM
                  </div>
                  <div className="inline-flex h-9.5 w-9.5 rounded-full ring-2 ring-white shadow-md shrink-0 relative z-10 items-center justify-center bg-[#1E3A8A] text-white text-xs font-bold">
                    AK
                  </div>
                </div>

                <div className="shrink-0">
                  <div className="flex items-center gap-1 text-[#f0c75e]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-[#FFFFFF] font-semibold mt-0.5">
                    100% Satisfaction • 150M+ Pieces Exported Globally
                  </p>
                </div>
              </div>

              {/* Bottom Feature Key Points with increased top gap */}
              <div className="pt-7 sm:pt-8">
                <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 sm:gap-6 text-sm sm:text-[15px] text-[#FFFFFF] font-semibold">
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-5 h-5 rounded-full bg-[#3B82F6] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Check className="w-3.2 h-3.2 text-white stroke-[3.5]" />
                    </div>
                    <span>ISO 9001:2015 Certified</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-5 h-5 rounded-full bg-[#3B82F6] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Check className="w-3.2 h-3.2 text-white stroke-[3.5]" />
                    </div>
                    <span>Zero Defects Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-5 h-5 rounded-full bg-[#3B82F6] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Check className="w-3.2 h-3.2 text-white stroke-[3.5]" />
                    </div>
                    <span>30+ Yrs FENCETECH</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-5 h-5 rounded-full bg-[#3B82F6] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Check className="w-3.2 h-3.2 text-white stroke-[3.5]" />
                    </div>
                    <span>Govt. Export Awardee</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Floating Product Showcase Card */}
            <div className="lg:col-span-4 flex justify-end items-end w-full">
              <a
                href={`/products/${productSlug(currentProduct)}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.('product-detail', currentProduct);
                }}
                className="bg-white rounded-[22px] sm:rounded-[24px] p-2.5 sm:p-3 shadow-2xl border border-white/80 max-w-[280px] sm:max-w-[310px] w-full transform transition-all hover:-translate-y-1 group cursor-pointer select-none"
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
