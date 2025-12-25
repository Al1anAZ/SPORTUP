import { cn } from "../../utils/cn";
import { CloseIcon } from "../icons";
import { Button } from "../ui/button";
import { Text } from "../ui/typography";

type CatalogFiltersActionItemProps = {
    className?: string;
    name?: string;
    handleClick: () => void;
  };

export const CatalogFiltersActionItem = ({
    className,
    name,
    handleClick,
  }: CatalogFiltersActionItemProps) => {
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