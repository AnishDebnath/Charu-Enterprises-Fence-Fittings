import { useState, useEffect, type FC } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { homeShippingSteps as steps } from '../../data/shippingData';

interface FamilyOwnedProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'application' | 'product-detail' | 'contact') => void;
}

export const FamilyOwned: FC<FamilyOwnedProps> = ({ onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-switch tabs every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section id="shipment-process" className="w-full bg-white py-16 sm:py-20 lg:py-24 font-['Outfit',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-12 sm:mb-14 lg:mb-16 items-start">
          {/* Left Column: Eyebrow + Headline */}
          <div className="lg:col-span-7 space-y-3.5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block" />
              <span className="text-[#3B82F6] text-sm sm:text-base font-bold tracking-tight uppercase">
                Shipping Process
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0a1532] leading-[1.18] tracking-tight">
              4-Step Global Delivery
            </h2>
          </div>

          {/* Right Column: Paragraph + CTA Button */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-5 pt-1 lg:pt-2">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Over 55 years of exporting full container loads worldwide with verified quality and on-time delivery.
            </p>

            <button
              type="button"
              onClick={() => onNavigate?.('contact')}
              className="group/btn w-fit bg-[#3B82F6] hover:bg-[#DBEAFE] text-white hover:text-black font-bold pl-6 pr-2.5 py-3 rounded-full inline-flex items-center gap-3 text-sm sm:text-base shadow-xl transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              <span className="transition-colors">Get Shipping Quote</span>
              <div className="w-7 h-7 rounded-full bg-white group-hover/btn:bg-[#3B82F6] text-[#3B82F6] group-hover/btn:text-white flex items-center justify-center shadow-sm shrink-0 group-hover/btn:translate-x-0.5 transition-all">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </button>
          </div>
        </div>

        {/* Main Content Grid: 1:1 Aspect Image on Left + 4 Feature Tabs on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: 1:1 Square Ratio Image with seamless zero-delay crossfade */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-[460px] lg:max-w-none aspect-square rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-lg border border-slate-200/80 bg-slate-900">
              <AnimatePresence initial={false}>
                <motion.img
                  key={steps[activeIndex].id}
                  src={steps[activeIndex].image}
                  alt={steps[activeIndex].alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="w-full h-full object-cover object-center absolute inset-0"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: 4 Feature Interactive Tabs Stack */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-3 sm:gap-3.5">
            {steps.map((step, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative rounded-2xl sm:rounded-3xl p-4 sm:p-5 border transition-all duration-300 flex items-start gap-3.5 sm:gap-5 cursor-pointer overflow-hidden ${
                    isActive
                      ? 'bg-[#f0f6ff]/90 border-[#3B82F6] ring-2 ring-[#3B82F6]/20 shadow-md transform -translate-y-0.5'
                      : 'bg-white border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-200 opacity-80 hover:opacity-100'
                  }`}
                >
                  {/* Circular Number Badge */}
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full font-bold text-sm sm:text-base flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm ${
                      isActive
                        ? 'bg-[#3B82F6] text-white shadow-[#3B82F6]/30'
                        : 'bg-[#f0f6ff] text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white'
                    }`}
                  >
                    {step.id}
                  </div>

                  {/* Content Block */}
                  <div className="space-y-1 pt-0.5 min-w-0">
                    <h3
                      className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                        isActive ? 'text-[#1E40AF]' : 'text-[#0a1532]'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed font-medium transition-colors ${
                        isActive ? 'text-slate-700' : 'text-slate-600'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilyOwned;

