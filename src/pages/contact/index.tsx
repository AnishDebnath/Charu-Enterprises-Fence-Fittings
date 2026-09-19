import type { FC } from 'react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { ProjectFinder } from '../../components/common/Credentials';
import { FAQSection } from '../../components/common/FAQ';
import { ContactBanner } from './Banner';
import { ContactForm } from '../../components/common/Form';

interface ContactPageProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'application' | 'product-detail' | 'contact') => void;
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
