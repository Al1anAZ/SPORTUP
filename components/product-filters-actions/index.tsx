"use client";

import { useCatalogFilters } from "../../hooks/use-catalog-filters";
import { cn } from "../../utils/cn";
import { CloseIcon } from "../icons";
import { sortOptionsMap } from "../product-sort/data";
import { Button } from "../ui/button";
import { Text } from "../ui/typography";

type ProductFiltersActionsProps = {
  className?: string;
};
type ProductFiltersActionItemProps = {
  className?: string;
  name?: string;
  handleClick: () => void;
};

export const ProductFiltersActions = ({
  className,
}: ProductFiltersActionsProps) => {
  const { filterEntries, resetFilters, setFilterValues } = useCatalogFilters();
  const sortMapLabels = sortOptionsMap;
  return (
    <div className={cn("flex gap-4", className)}>
      <div className="flex items-center gap-2">
        {filterEntries.map((filter, index) => (
          <ProductFiltersActionItem
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

const ProductFiltersActionItem = ({
  className,
  name,
  handleClick,
}: ProductFiltersActionItemProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 border-b border-b-[var(--color-gray-100)]",
        className
      )}
    >
      <Text.P size="small">{name}</Text.P>
      <Button
        variant="icon"
        onClick={handleClick}
        aria-label={`Remove filter ${name}`}
      >
        <CloseIcon width={12} height={12} />
      </Button>
    </div>
  );
};
