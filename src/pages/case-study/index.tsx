import type { FC } from 'react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { CaseStudyHero } from './CaseStudyHero';
import { CaseStudySection } from './CaseStudySection';
import { ProjectFinder } from '../home/ProjectFinder';
import { HomeownerReviews } from '../home/HomeownerReviews';
import { FAQSection } from '../home/FAQSection';

import type { CatalogProduct } from '../../data/companyData';

interface CaseStudyPageProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'case-study' | 'product-detail' | 'contact', product?: CatalogProduct) => void;
}

export const CaseStudyPage: FC<CaseStudyPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-[#3B82F6] selection:text-white font-['Outfit',sans-serif]">
      {/* Floating Navbar with 'case-study' active */}
      <Navbar currentPage="case-study" onNavigate={onNavigate} />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero Section */}
        <CaseStudyHero onNavigate={onNavigate} />

        {/* 2. Case Study Gallery Section */}
        <CaseStudySection />

        {/* 3. Project Finder Section */}
        <ProjectFinder />

        {/* 4. Testimonial / Homeowner Reviews Section */}
        <HomeownerReviews />

        {/* 5. Frequently Asked Questions Section */}
        <FAQSection onNavigate={onNavigate} />
      </main>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default CaseStudyPage;
