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
      id: 'astm-galvanizing',
      title: 'ASTM A153 Hot-Dip Galvanizing vs Electro-Plating',
      description:
        'Why hot-dip galvanizing per ASTM A153 protects commercial fences from rust for over 30 years.',
      image: '',
      readTime: '5 min read',
      date: 'Engineering Guide',
      category: 'Metallurgy & Coatings',
      content: {
        intro:
          'Rust is the biggest cause of fence hardware damage. Understanding hot-dip galvanizing helps you choose fittings that last.',
        points: [
          {
            title: 'Molten Zinc Bond',
            desc: 'Hot-dip galvanizing dips clean steel into 450°C molten zinc. This forms a hard alloy layer that does not peel or chip.',
          },
          {
            title: 'ASTM A153 Thickness',
            desc: 'ASTM A153 requires a thick zinc coat (over 85 microns), giving 30+ years of rust protection in harsh outdoor weather.',
          },
          {
            title: 'Self-Healing Action',
            desc: 'If scratched during installation, zinc naturally protects the exposed steel from rust.',
          },
        ],
        conclusion:
          'Charu Enterprises runs in-house galvanizing lines with automated heat control and thickness testing for every batch.',
      },
    },
    {
      id: 'gate-hinge-selection',
      title: 'Choosing the Right Hinges for Industrial Gates',
      description:
        'A simple guide to picking 180° offset hinges, box hinges, and heavy-duty gate hardware.',
      image: '',
      readTime: '4 min read',
      date: 'Specification Guide',
      category: 'Hardware Sizing',
      content: {
        intro:
          'Industrial gates open often and face strong winds. Picking the right malleable iron or pressed steel hinges stops gate sagging.',
        points: [
          {
            title: '180° Offset Hinges',
            desc: 'Allows gates to swing fully open flat against the fence line without getting stuck.',
          },
          {
            title: 'Box Hinges with Grease Fittings',
            desc: 'Built for heavy automated gates. Easy to lubricate for smooth swinging and long life.',
          },
          {
            title: 'Matching Pipe Sizes',
            desc: 'Match gate frame pipe size (1-5/8" to 2") with post size (2-3/8" to 8-5/8") for strong, tight clamping.',
          },
        ],
        conclusion:
          'Check Catalog A25 from Charu Enterprises for full size charts, diagrams, and load ratings.',
      },
    },
    {
      id: 'tool-and-die-speed',
      title: 'Sheet Metal Fabrication as per Product Specifications',
      description:
        'How we manufacture and fabricate any sheet metal item according to your technical drawings, samples, and product specifications.',
      image: '',
      readTime: '6 min read',
      date: 'Manufacturing Insights',
      category: 'Sheet Metal Fabrication',
      content: {
        intro:
          'While we do not provide custom design work, our factory can manufacture and fabricate any sheet metal item as per your required product specifications, samples, or drawings.',
        points: [
          {
            title: 'Sheet Metal Stamping & Forming',
            desc: 'Our high-tonnage mechanical power presses and tooling fabricate any sheet metal item across our fence hardware and fittings range.',
          },
          {
            title: 'Manufacture as per Samples & Drawings',
            desc: 'Provide your dimensions, physical samples, or technical specifications, and we fabricate the exact sheet metal parts with uniform precision.',
          },
          {
            title: 'In-House Hot-Dip Galvanizing & Coating',
            desc: 'Every sheet metal fabrication item is hot-dip galvanized to ASTM A153 or powder coated for maximum rust defense and long outdoor durability.',
          },
        ],
        conclusion:
          'Send your product specifications, sample parts, or required dimensions to Charu Enterprises for direct factory pricing.',
      },
    },
  ];

  return (
    <section
      id="outdoor-tips"
      className="w-full bg-white py-16 sm:py-20 lg:py-24 font-['Outfit',sans-serif]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 lg:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block" />
            <span className="text-[#2563EB] text-xs sm:text-sm font-bold tracking-tight uppercase">
              Technical Guides
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0a1532] leading-[1.18] tracking-tight">
            Standards &amp; Manufacturing
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
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card Title & Description */}
                <div className="space-y-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#3B82F6] text-white text-[11px] font-bold uppercase tracking-wider">
                    {article.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0a1532] group-hover:text-[#1E40AF] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-slate-700 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {article.description}
                  </p>
                </div>
              </div>

              {/* Card Footer with Read More CTA */}
              <div className="mt-5 pt-4 border-t border-blue-200/60 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#3B82F6]" />
                  {article.readTime}
                </span>
                <span className="text-xs font-bold text-[#1E40AF] group-hover:text-[#3B82F6] flex items-center gap-1">
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog for Article Details */}
      <AnimatePresence>
        {selectedArticle && (
          <div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden my-8 border border-slate-200 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="relative p-6 sm:p-8 bg-[#0a1532] text-white shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <span className="text-xs font-bold tracking-widest text-[#f0c75e] uppercase">
                  {selectedArticle.category} • {selectedArticle.readTime}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-2 pr-8 leading-snug">
                  {selectedArticle.title}
                </h3>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700">
                <p className="text-base sm:text-lg leading-relaxed text-[#0a1532] font-medium border-l-4 border-[#3B82F6] pl-4 py-1">
                  {selectedArticle.content.intro}
                </p>

                <div className="space-y-4 pt-2">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                    Key Technical Considerations
                  </h4>
                  {selectedArticle.content.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-5 h-5 text-[#3B82F6] shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-bold text-[#0a1532] text-sm sm:text-base">
                          {pt.title}
                        </h5>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                          {pt.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#DBEAFE] p-4 sm:p-5 rounded-2xl border border-blue-200">
                  <p className="text-xs sm:text-sm text-[#0a1532] font-semibold leading-relaxed">
                    💡 <span className="font-bold">Charu Enterprises Advantage:</span> {selectedArticle.content.conclusion}
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex justify-end shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2.5 rounded-full bg-[#3B82F6] hover:bg-[#0a1532] text-white font-bold text-sm shadow-md transition-colors cursor-pointer"
                >
                  Close Guide
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OutdoorTips;
