import type { FC } from 'react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { BackyardCTA } from '../home/BackyardCTA';
import { ProjectDetailHero } from './ProjectDetailHero';
import { ProjectDetailContent, defaultProjectDetail, type ProjectDetailData } from './ProjectDetailContent';
import { ProjectImprovements } from './ProjectImprovements';
import { ProjectStoryTransformation } from './ProjectStoryTransformation';

interface ProjectDetailPageProps {
  data?: ProjectDetailData;
  onNavigate?: (page: 'home' | 'about' | 'services' | 'projects' | 'project-detail' | 'contact') => void;
}

export const ProjectDetailPage: FC<ProjectDetailPageProps> = ({ data = defaultProjectDetail, onNavigate }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-[#3B82F6] selection:text-white font-['Outfit',sans-serif]">
      {/* 1. Navbar */}
      <Navbar currentPage="projects" onNavigate={onNavigate} />

      {/* Main Content Sections in exact requested sequence */}
      <main className="flex-1 flex flex-col">
        {/* 2. Hero section designed exactly like About page hero */}
        <ProjectDetailHero onNavigate={onNavigate} projectTitle={data.title} />

        {/* 3. Project Detail Section with specifications and size chart */}
        <ProjectDetailContent data={data} onNavigate={onNavigate} />

        {/* 4. Project Improvements Section (What We Improved) */}
        <ProjectImprovements />

        {/* 5. CTA Section */}
        <BackyardCTA onNavigate={onNavigate} />

        {/* 6. Project Transformation Showcase Section */}
        <ProjectStoryTransformation onNavigate={onNavigate} />
      </main>

      {/* 7. Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default ProjectDetailPage;
