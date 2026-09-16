import { useState, useEffect, useRef, useCallback, type FC } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { CATALOG_PRODUCTS, type CatalogProduct } from '../../data/companyData';

const productImages = import.meta.glob('../../assets/product-images/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

function get_product_image(itemNumber: number): string {
  const num = String(itemNumber);
  for (const [path, url] of Object.entries(productImages)) {
    const fileName = path.split('/').pop()?.toLowerCase() || '';
    if (fileName.startsWith(num + '.') || fileName.startsWith(num + ' ') || fileName.startsWith(num + '  ')) {
      return url as string;
    }
  }
  return '';
}

interface OtherProductsProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'case-study' | 'product-detail' | 'contact', product?: CatalogProduct) => void;
  currentProductId?: number;
}

export const ProductStoryTransformation: FC<OtherProductsProps> = ({ onNavigate, currentProductId }) => {
  const displayProducts = CATALOG_PRODUCTS.filter((p) => p.itemNumber !== currentProductId);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const totalProducts = displayProducts.length;

  const scrollToCard = useCallback((index: number) => {
    const container = scrollContainerRef.current;
    const targetCard = cardRefs.current[index];
    if (container && targetCard) {
      const containerLeft = container.getBoundingClientRect().left;
      const cardLeft = targetCard.getBoundingClientRect().left;
      const scrollOffset = cardLeft - containerLeft + container.scrollLeft;

      container.scrollTo({
        left: scrollOffset,
        behavior: 'smooth',
      });
    }
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const nextIndex = (prev + 1) % totalProducts;
      scrollToCard(nextIndex);
      return nextIndex;
    });
  }, [totalProducts, scrollToCard]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => {
      const prevIndex = (prev - 1 + totalProducts) % totalProducts;
      scrollToCard(prevIndex);
      return prevIndex;
    });
  }, [totalProducts, scrollToCard]);

  const handleSelectIndex = (index: number) => {
    setCurrentIndex(index);
    scrollToCard(index);
  };

  // Automatically move one by one every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Sync scroll on manual user scroll
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    
    let closestIndex = 0;
    let minDiff = Infinity;
    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      const diff = Math.abs(card.offsetLeft - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });
    if (closestIndex !== currentIndex) {
      setCurrentIndex(closestIndex);
    }
  };

  const handleCardClick = (product: CatalogProduct) => {
    if (onNavigate) {
      onNavigate('product-detail', product);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-[#F4F7FB]/70 py-16 sm:py-20 lg:py-24 font-['Outfit',sans-serif] border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching website theme */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3 sm:space-y-4">
          {/* Eyebrow badge matching website style */}
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block" />
            <span className="text-[#3B82F6] text-xs sm:text-sm font-bold tracking-wide uppercase">
              Explore More Products
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0a1532] tracking-tight leading-[1.18]">
            Explore Other Products in Our Catalog
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base md:text-[17px] leading-relaxed font-normal">
            From steel bands and rail clamps to gate hinges and post caps, explore our full product range.
          </p>
        </div>

        {/* Carousel Viewport Container */}
        <div
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Smooth Scrollable Sliding Track */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-4 sm:gap-5 lg:gap-6 overflow-x-auto scroll-smooth py-3 no-scrollbar px-1"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {displayProducts.map((product, index) => {
              const imgSrc = get_product_image(product.itemNumber) || product.image;

              return (
                <div
                  key={product.id}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  onClick={() => handleCardClick(product)}
                  className="group bg-white rounded-[22px] sm:rounded-[24px] p-2.5 sm:p-3 border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_24px_rgba(10,21,50,0.1)] transition-all duration-300 flex flex-col justify-between cursor-pointer select-none relative hover:-translate-y-1 w-[260px] sm:w-[280px] md:w-[300px] shrink-0"
                >
                  {/* Clean 1:1 Aspect Ratio Image Container */}
                  <div className="relative w-full aspect-square bg-[#f1f4f8] rounded-[16px] sm:rounded-[18px] overflow-hidden border border-slate-100">
                    <img
                      src={imgSrc}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Product Details Section matching exact product card design */}
                  <div className="pt-2.5 px-0.5 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Category / Item # Label */}
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="text-[11px] font-bold text-[#2563EB] tracking-wider uppercase truncate">
                          {product.category}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-400 shrink-0">
                          #{product.itemNumber}
                        </span>
                      </div>

                      {/* Product Name Title */}
                      <h3 className="text-sm sm:text-[15px] font-bold text-[#0a1532] leading-snug line-clamp-1 group-hover:text-[#2563EB] transition-colors mb-1">
                        {product.name}
                      </h3>

                      {/* Number of Sizes Available */}
                      <p className="text-xs sm:text-sm font-semibold text-slate-600 line-clamp-1 mb-3">
                        {product.variants && product.variants.length > 0
                          ? `${product.variants.length} ${product.variants.length === 1 ? 'Size' : 'Sizes'} Available`
                          : '1 Standard Size'}
                      </p>
                    </div>

                    {/* Action Button matching Website Buttons */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(product);
                      }}
                      className="group/btn w-full bg-[#3B82F6] hover:bg-[#DBEAFE] text-white hover:text-black font-bold pl-4 pr-1.5 py-2 rounded-full flex items-center justify-between text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer"
                    >
                      <span className="transition-colors">View Details</span>
                      <div className="w-6 h-6 rounded-full bg-white group-hover/btn:bg-[#3B82F6] flex items-center justify-center text-[#3B82F6] group-hover/btn:text-white shadow-sm shrink-0 transition-colors">
                        <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] group-hover/btn:translate-x-0.5 transition-transform" />
                      </div>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Bottom Control Bar: Prev Button, Indicators, Next Button */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-4 sm:gap-6">
          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous product"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#0a1532] hover:bg-[#3B82F6] hover:text-white shadow-md hover:shadow-xl border border-slate-200/90 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shrink-0"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
          </button>

          {/* Carousel Pagination Indicator Dots (show max 8 dots) */}
          <div className="flex items-center gap-2">
            {displayProducts.slice(0, Math.min(8, displayProducts.length)).map((_, index) => {
              const isActive = (currentIndex % Math.min(8, displayProducts.length)) === index;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSelectIndex(index)}
                  aria-label={`Go to product slide ${index + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    isActive
                      ? 'w-7 h-2.5 bg-[#3B82F6] shadow-sm'
                      : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              );
            })}
          </div>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next product"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#0a1532] hover:bg-[#3B82F6] hover:text-white shadow-md hover:shadow-xl border border-slate-200/90 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shrink-0"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProductStoryTransformation;
