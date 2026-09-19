import type { FC } from 'react';
import { ArrowRight } from 'lucide-react';
import { type CatalogProduct } from '../../data/companyData';
import { getProductImage } from '../../data/productImages';
import { productSlug } from '../../App';
import { DraggableMarquee } from '../../components/common/DraggableMarquee';
import { featuredProducts } from '../../data/featuredProducts';

interface ServicesGridProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'application' | 'product-detail' | 'contact', product?: CatalogProduct) => void;
}

export const ProductMarquee: FC<ServicesGridProps> = ({ onNavigate }) => {
  const marqueeItems = [
    ...featuredProducts,
    ...featuredProducts,
    ...featuredProducts,
    ...featuredProducts,
  ];

  return (
    <section id="products" className="w-full bg-[#DBEAFE] py-12 sm:py-16 md:py-20 lg:py-24 font-['Outfit',sans-serif] overflow-hidden border-b border-blue-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 sm:mb-10 md:mb-12 lg:mb-14 items-start">
          {/* Left Column: Eyebrow + Big Headline */}
          <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block shrink-0 self-start mt-0.5 sm:mt-1" />
              <span className="text-[#2563EB] text-xs sm:text-sm md:text-base font-bold tracking-tight uppercase">
                Product Range
              </span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-[40px] lg:text-[44px] font-bold text-[#0a1532] leading-[1.18] tracking-tight">
              Fittings &amp; Fabrication
            </h2>
          </div>

          {/* Right Column: Paragraph + Blue CTA Button */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-3.5 sm:space-y-4 pt-1">
            <p className="text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed max-w-md font-medium">
              Galvanized steel, malleable iron, and custom sheet metal fabrication made to your exact specifications.
            </p>

            <button
              type="button"
              onClick={() => onNavigate?.('products')}
              className="group/btn w-fit bg-[#3B82F6] hover:bg-[#DBEAFE] text-white hover:text-black font-bold pl-5 sm:pl-6 pr-2.5 py-2.5 sm:py-3 rounded-full inline-flex items-center gap-3 text-xs sm:text-sm md:text-base shadow-xl transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              <span className="transition-colors">View All Products</span>
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white group-hover/btn:bg-[#3B82F6] text-[#3B82F6] group-hover/btn:text-white flex items-center justify-center shadow-sm shrink-0 group-hover/btn:translate-x-0.5 transition-all">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Marquee Container - Full Width Draggable */}
      <DraggableMarquee speed={0.75} pauseOnHover={true}>
        {marqueeItems.map((product, index) => {
          const imgSrc = getProductImage(product.itemNumber) || product.image;
          return (
            <a
              key={index}
              href={`/products/${productSlug(product)}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.('product-detail', product);
              }}
              className="group relative rounded-[22px] xs:rounded-[26px] sm:rounded-[30px] overflow-hidden aspect-square w-[240px] xs:w-[270px] sm:w-[300px] md:w-[340px] lg:w-[370px] xl:w-[380px] shrink-0 bg-[#071128] flex flex-col justify-between p-4 sm:p-5 md:p-6 transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-2xl cursor-pointer select-none border border-slate-200/60"
            >
              {/* Card Image */}
              <img
                src={imgSrc}
                alt={product.name}
                loading="lazy"
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover object-center opacity-100 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071128]/95 via-[#071128]/40 via-50% to-[#071128]/10 pointer-events-none" />

              {/* Top-Right Cutout Notch with Concave Fillets */}
              <div className="absolute top-0 right-0 w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] md:w-[72px] md:h-[72px] bg-[#DBEAFE] rounded-bl-[20px] sm:rounded-bl-[22px] md:rounded-bl-[26px] pointer-events-none z-20 flex items-center justify-center">
                <div className="absolute top-0 -left-4 w-4 h-4 overflow-hidden pointer-events-none">
                  <div className="w-8 h-8 rounded-tr-[18px] shadow-[8px_-8px_0_0_#DBEAFE]" />
                </div>
                <div className="absolute -bottom-4 right-0 w-4 h-4 overflow-hidden pointer-events-none">
                  <div className="w-8 h-8 rounded-tr-[18px] shadow-[8px_-8px_0_0_#DBEAFE]" />
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white group-hover:bg-[#3B82F6] text-[#0a1532] group-hover:text-white flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105 pointer-events-auto border border-blue-200">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 stroke-[2] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              {/* Top spacer */}
              <div />

              {/* Bottom Content Area */}
              <div className="relative z-10 space-y-1 sm:space-y-1.5 pointer-events-none">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-sm mb-1.5 sm:mb-2">
                  <svg
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    <path d="m3 21 6.5-6.5" />
                    <path d="M18.5 5.5 21 3" />
                  </svg>
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight leading-snug drop-shadow-sm">
                  {product.name}
                </h3>

                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-medium max-w-sm drop-shadow-sm">
                  {product.category} • {product.variants && product.variants.length > 0
                    ? `${product.variants.length} ${product.variants.length === 1 ? 'Size' : 'Sizes'} Available`
                    : '1 Standard Size'}
                </p>
              </div>
            </a>
          );
        })}
      </DraggableMarquee>
    </section>
  );
};

export default ProductMarquee;
