import type { FC } from 'react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { ProjectFinder } from '../../components/common/ProjectFinder';
import { FAQSection } from '../../components/common/FAQSection';
import { ContactBanner } from './ContactBanner';
import { ContactForm } from './ContactForm';

interface ContactPageProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'case-study' | 'product-detail' | 'contact') => void;
}

export const ContactPage: FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-[#3B82F6] selection:text-white font-['Outfit',sans-serif]">
      <Navbar currentPage="contact" onNavigate={onNavigate} />
      <main className="flex-1 flex flex-col">
        <ContactBanner onNavigate={onNavigate} />
        <ContactForm />
        <ProjectFinder />
        <FAQSection />
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default ContactPage;
