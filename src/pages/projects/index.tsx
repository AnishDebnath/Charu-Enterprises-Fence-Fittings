import type { FC } from 'react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { ProjectsHero } from './ProjectsHero';
import { ProjectsSection } from './ProjectsSection';
import { ProjectFinder } from '../home/ProjectFinder';
import { HomeownerReviews } from '../home/HomeownerReviews';

interface ProjectsPageProps {
  onNavigate?: (page: 'home' | 'about' | 'services' | 'projects' | 'project-detail' | 'contact') => void;
}

export const ProjectsPage: FC<ProjectsPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-[#3B82F6] selection:text-white font-['Outfit',sans-serif]">
      {/* Floating Navbar with 'projects' active */}
      <Navbar currentPage="projects" onNavigate={onNavigate} />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero Section matching About / Services style */}
        <ProjectsHero onNavigate={onNavigate} />

        {/* 2. Projects Gallery Section with filterable categories and cards matching screenshot */}
        <ProjectsSection onNavigate={onNavigate} />

        {/* 3. Project Finder Section */}
        <ProjectFinder />

        {/* 4. Testimonial / Homeowner Reviews Section */}
        <HomeownerReviews />
      </main>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default ProjectsPage;
