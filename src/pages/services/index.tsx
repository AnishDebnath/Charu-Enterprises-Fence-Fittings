import type { FC } from 'react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { ServicesHero } from './ServicesHero';
import { ServicesShowcase } from './ServicesShowcase';
import { ProjectFinder } from '../home/ProjectFinder';
import { HomeownerReviews } from '../home/HomeownerReviews';
import { ContactSection } from '../contact/ContactSection';

interface ServicesPageProps {
  onNavigate?: (page: 'home' | 'about' | 'services' | 'projects' | 'project-detail' | 'contact') => void;
}

export const ServicesPage: FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-[#3B82F6] selection:text-white font-['Outfit',sans-serif]">
      {/* Floating Navbar with 'services' active */}
      <Navbar currentPage="services" onNavigate={onNavigate} />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero Section */}
        <ServicesHero onNavigate={onNavigate} />

        {/* 2. Services Showcase Section matching uploaded image */}
        <ServicesShowcase onNavigate={onNavigate} />

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

export default ServicesPage;
