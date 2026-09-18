import { useState, type FC } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { getCloudinaryUrl } from '../../utils/cloudinary';

const clientImg1 = getCloudinaryUrl('client-1.jpg');
const clientImg2 = getCloudinaryUrl('client-2.jpg');
const clientImg3 = getCloudinaryUrl('client-3.jpg');
const clientImg4 = getCloudinaryUrl('client-4.jpg');
const clientImg5 = getCloudinaryUrl('client-5.jpg');

export const TestimonialCarousel: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      rating: '5.0',
      ratingText: '5.0 Rating • Container Orders',
      quote:
        'Charu Enterprises has supplied our US warehouses for 8+ years. Galvanizing and dimensions are always reliable.',
      name: 'Robert M. Gallagher',
      role: 'VP Procurement (Texas, USA)',
      avatar: clientImg1,
      image: '',
    },
    {
      id: 2,
      rating: '5.0',
      ratingText: '5.0 Rating • Custom Tooling',
      quote:
        'Their tool room made our custom roller parts with zero flaws. Containers arrive safely packed and on time.',
      name: 'David L. Tremblay',
      role: 'Director of Sourcing (Ontario, Canada)',
      avatar: clientImg2,
      image: '',
    },
    {
      id: 3,
      rating: '4.95',
      ratingText: '4.95 Rating • Quality & Delivery',
      quote:
        'Working with the Charu team is seamless. Clear communication, fair prices, and reliable zero-defect quality.',
      name: 'Klaus Richter',
      role: 'Managing Director (Germany)',
      avatar: clientImg3,
      image: '',
    },
    {
      id: 4,
      rating: '5.0',
      ratingText: '5.0 Rating • Powder Coating',
      quote:
        'Great powder coated fence fittings and fast support. Very dependable partner for our large container orders.',
      name: 'James Whitfield',
      role: 'Supply Chain Manager (Melbourne, Australia)',
      avatar: clientImg4,
      image: '',
    },
    {
      id: 5,
      rating: '4.98',
      ratingText: '4.98 Rating • Malleable Castings',
      quote:
        'Consistent malleable iron parts on every order. Export paperwork and shipping are handled smoothly.',
      name: 'Marco Bianchi',
      role: 'Procurement Director (Milan, Italy)',
      avatar: clientImg5,
      image: '',
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
      className="w-full bg-[#DBEAFE] py-12 sm:py-16 md:py-20 lg:py-24 font-['Outfit',sans-serif]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-8 lg:gap-10 items-end">
          {/* Left Column: Eyebrow + Headline + Image */}
          <div className="lg:col-span-6 flex flex-col justify-end">
            {/* Header directly above the image */}
            <div className="mb-4 sm:mb-6 md:mb-8 space-y-2.5 sm:space-y-3.5">
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block shrink-0 self-start mt-0.5 sm:mt-1" />
                <span className="text-[#2563EB] text-xs sm:text-sm md:text-base font-bold tracking-tight uppercase">
                  Client Reviews
                </span>
              </div>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-[38px] lg:text-[42px] font-bold text-[#0a1532] leading-[1.18] tracking-tight">
                Trusted by Global Distributors
              </h2>
            </div>

            {/* Facility / Warehouse Image */}
            <div className="relative rounded-[20px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden aspect-video w-full shadow-md bg-neutral-900 border border-blue-200/80">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentReview.avatar}
                  src={currentReview.avatar}
                  alt={currentReview.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover object-center"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Theme Navy Review Card */}
          <div className="lg:col-span-6 flex flex-col justify-end">
            <div className="bg-[#0a1532] rounded-[20px] sm:rounded-[24px] md:rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12 text-white shadow-xl flex flex-col justify-between min-h-[400px] sm:min-h-[460px] md:min-h-[500px] lg:min-h-[520px] border border-blue-900/50 relative overflow-hidden">
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
                    className="space-y-4 sm:space-y-6 md:space-y-7"
                  >
                    {/* Rating Block */}
                    <div className="space-y-1 sm:space-y-1.5">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                          {currentReview.rating}
                        </span>
                        <div className="flex items-center gap-1 text-[#f0c75e]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current stroke-0" />
                          ))}
                        </div>
                      </div>
                      <p className="text-[#DBEAFE]/80 text-xs sm:text-sm font-normal">
                        {currentReview.ratingText}
                      </p>
                    </div>

                    {/* Testimonial Quote */}
                    <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-[23px] font-medium leading-[1.35] text-white tracking-tight">
                      "{currentReview.quote}"
                    </h3>

                    {/* Reviewer Details */}
                    <div className="pt-1">
                      <h4 className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug">
                        {currentReview.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#DBEAFE]/70 font-normal">
                        {currentReview.role}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Controls Row */}
              <div className="pt-4 sm:pt-6 flex items-center justify-between gap-4 relative z-10">
                <div className="flex-1 max-w-[180px] sm:max-w-[240px] md:max-w-[320px] h-[1.5px] bg-white/30 rounded-full" />

                <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                  <button
                    onClick={handlePrev}
                    className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white text-[#0a1532] hover:bg-[#3B82F6] hover:text-white flex items-center justify-center shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
                    aria-label="Previous review"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white text-[#0a1532] hover:bg-[#3B82F6] hover:text-white flex items-center justify-center shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
                    aria-label="Next review"
                  >
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
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

export default TestimonialCarousel;

