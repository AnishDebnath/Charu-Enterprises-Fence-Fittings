import type { FC } from 'react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { CallToAction } from '../../components/common/FactoryPricing';
import { ProductInfo, defaultProductDetail, type ProductDetailData } from './Info';
import { ProductSpecs } from './Quality';
import { ProductCarousel } from './MoreProducts';
import { getProductImage } from '../../data/productImages';
import type { CatalogProduct } from '../../data/companyData';

function catalogToDetail(product: CatalogProduct): ProductDetailData {
  const imgSrc = getProductImage(product.itemNumber) || product.image;
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
  onNavigate?: (page: 'home' | 'about' | 'products' | 'application' | 'product-detail' | 'contact', product?: CatalogProduct) => void;
}

export const ProductDetailPage: FC<ProductDetailPageProps> = ({ product, data, onNavigate }) => {
  const detailData = product ? catalogToDetail(product) : (data || defaultProductDetail);

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-[#3B82F6] selection:text-white font-['Outfit',sans-serif]">
      <Navbar currentPage="product-detail" onNavigate={onNavigate} />
      <main className="flex-1 flex flex-col pt-24 sm:pt-28 lg:pt-32 bg-white">
        <ProductInfo data={detailData} product={product} onNavigate={onNavigate} />
        <ProductSpecs />
        <CallToAction onNavigate={onNavigate} />
        <ProductCarousel onNavigate={onNavigate} currentProductId={product?.itemNumber || 1} />
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default ProductDetailPage;
