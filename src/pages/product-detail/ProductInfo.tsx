import { useState, type FC } from 'react';
import { 
  Star,
  Paperclip, 
  Box, 
  ArrowRight
} from 'lucide-react';
import type { CatalogProduct } from '../../data/companyData';

export interface SizeChartRow {
  code: string;
  size: string;
  pcsPerBag: number | string;
  bagPerPallet: number | string;
  pcsPerPallet: number | string;
}

export interface ProductDetailData {
  title: string;
  description: string;
  image: string;
  alt: string;
  itemNumber: string;
  category: string;
  materialGrade: string;
  finishCoating: string;
  standardPack: string;
  palletPacking: string;
  certification: string;
  exportTerms: string;
  sizeChart?: SizeChartRow[];
  additionalImages?: string[];
}

interface ProductDetailContentProps {
  data?: ProductDetailData;
  product?: CatalogProduct | null;
  onNavigate?: (page: 'home' | 'about' | 'products' | 'case-study' | 'product-detail' | 'contact', product?: CatalogProduct) => void;
}

export const defaultSizeChart: SizeChartRow[] = [
  { code: '350', size: '1 5/8"', pcsPerBag: 25, bagPerPallet: 48, pcsPerPallet: 1200 },
  { code: '370', size: '2"', pcsPerBag: 25, bagPerPallet: 40, pcsPerPallet: 1000 },
  { code: '390', size: '2 1/2"', pcsPerBag: 25, bagPerPallet: 32, pcsPerPallet: 800 },
  { code: '410', size: '3"', pcsPerBag: 20, bagPerPallet: 32, pcsPerPallet: 640 },
];

export const defaultProductDetail: ProductDetailData = {
  title: 'Barbed Arm - 14 GA & 16 GA',
  description:
    'Heavy-duty pressed steel 45-degree barbed arm extension engineered for industrial, commercial, and high-security chain link fencing perimeters. Designed with pre-notched wire capture slots for secure holding of 3 barbed wire strands, high tensile load resistance, and uniform ASTM A153 hot-dip galvanizing.',
  image: '',
  alt: 'Pressed steel barbed arm chain link fence fitting component',
  itemNumber: 'Catalog A25 - Item #1',
  category: 'FITTINGS & ARMS',
  materialGrade: 'Pressed Steel (14 Gauge & 16 Gauge)',
  finishCoating: 'Hot-Dip Galvanized (ASTM A153) / Powder Coated',
  standardPack: '20 - 25 Pcs / Weatherproof Poly Bag',
  palletPacking: 'Strapped Wooden Pallets / Export Master Crates',
  certification: 'ISO 9001:2015 / Certified Mill Test Reports',
  exportTerms: 'FOB Kolkata Port / CIF Worldwide / DDP Available',
  sizeChart: defaultSizeChart,
};

export const ProductInfo: FC<ProductDetailContentProps> = ({
  data = defaultProductDetail,
  product,
  onNavigate,
}) => {
  const sizeChartData = (data.sizeChart && data.sizeChart.length > 0) 
    ? data.sizeChart 
    : (product?.variants?.map((v) => ({
        code: v.code || '-',
        size: v.size,
        pcsPerBag: v.pcsPerBag || v.pcsPerCarton || '-',
        bagPerPallet: v.bagPerPallet || v.cartonPerCrate || '-',
        pcsPerPallet: v.pcsPerPallet || v.pcsPerCrate || '-',
      })) || defaultSizeChart);

  const [selectedSizeIndex, setSelectedSizeIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'description' | 'reviews' | 'company' | 'usage'>('description');

  const totalSizesCount = sizeChartData.length;
  const currentSelectedSize = sizeChartData[selectedSizeIndex] || sizeChartData[0];

  return (
    <div className="w-full bg-white pb-16 lg:pb-24 font-['Outfit',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        
        {/* Breadcrumb Bar */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs sm:text-sm text-slate-500 font-medium flex items-center flex-wrap gap-2">
          <button
            type="button"
            onClick={() => onNavigate?.('home')}
            className="hover:text-[#2563EB] transition-colors cursor-pointer"
          >
            Home
          </button>
          <span className="text-slate-300">/</span>
          <button
            type="button"
            onClick={() => onNavigate?.('products')}
            className="hover:text-[#2563EB] transition-colors cursor-pointer"
          >
            Products
          </button>
          <span className="text-slate-300">/</span>
          <span className="text-slate-600">{data.category || 'Fittings & Arms'}</span>
          <span className="text-slate-300">/</span>
          <span className="text-[#0a1532] font-semibold truncate max-w-[240px] sm:max-w-[360px]">{data.title}</span>
        </nav>

        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start">
          
          {/* LEFT COLUMN: 1:1 Aspect Ratio Edge-to-Edge Image + Bottom Navigation Tabs & Details */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-8">
            {/* 1:1 Aspect Ratio Square Image - Edge-to-Edge with NO overlay tags */}
            <div className="relative w-full aspect-square rounded-2xl bg-[#F8FAFC] border border-slate-200 overflow-hidden shadow-xs">
              <img
                src={data.image}
                alt={data.alt || data.title}
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Bottom Tabs & Details (Directly under Left 1:1 Image) */}
            <div className="pt-2 space-y-6">
              
              {/* Clean Underline Tabs Bar */}
              <div className="flex items-center gap-6 sm:gap-8 border-b border-slate-200 pb-0 text-sm sm:text-base">
                <button
                  type="button"
                  onClick={() => setActiveTab('description')}
                  className={`pb-3 font-semibold transition-all relative whitespace-nowrap cursor-pointer ${
                    activeTab === 'description'
                      ? 'text-[#2563EB] border-b-2 border-[#2563EB]'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Description
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('reviews')}
                  className={`pb-3 font-semibold transition-all relative whitespace-nowrap cursor-pointer ${
                    activeTab === 'reviews'
                      ? 'text-[#2563EB] border-b-2 border-[#2563EB]'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Reviews
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('company')}
                  className={`pb-3 font-semibold transition-all relative whitespace-nowrap cursor-pointer ${
                    activeTab === 'company'
                      ? 'text-[#2563EB] border-b-2 border-[#2563EB]'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Company
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('usage')}
                  className={`pb-3 font-semibold transition-all relative whitespace-nowrap cursor-pointer ${
                    activeTab === 'usage'
                      ? 'text-[#2563EB] border-b-2 border-[#2563EB]'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Usage guide
                </button>
              </div>

              {/* Tab 1: Description Content */}
              {activeTab === 'description' && (
                <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                  <p>
                    {data.description}
                  </p>
                  <p>
                    Manufactured from high-grade structural carbon steel at our Kolkata manufacturing facilities.
                    Each batch undergoes multi-stage inspection including tensile load testing, hot-dip galvanizing coating thickness verification (ASTM A153), and dimensional precision checks.
                  </p>
                </div>
              )}

              {/* Tab 2: Reviews */}
              {activeTab === 'reviews' && (
                <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                  <p>
                    Verified global distributor ratings indicate a 99.4% dimensional compliance rate across 458 container shipments dispatched to North America, Europe, and Australia.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="font-semibold text-xs text-slate-800">Reliable batch galvanizing &amp; prompt delivery</p>
                    <p className="text-xs text-slate-500">Wholesale Fence Supply Partner, Houston TX</p>
                  </div>
                </div>
              )}

              {/* Tab 3: Company */}
              {activeTab === 'company' && (
                <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                  <p>
                    Charu Enterprises is an ISO 9001:2015 certified manufacturer &amp; exporter of chain link fence hardware, pressed steel fittings, and industrial security components based in Kolkata, India.
                  </p>
                  <p>
                    Equipped with automated continuous power presses, progressive stamping tools, and an integrated hot-dip galvanizing plant ensuring complete quality traceability.
                  </p>
                </div>
              )}

              {/* Tab 4: Usage guide */}
              {activeTab === 'usage' && (
                <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                  <p>
                    Slide the barbed arm base securely over the top of the line post or terminal pipe. Secure the top rail through the center hole opening.
                  </p>
                  <p>
                    Thread 3 strands of barbed wire through the outer slots and crimp the retaining ears securely to prevent strand slippage under high tensile strain.
                  </p>
                </div>
              )}

            </div>
          </div>

          {/* RIGHT COLUMN: Follows the exact design from the screenshot */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6">
            
            {/* Product Title & Subtitle */}
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#0a1532] tracking-tight leading-tight">
                {data.title}
              </h1>
              <p className="text-sm text-slate-500 leading-relaxed">
                Precision cold-formed &amp; hot-dip galvanized fence hardware manufactured by Charu Enterprises, Kolkata.
              </p>
            </div>

            {/* 3-Column Key Spec Header Row */}
            <div className="grid grid-cols-3 gap-4 py-3.5 border-y border-slate-100">
              <div className="space-y-1">
                <span className="text-xs text-slate-400 block font-normal">Product ID</span>
                <span className="text-sm font-bold text-[#0a1532] block truncate">{data.itemNumber}</span>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-slate-400 block font-normal">Category</span>
                <span className="text-sm font-bold text-[#2563EB] block truncate">{data.category || 'Fittings & Arms'}</span>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-slate-400 block font-normal">Total Sizes</span>
                <span className="text-sm font-bold text-[#059669] block truncate">{totalSizesCount} Standard Sizes</span>
              </div>
            </div>

            {/* Available Sizes Card Container */}
            <div className="rounded-2xl bg-[#F0F7FF]/80 border border-[#BFDBFE] p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Paperclip className="w-4 h-4 text-[#2563EB] rotate-45" />
                  <h3 className="text-sm sm:text-base font-bold text-[#0a1532]">
                    Available Sizes ({totalSizesCount} Options)
                  </h3>
                </div>
               </div>

              {/* Size Selectable Pills */}
              <div className="flex flex-wrap gap-2.5">
                {sizeChartData.map((row, idx) => {
                  const isSelected = selectedSizeIndex === idx;
                  return (
                    <button
                      key={row.code + idx}
                      type="button"
                      onClick={() => setSelectedSizeIndex(idx)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-colors cursor-pointer flex items-center gap-2 ${
                        isSelected
                          ? 'bg-[#2563EB] border-[#2563EB] text-white shadow-sm'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-slate-50'
                      }`}
                    >
                      <span>{row.size}</span>
                      {row.code && row.code !== '-' && (
                        <span className={`text-[11px] px-1.5 py-0.5 rounded font-mono ${
                          isSelected ? 'bg-[#1D4ED8] text-white' : 'bg-slate-100 text-slate-500'
                        }`}>
                          {row.code}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Selected Size / Code Indicator */}
              <div className="text-xs text-slate-600 flex items-center gap-1.5 pt-1">
                <span>Selected:</span>
                <strong className="text-[#0a1532] font-bold">{currentSelectedSize.size}</strong>
                <span>(Item Code:</span>
                <span className="text-[#0a1532] font-bold">
                  {currentSelectedSize.code}
                </span>
                <span>)</span>
              </div>
            </div>

            {/* Project Size & Packaging Matrix Section */}
            <div className="space-y-3 pt-1">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#0a1532] flex items-center gap-2">
                  <Box className="w-5 h-5 text-[#2563EB]" />
                  <span>Project Size &amp; Packaging Matrix</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Standard bulk packaging specification for {data.itemNumber}
                </p>
              </div>

              {/* Table with Navy Header matching screenshot */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
                <table className="w-full text-center text-xs sm:text-sm border-collapse">
                  <thead className="bg-[#0A1931] text-white text-[11px] sm:text-xs">
                    <tr>
                      <th className="py-3 px-3 font-bold uppercase tracking-wider text-center">ITEM CODE</th>
                      <th className="py-3 px-3 font-bold uppercase tracking-wider text-center">SIZE / OD</th>
                      <th className="py-3 px-3 font-bold uppercase tracking-wider text-center">PCS / BAG</th>
                      <th className="py-3 px-3 font-bold uppercase tracking-wider text-center">BAGS / PALLET</th>
                      <th className="py-3 px-3 font-bold uppercase tracking-wider text-center">TOTAL PCS / PALLET</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {sizeChartData.map((row, idx) => {
                      const isSelected = selectedSizeIndex === idx;
                      return (
                        <tr
                          key={row.code + '-' + idx}
                          onClick={() => setSelectedSizeIndex(idx)}
                          className={`cursor-pointer transition-colors ${
                            isSelected
                              ? 'bg-blue-50/70 font-semibold text-[#1E40AF]'
                              : 'hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <td className="py-3 px-3 text-[#2563EB] font-bold">
                            {row.code}
                          </td>
                          <td className="py-3 px-3 font-bold text-[#2563EB]">
                            {row.size}
                          </td>
                          <td className="py-3 px-3 font-medium text-slate-600">
                            {row.pcsPerBag}
                          </td>
                          <td className="py-3 px-3 font-medium text-slate-600">
                            {row.bagPerPallet}
                          </td>
                          <td className="py-3 px-3 font-bold text-[#0a1532]">
                            {row.pcsPerPallet}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <p className="text-[11px] text-slate-400 italic">
                * Click on any row to highlight. Custom gauge thicknesses and OEM customer stamping available for volume container orders.
              </p>
            </div>

            {/* Bottom Action Button styled matching Hero section button */}
            <div className="pt-2 flex items-center">
              <button
                type="button"
                onClick={() => onNavigate?.('contact')}
                className="group bg-[#3B82F6] hover:bg-[#DBEAFE] text-white hover:text-black font-bold pl-6 pr-2.5 py-3 rounded-full flex items-center justify-center gap-3 text-sm sm:text-base shadow-xl transition-all transform hover:scale-105 cursor-pointer"
              >
                <span className="transition-colors whitespace-nowrap">Request Quotation</span>
                <div className="w-7 h-7 rounded-full bg-white group-hover:bg-[#3B82F6] flex items-center justify-center text-[#3B82F6] group-hover:text-white shadow-sm shrink-0 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductInfo;
