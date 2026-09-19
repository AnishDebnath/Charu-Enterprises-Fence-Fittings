import { CATALOG_PRODUCTS, type CatalogProduct } from './companyData';

export const FEATURED_IDS = [1, 5, 6, 10, 12, 47];

export const featuredProducts = FEATURED_IDS
  .map((id) => CATALOG_PRODUCTS.find((p) => p.itemNumber === id))
  .filter(Boolean) as CatalogProduct[];
