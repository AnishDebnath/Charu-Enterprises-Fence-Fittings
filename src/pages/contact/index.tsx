import type { FC } from 'react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { ContactHero } from './ContactHero';
import { ContactSection } from './ContactSection';
import { ProjectFinder } from '../home/ProjectFinder';
import { FAQSection } from '../home/FAQSection';

interface ContactPageProps {
  onNavigate?: (page: 'home' | 'about' | 'services' | 'projects' | 'project-detail' | 'contact') => void;
}

export const ContactPage: FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-[#3B82F6] selection:text-white font-['Outfit',sans-serif]">
      {/* Floating Navbar with 'contact' active */}
      <Navbar currentPage="contact" onNavigate={onNavigate} />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        <ContactHero onNavigate={onNavigate} />
        <ContactSection />
        <ProjectFinder />
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default ContactPage;
