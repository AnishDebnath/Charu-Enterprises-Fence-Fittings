import type { FC } from 'react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { ProjectFinder } from '../../components/common/ProjectFinder';
import { TestimonialCarousel } from '../../components/common/TestimonialCarousel';
import { FAQSection } from '../../components/common/FAQSection';
import { CaseStudyBanner } from './CaseStudyBanner';
import { CaseStudyGrid } from './CaseStudyGrid';

import type { CatalogProduct } from '../../data/companyData';

interface CaseStudyPageProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'case-study' | 'product-detail' | 'contact', product?: CatalogProduct) => void;
}

export const CaseStudyPage: FC<CaseStudyPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-[#3B82F6] selection:text-white font-['Outfit',sans-serif]">
      <Navbar currentPage="case-study" onNavigate={onNavigate} />
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
