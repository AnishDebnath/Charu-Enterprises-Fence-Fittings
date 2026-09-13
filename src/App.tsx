import { useState, useEffect } from 'react';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ServicesPage from './pages/services';
import ProjectsPage from './pages/projects';
import ProjectDetailPage from './pages/project-detail';
import ContactPage from './pages/contact';
import { ComingSoonPage } from './pages/coming-soon';

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    'coming-soon' | 'home' | 'about' | 'services' | 'projects' | 'project-detail' | 'contact'
  >(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash.startsWith('#/about') || hash === '#about-page') {
        return 'about';
      }
      if (hash.startsWith('#/services') || hash === '#services-page') {
        return 'services';
      }
      if (
        hash.startsWith('#/project-detail') ||
        hash.startsWith('#/project-details') ||
        hash === '#project-detail-page'
      ) {
        return 'project-detail';
      }
      if (hash.startsWith('#/projects') || hash === '#projects-page') {
        return 'projects';
      }
      if (hash.startsWith('#/contact') || hash === '#contact-page') {
        return 'contact';
      }
      if (hash.startsWith('#/home') || hash === '#home-page') {
        return 'home';
      }
    }
    return 'coming-soon';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.startsWith('#/about') || hash === '#about-page') {
        setCurrentPage('about');
      } else if (hash.startsWith('#/services') || hash === '#services-page') {
        setCurrentPage('services');
      } else if (
        hash.startsWith('#/project-detail') ||
        hash.startsWith('#/project-details') ||
        hash === '#project-detail-page'
      ) {
        setCurrentPage('project-detail');
      } else if (hash.startsWith('#/projects') || hash === '#projects-page') {
        setCurrentPage('projects');
      } else if (hash.startsWith('#/contact') || hash === '#contact-page') {
        setCurrentPage('contact');
      } else if (hash.startsWith('#/home') || hash === '#home-page') {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (
    page: 'coming-soon' | 'home' | 'about' | 'services' | 'projects' | 'project-detail' | 'contact'
  ) => {
    setCurrentPage(page);
    window.location.hash =
      page === 'about'
        ? '/about'
        : page === 'services'
        ? '/services'
        : page === 'project-detail'
        ? '/project-detail'
        : page === 'projects'
        ? '/projects'
        : page === 'contact'
        ? '/contact'
        : page === 'home'
        ? '/home'
        : '/';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'about') {
    return <AboutPage onNavigate={navigateTo} />;
  }

  if (currentPage === 'services') {
    return <ServicesPage onNavigate={navigateTo} />;
  }

  if (currentPage === 'projects') {
    return <ProjectsPage onNavigate={navigateTo} />;
  }

  if (currentPage === 'project-detail') {
    return <ProjectDetailPage onNavigate={navigateTo} />;
  }

  if (currentPage === 'contact') {
    return <ContactPage onNavigate={navigateTo} />;
  }

  if (currentPage === 'home') {
    return <HomePage onNavigate={navigateTo} />;
  }

  return <ComingSoonPage />;
}

