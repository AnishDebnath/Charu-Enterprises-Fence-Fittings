import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { Hero } from './Hero';
import { Partners } from './Partners';
import { AboutTeam } from './AboutTeam';
import { ServicesGrid } from './ServicesGrid';
import { FamilyOwned } from './FamilyOwned';
import { ProjectFinder } from './ProjectFinder';
import { RecentProjects } from './RecentProjects';
import { HomeownerReviews } from './HomeownerReviews';
import { FAQSection } from './FAQSection';
import { BackyardCTA } from './BackyardCTA';
import { OutdoorTips } from './OutdoorTips';

interface HomePageProps {
  onNavigate?: (page: 'home' | 'about' | 'services' | 'projects' | 'project-detail' | 'contact') => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <Navbar currentPage="home" onNavigate={onNavigate} />
      <Hero />
      <Partners />
      <AboutTeam />
      <ServicesGrid />
      <FamilyOwned />
      <ProjectFinder />
      <RecentProjects onNavigate={onNavigate} />
      <HomeownerReviews />
      <FAQSection />
      <BackyardCTA />
      <OutdoorTips />
      <Footer onNavigate={onNavigate} />
    </>
  );
}
