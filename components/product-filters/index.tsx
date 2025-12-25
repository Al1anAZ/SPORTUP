"use client";

import { Text } from "../ui/typography";
import { Select } from "../ui/select";
import { Range } from "../ui/range";
import { useCatalogFilters } from "../../hooks/use-catalog-filters";
import { cn } from "../../utils/cn";
import { useMemo } from "react";
import debounce from "lodash.debounce";

type ProductFiltersProps = {
  className?: string;
};

export const ProductFilters = ({ className }: ProductFiltersProps) => {
  const { filters, setFilterValues } = useCatalogFilters();

  const debouncedSetFilterRange = useMemo(
    () =>
      debounce(([minPrice, maxPrice]: [number, number]) => {
        setFilterValues({ maxPrice, minPrice });
      }, 300),
    [setFilterValues]
  );

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex items-end justify-between border-b border-b-[var(--color-white)]">
        <Text.H3 className="text-[var(--color-blue)]">Filters</Text.H3>
        <Text.P size="small" className="text-[var(--color-blue-light)]">
          Results - 230
        </Text.P>
      </div>
      <div className="flex flex-col gap-3">
        {["Category", "Brand", "Size", "Color"].map((item, index) => (
          <Select mode="multi" key={index}>
            <Select.Trigger placeholder={item} />
            <Select.List className="relative"></Select.List>
          </Select>
        ))}
        <Select mode="multi">
          <Select.Trigger placeholder="Price" />
          <Select.List className="relative">
            <Range
              min={0}
              max={10000}
              value={[filters.minPrice ?? 0, filters.maxPrice ?? 10000]}
              setRange={(range) => debouncedSetFilterRange(range)}
            />
          </Select.List>
        </Select>
      </div>
    </div>
  );
};
