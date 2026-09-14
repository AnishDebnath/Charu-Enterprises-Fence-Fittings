import { useState, useEffect } from 'react';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ProductsPage from './pages/products';
import CaseStudyPage from './pages/case-study';
import ProductDetailPage from './pages/product-detail';
import ContactPage from './pages/contact';
import { ComingSoonPage } from './pages/coming-soon';
import type { CatalogProduct } from './data/companyData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    'coming-soon' | 'home' | 'about' | 'products' | 'case-study' | 'product-detail' | 'contact'
  >(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash.startsWith('#/about') || hash === '#about-page') {
        return 'about';
      }
      if (hash.startsWith('#/products') || hash === '#products-page') {
        return 'products';
      }
      if (
        hash.startsWith('#/product-detail') ||
        hash.startsWith('#/product-details') ||
        hash === '#product-detail-page'
      ) {
        return 'product-detail';
      }
      if (hash.startsWith('#/case-study') || hash === '#case-study-page') {
        return 'case-study';
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

  const [selectedProduct, setSelectedProduct] = useState<CatalogProduct | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.startsWith('#/about') || hash === '#about-page') {
        setCurrentPage('about');
      } else if (hash.startsWith('#/products') || hash === '#products-page') {
        setCurrentPage('products');
      } else if (
        hash.startsWith('#/product-detail') ||
        hash.startsWith('#/product-details') ||
        hash === '#product-detail-page'
      ) {
        setCurrentPage('product-detail');
      } else if (hash.startsWith('#/case-study') || hash === '#case-study-page') {
        setCurrentPage('case-study');
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
    page: 'coming-soon' | 'home' | 'about' | 'products' | 'case-study' | 'product-detail' | 'contact',
    product?: CatalogProduct
  ) => {
    if (product) {
      console.log('navigateTo: setting product', product.name);
      setSelectedProduct(product);
    }
    console.log('navigateTo: setting page', page);
    setCurrentPage(page);
    window.location.hash =
      page === 'about'
        ? '/about'
        : page === 'products'
          ? '/products'
          : page === 'product-detail'
            ? '/product-detail'
            : page === 'case-study'
              ? '/case-study'
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

  if (currentPage === 'products') {
    return <ProductsPage onNavigate={navigateTo} />;
  }

  if (currentPage === 'case-study') {
    return <CaseStudyPage onNavigate={navigateTo} />;
  }

  if (currentPage === 'product-detail') {
    return <ProductDetailPage product={selectedProduct} onNavigate={navigateTo} />;
  }

  if (currentPage === 'contact') {
    return <ContactPage onNavigate={navigateTo} />;
  }

  if (currentPage === 'home') {
    return <HomePage onNavigate={navigateTo} />;
  }

  return <ComingSoonPage />;
}
