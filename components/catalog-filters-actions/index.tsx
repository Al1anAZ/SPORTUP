"use client";

import { useCatalogFilters } from "../../hooks/use-catalog-filters";
import { cn } from "../../utils/cn";
import { sortOptionsMap } from "../catalog-sort/data";
import { Button } from "../ui/button";
import { CatalogFiltersActionItem } from "./catalog-filters-actions-item";

type CatalogFiltersActionsProps = {
  className?: string;
};

export const CatalogFiltersActions = ({
  className,
}: CatalogFiltersActionsProps) => {
  const { filterEntries, resetFilters, setFilterValues } = useCatalogFilters();
  const sortMapLabels = sortOptionsMap;
  return (
    <div className={cn("flex gap-4", className)}>
      <div className="flex items-center gap-2">
        {filterEntries.map((filter, index) => (
          <CatalogFiltersActionItem
            key={`${filter}-${index}`}
            name={sortMapLabels[filter.value] ?? filter.value}
            handleClick={() => setFilterValues({ [filter.key]: undefined })}
          />
        ))}
      </div>
      <Button
        variant="icon"
        className="border-b border-b-transparent  hover:border-b-[var(--color-blue)]"
        onClick={resetFilters}
      >
        Reset all filters
      </Button>
    </div>
  );
};
