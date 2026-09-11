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

export default function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <AboutTeam />
      <ServicesGrid />
      <FamilyOwned />
      <ProjectFinder />
      <RecentProjects />
      <HomeownerReviews />
      <FAQSection />
      <BackyardCTA />
      <OutdoorTips />
    </>
  );
}
