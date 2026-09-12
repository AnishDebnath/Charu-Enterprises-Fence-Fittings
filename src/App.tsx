import { useState, useEffect } from 'react';
import HomePage from './pages/home';
import AboutPage from './pages/about';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash.startsWith('#/about') || hash === '#about-page') {
        return 'about';
      }
    }
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.startsWith('#/about') || hash === '#about-page') {
        setCurrentPage('about');
      } else if (hash.startsWith('#/home') || hash === '#home-page') {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: 'home' | 'about') => {
    setCurrentPage(page);
    window.location.hash = page === 'about' ? '/about' : '/home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'about') {
    return <AboutPage onNavigate={navigateTo} />;
  }

  return <HomePage onNavigate={navigateTo} />;
}
