import { useState, type FC } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQSectionProps {
  onNavigate?: (page: 'home' | 'about' | 'services' | 'projects' | 'project-detail' | 'contact') => void;
}

export const FAQSection: FC<FAQSectionProps> = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      id: '01',
      question: 'What is your standard production lead time for container orders?',
      answer:
        'Standard full container load (FCL) orders typically ship within 30 to 45 days after CAD approval and purchase order confirmation. Repeat catalog items from our regular production schedule can often be dispatched earlier.',
    },
    {
      id: '02',
      question: 'Can Charu Enterprises manufacture custom fittings to proprietary drawings?',
      answer:
        'Yes. With our comprehensive in-house tool room and tool & die development engineers, we manufacture custom stampings, malleable castings, and aluminum fittings tailored to your exact drawings, specifications, and branded markings.',
    },
    {
      id: '03',
      question: 'What galvanizing and corrosion resistance standards do you adhere to?',
      answer:
        'All pressed steel and malleable iron products are hot-dip galvanized strictly in accordance with ASTM A153 / ASTM A123 standards. We verify coating thickness with calibrated magnetic/eddy-current thickness gauges to guarantee long-term outdoor rust resistance.',
    },
    {
      id: '04',
      question: 'What international shipping terms and destinations do you support?',
      answer:
        'We support flexible international commercial terms including FOB (Kolkata/Haldia Ports), CIF, CFR, and hassle-free DDP (Delivered Duty Paid) directly to your warehouse across the United States, Canada, the European Union, Australia, and the Middle East.',
    },
    {
      id: '05',
      question: 'What quality control and inspection documentation is provided with shipments?',
      answer:
        'As an ISO 9001:2015 certified manufacturer, every container shipment is backed by Material Test Certificates (MTC), hot-dip galvanizing coating thickness reports, tensile strength test data, and detailed dimensional inspection sheets.',
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
                  Buyer &amp; Importer FAQ
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0a1532] leading-[1.18] tracking-tight">
                Common Questions for Global Distributors &amp; Importers.
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal pt-1">
                Everything you need to know about our minimum order quantities, custom tooling lead times, ASTM galvanization standards, and shipping terms.
              </p>
            </div>

            {/* Let's Talk Button matching website button design and hover effect */}
            <div className="pt-2 lg:pt-8">
              <button
                type="button"
                onClick={() => onNavigate?.('contact')}
                className="group/btn bg-[#3B82F6] hover:bg-[#DBEAFE] text-white hover:text-black font-bold pl-6 pr-2.5 py-3 rounded-full inline-flex items-center gap-3 text-sm sm:text-base shadow-xl transition-all transform hover:scale-105 cursor-pointer"
              >
                <span className="transition-colors">Request a Quote</span>
                <div className="w-7 h-7 rounded-full bg-white group-hover/btn:bg-[#3B82F6] text-[#3B82F6] group-hover/btn:text-white flex items-center justify-center shadow-sm shrink-0 group-hover/btn:translate-x-0.5 transition-all">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </button>
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
