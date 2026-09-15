import type { FC } from 'react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { ProductDetailContent, defaultProductDetail, type ProductDetailData } from './ProductDetailContent';
import { ProductImprovements } from './ProductImprovements';
import { BackyardCTA } from '../home/BackyardCTA';
import { ProductStoryTransformation } from './ProductStoryTransformation';
import type { CatalogProduct } from '../../data/companyData';

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

function catalogToDetail(product: CatalogProduct): ProductDetailData {
  const imgSrc = get_product_image(product.itemNumber) || product.image;
  return {
    title: product.name,
    description: product.description,
    image: imgSrc,
    alt: product.name,
    itemNumber: `Catalog A25 - Item #${product.itemNumber}`,
    category: product.category,
    materialGrade: product.material,
    finishCoating: product.finish,
    standardPack: product.variants[0]?.pcsPerBag ? `${product.variants[0].pcsPerBag} Pcs / Bag` : 'Custom Packing',
    palletPacking: product.variants[0]?.bagPerPallet ? `${product.variants[0].bagPerPallet} Bags / Pallet` : 'Export Master Crates',
    certification: 'ISO 9001:2015 / Certified Mill Test Reports',
    exportTerms: 'FOB Kolkata Port / CIF Worldwide / DDP Available',
    sizeChart: product.variants.map((v) => ({
      code: v.code || '-',
      size: v.size,
      pcsPerBag: v.pcsPerBag || v.pcsPerCarton || '-',
      bagPerPallet: v.bagPerPallet || v.cartonPerCrate || '-',
      pcsPerPallet: v.pcsPerPallet || v.pcsPerCrate || '-',
    })),
  };
}

interface ProductDetailPageProps {
  product?: CatalogProduct | null;
  data?: ProductDetailData;
  onNavigate?: (page: 'home' | 'about' | 'products' | 'case-study' | 'product-detail' | 'contact', product?: CatalogProduct) => void;
}

export const ProductDetailPage: FC<ProductDetailPageProps> = ({ product, data, onNavigate }) => {
  const detailData = product ? catalogToDetail(product) : (data || defaultProductDetail);

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-[#3B82F6] selection:text-white font-['Outfit',sans-serif]">
      {/* 1. Navbar */}
      <Navbar currentPage="product-detail" onNavigate={onNavigate} />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col pt-24 sm:pt-28 lg:pt-32 bg-white">
        {/* Exact Product Detail Showcase matching the design layout */}
        <ProductDetailContent data={detailData} product={product} onNavigate={onNavigate} />

        {/* Quality Assurance / Manufacturing Standards */}
        <ProductImprovements />

        {/* Call to Action for Factory Direct RFQ */}
        <BackyardCTA onNavigate={onNavigate} />

        {/* Other Products Section / Interactive Carousel */}
        <ProductStoryTransformation onNavigate={onNavigate} currentProductId={product?.itemNumber || 1} />
      </main>

      {/* 7. Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default ProductDetailPage;
