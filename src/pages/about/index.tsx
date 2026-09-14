import type { FC } from 'react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { AboutHero } from './AboutHero';
import { GetToKnowUs } from './GetToKnowUs';
import { OurFoundation } from './OurFoundation';
import { FamilyOwned } from '../home/FamilyOwned';
import { ProjectFinder } from '../home/ProjectFinder';
import { TeamSection } from './TeamSection';

interface AboutPageProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'case-study' | 'product-detail' | 'contact') => void;
}

export const AboutPage: FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-[#3B82F6] selection:text-white font-['Outfit',sans-serif]">
      {/* Floating Navbar */}
      <Navbar currentPage="about" onNavigate={onNavigate} />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        <AboutHero onNavigate={onNavigate} />
        <GetToKnowUs onNavigate={onNavigate} />
        <OurFoundation onNavigate={onNavigate} />
        <TeamSection />
        <ProjectFinder onNavigate={onNavigate} />
        <FamilyOwned onNavigate={onNavigate} />
      </main>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default AboutPage;
