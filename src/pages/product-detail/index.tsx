import type { FC } from 'react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { BackyardCTA } from '../home/BackyardCTA';
import { ProductDetailHero } from './ProductDetailHero';
import { ProductDetailContent, defaultProductDetail, type ProductDetailData } from './ProductDetailContent';
import { ProductImprovements } from './ProductImprovements';
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
      <main className="flex-1 flex flex-col">
        {/* 2. Hero section */}
        <ProductDetailHero onNavigate={onNavigate} productTitle={detailData.title} />

        {/* 3. Product Detail Section with specifications and size chart */}
        <ProductDetailContent data={detailData} onNavigate={onNavigate} />

        {/* 4. Product Improvements Section */}
        <ProductImprovements />

        {/* 5. CTA Section */}
        <BackyardCTA onNavigate={onNavigate} />

        {/* 6. Product Story Section */}
        <ProductStoryTransformation onNavigate={onNavigate} />
      </main>

      {/* 7. Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default ProductDetailPage;
