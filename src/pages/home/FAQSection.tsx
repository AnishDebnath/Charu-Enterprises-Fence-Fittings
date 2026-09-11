import { useState, type FC } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FAQSection: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      id: '01',
      question: 'How long does a typical custom deck or patio build take?',
      answer:
        'Most standard residential deck or patio builds take between 1 to 3 weeks once on-site construction begins, depending on square footage, complexity, railing systems, and weather conditions.',
    },
    {
      id: '02',
      question: 'Do you handle city building permits and HOA approvals?',
      answer:
        'Yes, we manage the entire permitting process from drafting 3D architectural plans to submitting documentation with your local township and coordinating HOA architectural reviews.',
    },
    {
      id: '03',
      question: 'What is the difference between composite and treated timber decking?',
      answer:
        'Composite decking offers ultra-low maintenance, superior UV resistance, and 25–50 year stain and fade warranties without requiring annual staining or sanding, whereas pressure-treated lumber offers a classic natural wood aesthetic at a lower initial investment.',
    },
    {
      id: '04',
      question: 'How do you structure estimates and project milestone payments?',
      answer:
        'We provide transparent, fixed-price itemized estimates with no hidden fees. Payments are typically structured in clear project milestones: initial deposit, material arrival/framing start, and final sign-off inspection upon completion.',
    },
    {
      id: '05',
      question: 'What warranties do you provide on craftsmanship and materials?',
      answer:
        'All our installations include our comprehensive 5-year structural craftsmanship warranty in addition to manufacturer warranties ranging from 25 years to lifetime protection on premium composite materials and powder-coated railings.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full bg-white py-16 sm:py-20 lg:py-24 font-['Outfit',sans-serif] border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Eyebrow + Headline + Description + Let's Talk CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block" />
                <span className="text-[#3B82F6] text-xs sm:text-sm font-bold tracking-tight uppercase">
                  FAQ
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0a1532] leading-[1.18] tracking-tight">
                Common Questions Before Starting an Outdoor Project.
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal pt-1">
                Answer the questions homeowners usually ask before they request a quote.
              </p>
            </div>

            {/* Let's Talk Button matching website button design and hover effect */}
            <div className="pt-2 lg:pt-8">
              <a
                href="#contact"
                className="group/btn bg-[#3B82F6] hover:bg-[#DBEAFE] text-white hover:text-black font-bold pl-6 pr-2.5 py-3 rounded-full inline-flex items-center gap-3 text-sm sm:text-base shadow-xl transition-all transform hover:scale-105 cursor-pointer"
              >
                <span className="transition-colors">Let&apos;s Talk</span>
                <div className="w-7 h-7 rounded-full bg-white group-hover/btn:bg-[#3B82F6] text-[#3B82F6] group-hover/btn:text-white flex items-center justify-center shadow-sm shrink-0 group-hover/btn:translate-x-0.5 transition-all">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Accordion list */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.id}
                  className={`rounded-[20px] sm:rounded-[22px] transition-all duration-300 overflow-hidden cursor-pointer ${
                    isOpen
                      ? 'bg-[#0a1532] text-white shadow-xl border border-blue-900/60'
                      : 'bg-white text-[#0a1532] hover:border-[#3B82F6]/50 shadow-sm border border-slate-200/90 hover:bg-slate-50/50'
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  {/* Accordion Header */}
                  <div className="p-5 sm:p-6 flex items-center justify-between gap-4 select-none">
                    <h3
                      className={`text-base sm:text-lg font-semibold tracking-tight transition-colors ${
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
                        <ChevronUp className="w-5 h-5 stroke-[2.5]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 stroke-[2]" />
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
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-[#DBEAFE]/90 text-xs sm:text-sm leading-relaxed border-t border-white/10 mt-1">
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
