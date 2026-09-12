import { useState, useEffect } from 'react';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ServicesPage from './pages/services';
import ContactPage from './pages/contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'services' | 'contact'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash.startsWith('#/about') || hash === '#about-page') {
        return 'about';
      }
      if (hash.startsWith('#/services') || hash === '#services-page') {
        return 'services';
      }
      if (hash.startsWith('#/contact') || hash === '#contact-page') {
        return 'contact';
      }
    }
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.startsWith('#/about') || hash === '#about-page') {
        setCurrentPage('about');
      } else if (hash.startsWith('#/services') || hash === '#services-page') {
        setCurrentPage('services');
      } else if (hash.startsWith('#/contact') || hash === '#contact-page') {
        setCurrentPage('contact');
      } else if (hash.startsWith('#/home') || hash === '#home-page') {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: 'home' | 'about' | 'services' | 'contact') => {
    setCurrentPage(page);
    window.location.hash =
      page === 'about'
        ? '/about'
        : page === 'services'
        ? '/services'
        : page === 'contact'
        ? '/contact'
        : '/home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'about') {
    return <AboutPage onNavigate={navigateTo} />;
  }

  if (currentPage === 'services') {
    return <ServicesPage onNavigate={navigateTo} />;
  }

  if (currentPage === 'contact') {
    return <ContactPage onNavigate={navigateTo} />;
  }

  return <HomePage onNavigate={navigateTo} />;
}

