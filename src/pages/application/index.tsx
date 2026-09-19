import type { FC } from 'react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { ProjectFinder } from '../../components/common/Credentials';
import { TestimonialCarousel } from '../../components/common/Reviews';
import { FAQSection } from '../../components/common/FAQ';
import { CaseStudyBanner } from './Banner';
import { CaseStudyGrid } from './Applications';

import type { CatalogProduct } from '../../data/companyData';

interface CaseStudyPageProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'application' | 'product-detail' | 'contact', product?: CatalogProduct) => void;
}

export const CaseStudyPage: FC<CaseStudyPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-[#3B82F6] selection:text-white font-['Outfit',sans-serif]">
      <Navbar currentPage="application" onNavigate={onNavigate} />
      <main className="flex-1 flex flex-col">
        <CaseStudyBanner onNavigate={onNavigate} />
        <CaseStudyGrid />
        <ProjectFinder />
        <TestimonialCarousel />
        <FAQSection onNavigate={onNavigate} />
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default CaseStudyPage;
