import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { ProjectFinder } from '../../components/common/ProjectFinder';
import { TestimonialCarousel } from '../../components/common/TestimonialCarousel';
import { FAQSection } from '../../components/common/FAQSection';
import { CallToAction } from '../../components/common/CallToAction';
import { ShippingProcess } from '../../components/common/ShippingProcess';
import { HomeHero } from './HomeHero';
import { PartnerLogos } from './PartnerLogos';
import { CompanyOverview } from './CompanyOverview';
import { ProductMarquee } from './ProductMarquee';
import { CaseStudyMarquee } from './CaseStudyMarquee';

import type { CatalogProduct } from '../../data/companyData';

interface HomePageProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'case-study' | 'product-detail' | 'contact', product?: CatalogProduct) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <Navbar currentPage="home" onNavigate={onNavigate} />
      <HomeHero onNavigate={onNavigate} />
      <PartnerLogos />
      <CompanyOverview />
      <ProductMarquee onNavigate={onNavigate} />
      <ShippingProcess />
      <ProjectFinder />
      <CaseStudyMarquee onNavigate={onNavigate} />
      <TestimonialCarousel />
      <CallToAction />
      <FAQSection />
      <Footer onNavigate={onNavigate} />
    </>
  );
}
