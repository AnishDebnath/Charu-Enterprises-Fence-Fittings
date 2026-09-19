import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { ProjectFinder } from '../../components/common/Credentials';
import { TestimonialCarousel } from '../../components/common/Reviews';
import { FAQSection } from '../../components/common/FAQ';
import { CallToAction } from '../../components/common/FactoryPricing';
import { ShippingProcess } from '../../components/common/Shipping';
import { HomeHero } from './Hero';
import { PartnerLogos } from './Partners';
import { CompanyOverview } from './AboutUs';
import { ProductMarquee } from './ProductRange';
import { CaseStudyMarquee } from './Applications';

import type { CatalogProduct } from '../../data/companyData';

interface HomePageProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'application' | 'product-detail' | 'contact', product?: CatalogProduct) => void;
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
