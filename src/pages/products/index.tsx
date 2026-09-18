import type { FC } from 'react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { ProjectFinder } from '../../components/common/ProjectFinder';
import { TestimonialCarousel } from '../../components/common/TestimonialCarousel';
import { ContactForm } from '../contact/ContactForm';
import { CatalogHero } from './CatalogHero';
import { ProductGrid } from './ProductGrid';

import type { CatalogProduct } from '../../data/companyData';

interface ProductsPageProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'case-study' | 'product-detail' | 'contact', product?: CatalogProduct) => void;
}

export const ProductsPage: FC<ProductsPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-[#3B82F6] selection:text-white font-['Outfit',sans-serif]">
      <Navbar currentPage="products" onNavigate={onNavigate} />
      <main className="flex-1 flex flex-col">
        <CatalogHero onNavigate={onNavigate} />
        <ProductGrid onNavigate={onNavigate} />
        <ProjectFinder />
        <TestimonialCarousel />
        <ContactForm />
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default ProductsPage;
