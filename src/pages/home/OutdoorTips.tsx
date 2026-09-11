import { useState, type FC } from 'react';
import { ArrowRight, X, Clock, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TipArticle {
  id: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
  date: string;
  category: string;
  content: {
    intro: string;
    points: { title: string; desc: string }[];
    conclusion: string;
  };
}

export const OutdoorTips: FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<TipArticle | null>(null);

  const articles: TipArticle[] = [
    {
      id: 'plan-deck',
      title: 'How to Plan a Deck That Fits Your Backyard',
      description:
        'A simple guide to choosing the right deck size, layout, materials, and features before starting your outdoor project.',
      image:
        'https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=900&q=80',
      readTime: '4 min read',
      date: 'Planning Guide',
      category: 'Design & Layout',
      content: {
        intro:
          'Before breaking ground on your new deck, taking time to map out sun exposure, yard topography, and how your family uses outdoor space will save thousands in unexpected alterations.',
        points: [
          {
            title: 'Analyze Yard Circulation & Access',
            desc: 'Ensure seamless transition between indoor kitchens and outdoor dining zones with at least 36 to 48 inches of unobstructed walkway space.',
          },
          {
            title: 'Define Purpose Zones',
            desc: 'Separate lounge furniture, outdoor grilling cooking stations, and dining tables to create dedicated, comfortable functional areas.',
          },
          {
            title: 'Factor in Elevation & Drainage',
            desc: 'Multi-level deck steps help transition steep slopes smoothly while preserving yard irrigation and natural water runoff pathways.',
          },
        ],
        conclusion:
          'Our team provides complimentary on-site measurements and 3D architectural renders so you can visualize your deck before building starts.',
      },
    },
    {
      id: 'wood-vs-composite',
      title: 'Wood vs Composite Decking: What to Choose?',
      description:
        'Learn the key differences between wood and composite decking so you can choose the best option for your home.',
      image:
        'https://images.unsplash.com/photo-1595878715977-2e8f8df18ea8?auto=format&fit=crop&w=900&q=80',
      readTime: '5 min read',
      date: 'Material Comparison',
      category: 'Materials Guide',
      content: {
        intro:
          'Choosing between traditional pressure-treated lumber and modern capped composite boards is one of the most critical decisions for longevity, aesthetic appeal, and maintenance.',
        points: [
          {
            title: 'Maintenance & Upkeep',
            desc: 'Pressure-treated wood requires annual power washing, staining, and sealing every 2–3 years. Composite boards only need mild soap and warm water rinsing.',
          },
          {
            title: 'Lifespan & Warranties',
            desc: 'Standard timber decks average 10–15 years with active care, whereas premium composites come with 25–50 year stain, fade, and structural warranties.',
          },
          {
            title: 'Cost vs Value Over Time',
            desc: 'While natural wood has a lower upfront installation cost, composite decking typically pays for itself within 5–7 years by eliminating ongoing staining and repair expenses.',
          },
        ],
        conclusion:
          'We supply physical samples of both premium cedar, treated pine, and leading composite lines during your initial design consultation.',
      },
    },
    {
      id: 'deck-repairs',
      title: 'Signs Your Old Deck Needs Repair or Replacement',
      description:
        'Find out when worn boards, loose railings, cracked stairs, or weak spots mean your deck needs professional attention.',
      image:
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80',
      readTime: '3 min read',
      date: 'Safety & Inspection',
      category: 'Maintenance',
      content: {
        intro:
          'Structural deck failures can be prevented through proactive seasonal inspections. Here is what to check to keep your outdoor living space safe and sturdy.',
        points: [
          {
            title: 'Wobbly Railings or Loose Posts',
            desc: 'Perimeter railings must withstand 200 lbs of outward force. Any noticeable play or wobble at the post base warrants immediate structural reinforcement.',
          },
          {
            title: 'Ledger Board & Flashing Integrity',
            desc: 'The connection between your deck and the house foundation is crucial. Check for water infiltration, rusted lag screws, or deteriorating ledger flashing.',
          },
          {
            title: 'Soft, Spongy, or Decaying Wood',
            desc: 'Test joists and ground posts with a screwdriver. If the wood gives way easily or shows signs of dry rot, structural replacement is recommended.',
          },
        ],
        conclusion:
          'Schedule a comprehensive 15-point deck safety inspection with our licensed master carpenters to ensure peace of mind for your family.',
      },
    },
  ];

  return (
    <section
      id="outdoor-tips"
      className="w-full bg-white py-16 sm:py-20 lg:py-24 font-['Outfit',sans-serif] border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 lg:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block" />
            <span className="text-[#2563EB] text-xs sm:text-sm font-bold tracking-tight uppercase">
              Outdoor Tips
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0a1532] leading-[1.18] tracking-tight">
            Helpful Content for Planning,
            <br className="hidden sm:inline" /> Repair, and Maintenance.
          </h2>
        </div>

        {/* 3 Articles Grid matching reference mockup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group bg-[#DBEAFE] hover:bg-[#bfdbfe]/80 rounded-[22px] sm:rounded-[24px] border border-blue-200/80 hover:border-[#3B82F6]/60 shadow-sm hover:shadow-xl transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
            >
              <div>
                {/* Nested Image with Rounded Corners */}
                <div className="relative w-full aspect-[4/3] rounded-[16px] sm:rounded-[18px] overflow-hidden bg-blue-100 mb-5">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-[19px] font-bold text-[#0a1532] group-hover:text-[#1d4ed8] transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal line-clamp-3">
                    {article.description}
                  </p>
                </div>
              </div>

              {/* Read Article Link in Website Brand Blue */}
              <div className="pt-5 flex items-center text-[#1d4ed8] group-hover:text-[#0a1532] font-bold text-xs sm:text-sm gap-2 transition-colors">
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300 stroke-[2.5]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-2xl bg-white rounded-[24px] shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col border border-slate-200"
            >
              {/* Header Image with close button */}
              <div className="relative h-52 sm:h-64 w-full shrink-0">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1532]/80 via-black/30 to-black/20" />

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                  <div className="flex items-center gap-3 text-xs text-blue-200 font-medium">
                    <span className="bg-[#3B82F6] text-white px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                      {selectedArticle.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {selectedArticle.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold leading-tight drop-shadow-sm">
                    {selectedArticle.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body Scroll Area */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p className="font-medium text-slate-800 text-base sm:text-lg leading-relaxed">
                  {selectedArticle.content.intro}
                </p>

                <div className="space-y-4 pt-2">
                  {selectedArticle.content.points.map((pt, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#3B82F6] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-[#0a1532] text-sm sm:text-base mb-1">
                          {pt.title}
                        </h4>
                        <p className="text-slate-600 text-xs sm:text-sm">{pt.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-[#DBEAFE]/40 border border-[#3B82F6]/30 text-[#0a1532] text-xs sm:text-sm font-medium">
                  {selectedArticle.content.conclusion}
                </div>

                {/* Modal Footer CTA */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
                  <span className="text-xs text-slate-500">Need personal advice on your backyard?</span>
                  <a
                    href="#contact"
                    onClick={() => setSelectedArticle(null)}
                    className="w-full sm:w-auto bg-[#3B82F6] hover:bg-[#0a1532] text-white font-bold px-6 py-2.5 rounded-full text-xs sm:text-sm text-center shadow-md transition-colors"
                  >
                    Request Free Consultation
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
