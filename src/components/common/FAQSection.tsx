import { useState, type FC } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQSectionProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'case-study' | 'product-detail' | 'contact') => void;
}

export const FAQSection: FC<FAQSectionProps> = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      id: '01',
      question: 'What is your production lead time?',
      answer:
        'Full container orders typically ship in 30 to 45 days. Standard catalog products ship even faster.',
    },
    {
      id: '02',
      question: 'Can you manufacture to our drawings?',
      answer:
        'Yes. We make custom stamped parts based on your specifications, drawings, or physical samples.',
    },
    {
      id: '03',
      question: 'What galvanizing standards do you use?',
      answer:
        'We hot-dip galvanize to ASTM A153 / A123 standards for long-lasting rust protection.',
    },
    {
      id: '04',
      question: 'Where do you ship?',
      answer:
        'We ship worldwide under FOB, CIF, or door-to-door DDP terms to the USA, Canada, Europe, and Australia.',
    },
    {
      id: '05',
      question: 'What test reports are provided?',
      answer:
        'Every batch includes ISO 9001 test reports, mill certificates, and coating thickness data.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 font-['Outfit',sans-serif]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-14 items-start">
          {/* Left Column: Eyebrow + Headline + Description + Let's Talk CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-5 sm:space-y-6 md:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block shrink-0 self-start mt-0.5 sm:mt-1" />
                <span className="text-[#3B82F6] text-xs sm:text-sm md:text-base font-bold tracking-tight uppercase">
                  FAQ
                </span>
              </div>

              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-[38px] lg:text-[42px] font-bold text-[#0a1532] leading-[1.18] tracking-tight">
                Frequently Asked Questions
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal pt-1">
                Quick answers on order lead times, custom stamping, ASTM coatings, and global delivery.
              </p>
            </div>

            {/* Let's Talk Button matching website button design and hover effect */}
            <div className="pt-1 sm:pt-2 lg:pt-8">
              <button
                type="button"
                onClick={() => onNavigate?.('contact')}
                className="group/btn bg-[#3B82F6] hover:bg-[#DBEAFE] text-white hover:text-black font-bold pl-5 sm:pl-6 pr-2.5 py-2.5 sm:py-3 rounded-full inline-flex items-center gap-3 text-xs sm:text-sm md:text-base shadow-xl transition-all transform hover:scale-105 cursor-pointer"
              >
                <span className="transition-colors">Ask a Question</span>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white group-hover/btn:bg-[#3B82F6] text-[#3B82F6] group-hover/btn:text-white flex items-center justify-center shadow-sm shrink-0 group-hover/btn:translate-x-0.5 transition-all">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Accordion list */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-3.5 md:space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.id}
                  className={`rounded-[16px] sm:rounded-[20px] md:rounded-[22px] transition-all duration-300 overflow-hidden cursor-pointer ${
                    isOpen
                      ? 'bg-[#0a1532] text-white shadow-xl border border-blue-900/60'
                      : 'bg-white text-[#0a1532] hover:border-[#3B82F6]/50 shadow-sm border border-slate-200/90 hover:bg-slate-50/50'
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  {/* Accordion Header */}
                  <div className="p-4 sm:p-5 md:p-6 flex items-center justify-between gap-3.5 sm:gap-4 select-none">
                    <h3
                      className={`text-sm sm:text-base md:text-lg font-semibold tracking-tight transition-colors ${
                        isOpen ? 'text-white' : 'text-[#0a1532] hover:text-[#3B82F6]'
                      }`}
                    >
                      <span className={isOpen ? 'text-[#f0c75e] mr-1.5' : 'text-[#3B82F6] mr-1.5'}>
                        {faq.id}.
                      </span>{' '}
                      {faq.question}
                    </h3>
                    <div
                      className={`shrink-0 transition-transform duration-300 ${
                        isOpen ? 'text-[#f0c75e]' : 'text-slate-400'
                      }`}
                    >
                      {isOpen ? (
                        <ChevronUp className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.5]" />
                      ) : (
                        <ChevronDown className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2]" />
                      )}
                    </div>
                  </div>

                  {/* Accordion Answer Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-6 pt-1 text-[#DBEAFE]/90 text-xs sm:text-sm leading-relaxed border-t border-white/10 mt-1">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
