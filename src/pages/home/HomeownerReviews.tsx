import { useState, type FC } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const HomeownerReviews: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      rating: '4.9+',
      ratingText: '4.9 rating from local homeowners',
      quote:
        'The new deck changed how we use our backyard. The team explained every option and kept the project simple from start to finish.',
      name: 'Daniel Carter',
      role: 'Operations Manager',
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      image:
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80',
    },
    {
      id: 2,
      rating: '5.0',
      ratingText: '5.0 rating on Pergola & Patio Build',
      quote:
        'From the initial design consultation to the final board installation, the craftmanship exceeded our expectations. Our outdoor dining space is now our favorite spot.',
      name: 'Sarah Jenkins',
      role: 'Homeowner in Oakville',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      image:
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80',
    },
    {
      id: 3,
      rating: '4.95',
      ratingText: '4.95 rating on Deck Restoration',
      quote:
        'Honest pricing, arrived on time every morning, and finished ahead of schedule. The quality of the carpentry and railings is second to none.',
      name: 'Marcus Vance',
      role: 'Residential Client',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      image:
        'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1400&q=80',
    },
  ];

  const currentReview = reviews[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="reviews"
      className="w-full bg-white py-16 sm:py-20 lg:py-24 font-['Outfit',sans-serif] border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          {/* Left Column: Eyebrow + Headline + Image */}
          <div className="lg:col-span-6 flex flex-col justify-end">
            {/* Header directly above the image */}
            <div className="mb-6 sm:mb-8 space-y-3.5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block" />
                <span className="text-[#3B82F6] text-sm sm:text-base font-bold tracking-tight">
                  Homeowner reviews
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0a1532] leading-[1.18] tracking-tight">
                Trusted for Clear Planning &amp; <br className="hidden sm:inline" />
                Finished Outdoor Spaces.
              </h2>
            </div>

            {/* Patio Sunset Image */}
            <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden aspect-[16/11] sm:aspect-[4/3] w-full shadow-md bg-neutral-900 border border-slate-200/80">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentReview.image}
                  src={currentReview.image}
                  alt="Homeowners enjoying outdoor patio space at sunset"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover object-center"
                />
              </AnimatePresence>
            </div>
          </div>

            {/* Right Column: Theme Navy Review Card perfectly aligned at the bottom with the left image */}
          <div className="lg:col-span-6 flex flex-col justify-end">
            <div className="bg-[#0a1532] rounded-[24px] sm:rounded-[28px] p-8 sm:p-10 lg:p-12 text-white shadow-xl flex flex-col justify-between min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] border border-blue-900/50 relative overflow-hidden">
              {/* Subtle brand glow accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Centered Testimonial Body (Equal vertical spacing) */}
              <div className="flex-1 flex flex-col justify-center py-2 relative z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentReview.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6 sm:space-y-7"
                  >
                    {/* Rating Block */}
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2.5">
                        <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                          {currentReview.rating}
                        </span>
                        <div className="flex items-center gap-1 text-[#f0c75e]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current stroke-0" />
                          ))}
                        </div>
                      </div>
                      <p className="text-[#DBEAFE]/80 text-xs sm:text-sm font-normal">
                        {currentReview.ratingText}
                      </p>
                    </div>

                    {/* Testimonial Quote */}
                    <h3 className="text-xl sm:text-2xl lg:text-[25px] font-medium leading-[1.35] text-white tracking-tight">
                      {currentReview.quote}
                    </h3>

                    {/* Reviewer Details (Name & Role without profile picture) */}
                    <div className="pt-1">
                      <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
                        {currentReview.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#DBEAFE]/70 font-normal">
                        {currentReview.role}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Controls Row: Horizontal line on left, navigation buttons on right */}
              <div className="pt-6 flex items-center justify-between gap-4 relative z-10">
                <div className="flex-1 max-w-[240px] sm:max-w-[320px] h-[1.5px] bg-white/30 rounded-full" />

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#0a1532] hover:bg-[#3B82F6] hover:text-white flex items-center justify-center shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
                    aria-label="Previous review"
                  >
                    <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#0a1532] hover:bg-[#3B82F6] hover:text-white flex items-center justify-center shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
                    aria-label="Next review"
                  >
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

