import { useState, type FC } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATALOG_PRODUCTS, type CatalogProduct } from '../../data/companyData';

interface ProjectsSectionProps {
  onNavigate?: (page: 'home' | 'about' | 'services' | 'projects' | 'project-detail' | 'contact') => void;
}

type ProductCategory = 'All' | 'Fittings & Arms' | 'Bands & Clamps' | 'Hinges & Hardware' | 'Caps & Closures' | 'Gate & Track';

export const ProjectsSection: FC<ProjectsSectionProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('All');

  const categories: { label: string; value: ProductCategory }[] = [
    { label: 'All Catalog Items', value: 'All' },
    { label: 'Fittings & Arms', value: 'Fittings & Arms' },
    { label: 'Bands & Clamps', value: 'Bands & Clamps' },
    { label: 'Hinges & Hardware', value: 'Hinges & Hardware' },
    { label: 'Caps & Closures', value: 'Caps & Closures' },
    { label: 'Gate & Track', value: 'Gate & Track' },
  ];

  const filteredProducts =
    activeCategory === 'All'
      ? CATALOG_PRODUCTS.slice(0, 18)
      : CATALOG_PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 font-['Outfit',sans-serif] border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center mb-10 sm:mb-12">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block" />
            <span className="text-[#3B82F6] text-xs sm:text-sm font-bold tracking-tight uppercase">
              Official Catalog A25
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0a1532] leading-[1.15] tracking-tight mb-3 sm:mb-4">
            Industrial Chain Link &amp; Fence Fittings.
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-2xl">
            Over 150+ standard and custom-stamped fittings manufactured to ASTM &amp; ISO 9001:2015 specifications with factory direct container export.
          </p>
        </div>

        {/* Category Filter Pills Bar with Website Theme Colors */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12 sm:mb-14">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => setActiveCategory(cat.value)}
                className={`px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#3B82F6] text-white shadow-lg shadow-blue-500/25 scale-105 ring-2 ring-[#3B82F6]/30'
                    : 'bg-[#EEF2F6] hover:bg-[#DBEAFE]/70 text-slate-700 hover:text-[#0a1532]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {filteredProducts.map((product: CatalogProduct) => (
            <div
              key={product.id}
              onClick={() => onNavigate?.('project-detail')}
              className="group relative rounded-[28px] sm:rounded-[32px] overflow-hidden aspect-square w-full bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between p-4 sm:p-5 cursor-pointer border border-slate-200/80 select-none"
            >
              {/* Background Product Photo */}
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 pointer-events-none"
              />

              {/* Gradient Overlay for subtle depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 group-hover:from-black/70 transition-colors duration-300 pointer-events-none" />

              {/* Top Row: Floating Theme Action Badge matching Home Page */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#0a1532]/85 backdrop-blur-md text-white text-xs font-semibold tracking-wide border border-white/20">
                  Item #{product.itemNumber} • {product.material}
                </span>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md text-[#0a1532] flex items-center justify-center shadow-xl border border-white/80 group-hover:scale-110 group-hover:bg-[#3B82F6] group-hover:text-white group-hover:border-[#3B82F6] transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Bottom Floating White Information Card matching Home Page */}
              <div className="relative z-10 bg-white rounded-[20px] sm:rounded-[22px] p-4 sm:p-5 shadow-xl border border-white/90 space-y-1.5 transform transition-all duration-300 group-hover:-translate-y-1">
                <h3 className="text-base sm:text-[17px] font-bold text-[#0a1532] tracking-tight leading-snug group-hover:text-[#3B82F6] transition-colors">
                  {product.name}
                </h3>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-medium line-clamp-2">
                  {product.description}
                </p>
                <div className="pt-1 flex items-center justify-between text-[11px] text-slate-500 font-semibold border-t border-slate-100">
                  <span className="text-[#2563EB]">{product.variants.length} Size Variants</span>
                  <span>{product.finish}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
