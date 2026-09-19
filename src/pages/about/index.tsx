import type { FC } from 'react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { ProjectFinder } from '../../components/common/Credentials';
import { ShippingProcess } from '../../components/common/Shipping';
import { AboutHero } from './Hero';
import { FactoryGallery } from './WhoWeAre';
import { ValuesAndCommitment } from './Foundation';
import { LeadershipTeam } from './Founders';
import { AwardsAndCerts } from './Certifications';

interface AboutPageProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'application' | 'product-detail' | 'contact') => void;
}

export const AboutPage: FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-[#3B82F6] selection:text-white font-['Outfit',sans-serif]">
      <Navbar currentPage="about" onNavigate={onNavigate} />
      <main className="flex-1 flex flex-col">
        <AboutHero onNavigate={onNavigate} />
        <FactoryGallery onNavigate={onNavigate} />
        <ValuesAndCommitment onNavigate={onNavigate} />
        <LeadershipTeam />
        <ProjectFinder onNavigate={onNavigate} />
        <AwardsAndCerts />
        <ShippingProcess onNavigate={onNavigate} />
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default AboutPage;
