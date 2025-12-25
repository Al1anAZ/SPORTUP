"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { CatalogPaginationAndFilterInput, FilterEntry } from "../types/catalog-filters";
import { useCallback } from "react";
import { ROUT } from "../constants";

export const useCatalogFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const filters = parseFilters(searchParams);

  const setFilterValues = useCallback(
    (next: Partial<CatalogPaginationAndFilterInput>) => {
      const merged = { ...filters, ...next, page: 1 };
      const params = buildParams(merged);
      router.replace(`/catalog?${params.toString()}`, { scroll: false });
    },
    [filters, router]
  );
  

  const toggleMulti = useCallback(
    (key: "categorySlug" | "brandSlug" | "size" | "color", value: string) => {
      const current = filters[key] ?? [];
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
  
      setFilterValues({ [key]: next });
    },
    [filters, setFilterValues]
  );
  

  const resetFilters = () => {
    const params = buildParams({ page: 1 });
    router.replace(`${ROUT.CATALOG}?${params.toString()}`, {
      scroll: false,
    });
  };

  const setPage = (page: number) => {
    const params = buildParams({ ...filters, page });
    router.replace(`${ROUT.CATALOG}?${params.toString()}`, { scroll: false });
  };

  const filterEntries: FilterEntry[] = Object.entries(filters).flatMap(
    ([key, value]) => {
      if (Array.isArray(value)) {
        return value.map((v) => ({
          key: key as keyof CatalogPaginationAndFilterInput,
          value: String(v),
        }));
      }
  
      if (value !== undefined && value !== null && key !== "page") {
        return [
          {
            key: key as keyof CatalogPaginationAndFilterInput,
            value: String(value),
          },
        ];
      }
  
      return [];
    }
  );
  

  return {
    filters,
    setFilterValues,
    toggleMulti,
    resetFilters,
    filterEntries,
    setPage,
  };
};

const parseFilters = (
  searchParams: ReturnType<typeof useSearchParams>
): CatalogPaginationAndFilterInput => ({
  page: Number(searchParams.get("page") ?? 1),
  sortBy:
    (searchParams.get("sortBy") as CatalogPaginationAndFilterInput["sortBy"]) ??
    undefined,
  categorySlug: searchParams.get("categorySlug")?.split(",") ?? undefined,
  brandSlug: searchParams.get("brandSlug")?.split(",") ?? undefined,
  size: searchParams.get("size")?.split(",") ?? undefined,
  color: searchParams.get("color")?.split(",") ?? undefined,
  minPrice: searchParams.get("minPrice")
    ? Number(searchParams.get("minPrice"))
    : undefined,
  maxPrice: searchParams.get("maxPrice")
    ? Number(searchParams.get("maxPrice"))
    : undefined,
  tag:
    (searchParams.get("tag") as CatalogPaginationAndFilterInput["tag"]) ??
    undefined,
});

const buildParams = (filters: Partial<CatalogPaginationAndFilterInput>) => {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      if (value.length) params.set(key, value.join(","));
    } else if (value !== undefined && value !== null) {
      params.set(key, String(value));
    }
  });

  return params;
};
