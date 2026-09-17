import { useState, useEffect } from 'react';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ProductsPage from './pages/products';
import CaseStudyPage from './pages/case-study';
import ProductDetailPage from './pages/product-detail';
import ContactPage from './pages/contact';
import { ComingSoonPage } from './pages/coming-soon';
import { CATALOG_PRODUCTS, type CatalogProduct } from './data/companyData';

type Page = 'coming-soon' | 'home' | 'about' | 'products' | 'case-study' | 'product-detail' | 'contact';

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function productSlug(product: CatalogProduct): string {
  return slugify(product.name);
}

function productFromSlug(slug: string): CatalogProduct | null {
  return CATALOG_PRODUCTS.find((p) => productSlug(p) === slug) || null;
}

function getProductBySlug(pathname: string): CatalogProduct | null {
  const match = pathname.match(/^\/products\/([^/]+)\/?$/i);
  if (!match) return null;
  return productFromSlug(match[1]);
}

function pageFromPath(pathname: string): Page {
  const path = pathname.toLowerCase().replace(/\/+$/, '') || '/';
  if (path === '/about') return 'about';
  if (path === '/products') return 'products';
  if (/^\/products\/[^/]+\/?$/.test(path)) return 'product-detail';
  if (path === '/case-study') return 'case-study';
  if (path === '/contact') return 'contact';
  return 'home';
}

function pathFromPage(page: Page, product?: CatalogProduct | null): string {
  switch (page) {
    case 'about': return '/about';
    case 'products': return '/products';
    case 'product-detail': return product ? `/products/${productSlug(product)}` : '/products';
    case 'case-study': return '/case-study';
    case 'contact': return '/contact';
    default: return '/';
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(() =>
    pageFromPath(window.location.pathname)
  );

  const [selectedProduct, setSelectedProduct] = useState<CatalogProduct | null>(() =>
    getProductBySlug(window.location.pathname)
  );

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const page = pageFromPath(path);
      setCurrentPage(page);
      if (page === 'product-detail') {
        setSelectedProduct(getProductBySlug(path));
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: Page, product?: CatalogProduct) => {
    if (page === 'product-detail' && product) {
      setSelectedProduct(product);
    } else if (page !== 'product-detail') {
      setSelectedProduct(null);
    }
    const targetPath = pathFromPage(page, product);
    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }
    setCurrentPage(page);
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
