"use client";
import { useCatalogFilters } from "../../hooks/use-catalog-filters";
import { CatalogSort } from "../../types/catalog-filters";
import { cn } from "../../utils/cn";
import { Select } from "../ui/select";
import { SelectItem } from "../ui/select/select-provider";
import { sortOptions } from "./data";

type ProductSortProps = {
  className?: string;
};

export const ProductSort = ({ className }: ProductSortProps) => {
  const { setFilterValues, filters } = useCatalogFilters();
  const selectedOption =
    sortOptions.find((opt) => opt.value === filters.sortBy) ?? null;
  return (
    <div className={cn("", className)}>
      <Select
        value={selectedOption}
        onChange={(item) =>
          setFilterValues({ sortBy: (item as SelectItem).value as CatalogSort })
        }
      >
        <Select.Trigger placeholder="Select Sort" />
        <Select.List>
          {sortOptions.map((opt) => (
            <Select.Item key={opt.value} item={opt}>
              {opt.label}
            </Select.Item>
          ))}
        </Select.List>
      </Select>
    </div>
  );
};
