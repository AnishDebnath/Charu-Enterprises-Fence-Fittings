import type { FC } from 'react';
import { motion } from 'motion/react';

interface ProductDetailHeroProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'case-study' | 'product-detail' | 'contact') => void;
  productTitle?: string;
}

export const ProductDetailHero: FC<ProductDetailHeroProps> = ({ onNavigate, productTitle = 'Barbed Arm - 14 GA & 16 GA' }) => {
  return (
    <div className="w-full bg-white px-2 sm:px-3 md:px-4 pt-2 sm:pt-3 pb-2 font-['Outfit',sans-serif]">
      {/* Outer Rounded Hero Container Card matching About Hero */}
      <div className="w-full bg-[#0a1532] rounded-2xl sm:rounded-[24px] lg:rounded-[28px] overflow-hidden relative shadow-2xl min-h-[420px] sm:min-h-[470px] md:min-h-[520px] lg:min-h-[560px] flex flex-col justify-between border border-blue-900/50">
        
        {/* Background Image with Industrial Manufacturing & Soft Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=2560&q=85"
            alt="Charu Enterprises precision stamped fence fitting component manufacturing"
            className="w-full h-full object-cover object-[center_45%] opacity-90"
          />
          {/* Balanced gradient overlay allowing photography to show clearly */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071128]/85 via-[#071128]/55 via-50% to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071128]/80 via-transparent to-[#071128]/25 z-10" />
        </div>

        {/* Hero Content - Centered vertically with top spacing for floating navbar */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 md:pt-44 lg:pt-52 pb-12 sm:pb-16 lg:pb-20 flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl space-y-3 sm:space-y-4"
          >
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Product Specifications
            </h1>

            {/* Subtitle */}
            <p className="text-neutral-100 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-xl">
              In-depth engineering dimensions, size charts, packaging counts, and ASTM A153 hot-dip galvanizing standards for Catalog A25 items.
            </p>

            {/* Breadcrumb Navigation */}
            <div className="pt-2 flex items-center gap-2 text-sm sm:text-base font-semibold flex-wrap">
              <button
                type="button"
                onClick={() => onNavigate?.('home')}
                className="text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                Home
              </button>
              <span className="text-white/50">/</span>
              <button
                type="button"
                onClick={() => onNavigate?.('case-study')}
                className="text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                Catalog A25
              </button>
              <span className="text-white/50">/</span>
              <span className="text-[#f0c75e] font-bold line-clamp-1">{productTitle}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailHero;
