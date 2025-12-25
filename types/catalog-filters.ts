import { ProductTag } from "./product";

export type CatalogPaginationAndFilterInput = {
  sortBy: CatalogSort;
  page?: number;
  categorySlug?: string[];
  brandSlug?: string[];
  size?: string[];
  color?: string[];
  minPrice?: number;
  maxPrice?: number;
  tag?: ProductTag;
};

export type CatalogSort = "createdAt" | "price" | "priceMax" | undefined

export type FilterEntry = {
  key: keyof CatalogPaginationAndFilterInput;
  value: string;
};

