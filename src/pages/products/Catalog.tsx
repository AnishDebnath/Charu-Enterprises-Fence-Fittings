import { useState, type FC } from 'react';
import { Search, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CATALOG_PRODUCTS, type CatalogProduct } from '../../data/companyData';
import { getProductImage } from '../../data/productImages';
import { productSlug } from '../../App';

interface ProductsShowcaseProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'application' | 'product-detail' | 'contact', product?: CatalogProduct) => void;
}

type ProductCategory = 'All' | 'Fittings & Arms' | 'Bands & Clamps' | 'Hinges & Hardware' | 'Caps & Closures' | 'Gate & Track' | 'Tension & Fasteners';

export const ProductGrid: FC<ProductsShowcaseProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: { label: string; value: ProductCategory }[] = [
    { label: 'All Products', value: 'All' },
    { label: 'Fittings & Arms', value: 'Fittings & Arms' },
    { label: 'Bands & Clamps', value: 'Bands & Clamps' },
    { label: 'Hinges & Hardware', value: 'Hinges & Hardware' },
    { label: 'Caps & Closures', value: 'Caps & Closures' },
    { label: 'Gate & Track', value: 'Gate & Track' },
    { label: 'Tension & Fasteners', value: 'Tension & Fasteners' },
  ];

  const filteredProducts = CATALOG_PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.material.toLowerCase().includes(query) ||
      String(product.itemNumber).includes(query) ||
      product.description.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="w-full bg-[#f8fafc] py-16 sm:py-20 lg:py-24 font-['Outfit',sans-serif] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center mb-10 sm:mb-14">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block" />
            <span className="text-[#2563EB] text-xs sm:text-sm font-bold tracking-wide uppercase">
              Product Catalog
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0a1532] leading-[1.15] tracking-tight mb-3 sm:mb-4">
            Engineered Fence Fittings &amp; Hardware
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-2xl">
            Galvanized pressed steel, malleable iron, and custom sheet metal fence fittings for worldwide distribution.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-12 space-y-5">
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, item #, or material..."
              className="w-full pl-11 pr-4 py-3.5 bg-white rounded-full border border-slate-200/90 text-slate-800 placeholder-slate-400 text-sm sm:text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 focus:border-[#2563EB] transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-semibold text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
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

          {/* Results Count & Quick Stats */}
          <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 px-2 pt-1 border-t border-slate-200/60">
            <span className="font-medium">
              Showing <strong className="text-[#0a1532]">{filteredProducts.length}</strong> of {CATALOG_PRODUCTS.length} products
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-600 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              ISO 9001:2015 &amp; ASTM Compliant
            </span>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 max-w-lg mx-auto shadow-sm">
            <div className="w-14 h-14 mx-auto rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0a1532] mb-1">No matching products found</h3>
            <p className="text-slate-500 text-sm mb-4">Try adjusting your search terms or category filter to explore the full catalog.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="px-5 py-2.5 rounded-full bg-[#0a1532] text-white text-sm font-semibold hover:bg-[#1d2b4f] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {filteredProducts.map((product: CatalogProduct) => {
              const imgSrc = getProductImage(product.itemNumber) || product.image;

              return (
                <a
                  key={product.id}
                  href={`/products/${productSlug(product)}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('product-detail', product);
                  }}
                  className="group bg-white rounded-xl sm:rounded-[22px] lg:rounded-[24px] p-2 sm:p-3 border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_24px_rgba(10,21,50,0.1)] transition-all duration-300 flex flex-col justify-between cursor-pointer select-none relative hover:-translate-y-1"
                >
                  {/* Clean 1:1 Aspect Ratio Image Container filling the frame */}
                  <div className="relative w-full aspect-square bg-[#f1f4f8] rounded-lg sm:rounded-[16px] lg:rounded-[18px] overflow-hidden border border-slate-100">
                    <img
                      src={imgSrc}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Product Details Section */}
                  <div className="pt-2 sm:pt-2.5 px-0.5 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Category / Item # Label */}
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="text-[10px] sm:text-[11px] font-bold text-[#2563EB] tracking-wider uppercase truncate">
                          {product.category}
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 shrink-0">
                          #{product.itemNumber}
                        </span>
                      </div>

                      {/* Product Name Title */}
                      <h3 className="text-xs sm:text-sm md:text-[15px] font-bold text-[#0a1532] leading-snug line-clamp-1 group-hover:text-[#2563EB] transition-colors mb-0.5 sm:mb-1">
                        {product.name}
                      </h3>

                      {/* Number of Sizes */}
                      <p className="text-[11px] sm:text-xs md:text-sm font-semibold text-slate-600 line-clamp-1 mb-2 sm:mb-3">
                        {product.variants.length > 0
                          ? `${product.variants.length} ${product.variants.length === 1 ? 'Size' : 'Sizes'} Available`
                          : '1 Standard Size'}
                      </p>
                    </div>

                    {/* Action Button - Full Width */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onNavigate?.('product-detail', product);
                      }}
                      className="group/btn w-full bg-[#3B82F6] hover:bg-[#DBEAFE] text-white hover:text-black font-bold pl-2.5 sm:pl-4 pr-1.5 py-1.5 sm:py-2 rounded-full flex items-center justify-between gap-1 text-[11px] sm:text-xs md:text-sm transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98] cursor-pointer whitespace-nowrap"
                    >
                      <span className="transition-colors truncate">View Details</span>
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white group-hover/btn:bg-[#3B82F6] flex items-center justify-center text-[#3B82F6] group-hover/btn:text-white shadow-sm shrink-0 transition-colors">
                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5] group-hover/btn:translate-x-0.5 transition-transform" />
                      </div>
                    </button>
                  </div>
                </a>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

export default ProductGrid;

