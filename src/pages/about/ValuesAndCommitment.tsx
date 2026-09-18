import { useState, type FC } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getCloudinaryUrl } from '../../utils/cloudinary';
const companyValue = getCloudinaryUrl('company-value.jpg');
const commitmentImg = getCloudinaryUrl('commitment.jpg');

interface OurFoundationProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'case-study' | 'product-detail' | 'contact') => void;
}

export const ValuesAndCommitment: FC<OurFoundationProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'values' | 'commitment'>('values');

  const tabData = {
    values: {
      image: companyValue,
      alt: 'Charu Enterprises company values and manufacturing excellence',
    },
    commitment: {
      image: commitmentImg,
      alt: 'Quality control laboratory, ISO inspection, and global distributor commitment',
    },
  };

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('products');
    }
  };

  return (
    <section className="w-full bg-[#DBEAFE] py-16 sm:py-20 lg:py-24 font-['Outfit',sans-serif] border-b border-blue-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          
          {/* Left Column: Narrative Content & Interactive Tabs */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-7">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block" />
              <span className="text-[#2563EB] text-xs sm:text-sm font-semibold tracking-wide uppercase">
                Our Foundation
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0a1532] leading-[1.2] tracking-tight">
              Built on Precision Metallurgy, Quality, and Global Trust
            </h2>

            {/* Interactive Tabs Header */}
            <div className="flex items-center gap-6 sm:gap-8 pt-1 border-b border-blue-200/90 pb-3">
              <button
                type="button"
                onClick={() => setActiveTab('values')}
                className={`relative pb-1 text-base sm:text-lg font-semibold transition-colors cursor-pointer ${
                  activeTab === 'values'
                    ? 'text-[#2563EB]'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Our Values
                {activeTab === 'values' && (
                  <motion.div
                    layoutId="foundation-tab-indicator"
                    className="absolute -bottom-[13px] left-0 right-0 h-[2.5px] bg-[#2563EB] rounded-full"
                  />
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('commitment')}
                className={`relative pb-1 text-base sm:text-lg font-semibold transition-colors cursor-pointer ${
                  activeTab === 'commitment'
                    ? 'text-[#2563EB]'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Our Commitment
                {activeTab === 'commitment' && (
                  <motion.div
                    layoutId="foundation-tab-indicator"
                    className="absolute -bottom-[13px] left-0 right-0 h-[2.5px] bg-[#2563EB] rounded-full"
                  />
                )}
              </button>
            </div>

            {/* Fixed Height Tab Content Container with Zero Layout Shift */}
            <div className="relative grid grid-cols-1 grid-rows-1 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
              {/* Values Tab Panel */}
              <div
                className={`[grid-area:1/1] space-y-4 transition-all duration-300 ${
                  activeTab === 'values'
                    ? 'opacity-100 pointer-events-auto translate-y-0'
                    : 'opacity-0 pointer-events-none translate-y-1'
                }`}
              >
                <p>
                  We make strong, durable fence parts that withstand heavy wind, high loads, and rough weather. Every part is carefully checked from raw steel coils to hot-dip galvanizing.
                </p>
                <p>
                  We build lasting relationships with fence distributors through fair factory prices, custom packaging, and continuous investment in our in-house tool room.
                </p>
              </div>

              {/* Commitment Tab Panel */}
              <div
                className={`[grid-area:1/1] space-y-4 transition-all duration-300 ${
                  activeTab === 'commitment'
                    ? 'opacity-100 pointer-events-auto translate-y-0'
                    : 'opacity-0 pointer-events-none translate-y-1'
                }`}
              >
                <p>
                  We stand behind every brace band, gate hinge, post cap, and tension bar we make. Our ISO 9001:2015 certified team tests steel strength, dimensions, and zinc thickness.
                </p>
                <p>
                  Our international export team works closely with importers to pack full containers securely, provide fast shipping, and clear customs smoothly.
                </p>
              </div>
            </div>

            {/* Bottom Link matching screenshot */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleServicesClick}
                className="group/link inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#0a1532] hover:text-[#2563EB] border-b-2 border-[#0a1532] hover:border-[#2563EB] pb-0.5 transition-all cursor-pointer"
              >
                <span>Explore Catalog &amp; Products</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Column: 1:1 Aspect Ratio Showcase Image Card with smooth instant crossfade animation */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative rounded-2xl sm:rounded-3xl lg:rounded-[28px] overflow-hidden aspect-square w-full max-w-[540px] shadow-xl border border-blue-200/80 bg-slate-100 group">
              <AnimatePresence initial={false}>
                <motion.img
                  key={activeTab}
                  src={tabData[activeTab].image}
                  alt={tabData[activeTab].alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-103 transition-transform duration-700"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValuesAndCommitment;
