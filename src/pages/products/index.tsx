import type { FC } from 'react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { ProductsHero } from './ProductsHero';
import { ProductsShowcase } from './ProductsShowcase';
import { ProjectFinder } from '../home/ProjectFinder';
import { HomeownerReviews } from '../home/HomeownerReviews';
import { ContactSection } from '../contact/ContactSection';

import type { CatalogProduct } from '../../data/companyData';

interface ProductsPageProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'case-study' | 'product-detail' | 'contact', product?: CatalogProduct) => void;
}

export const ProductsPage: FC<ProductsPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-[#3B82F6] selection:text-white font-['Outfit',sans-serif]">
      {/* Floating Navbar with 'products' active */}
      <Navbar currentPage="products" onNavigate={onNavigate} />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero Section */}
        <ProductsHero onNavigate={onNavigate} />

        {/* 2. Products Showcase Section */}
        <ProductsShowcase onNavigate={onNavigate} />

        {/* 3. Project Finder Section */}
        <ProjectFinder />

        {/* 4. Testimonial / Homeowner Reviews Section */}
        <HomeownerReviews />

        {/* 5. Contact Form Section from Contact Page */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default ProductsPage;
