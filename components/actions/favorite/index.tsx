"use client";
import { cn } from "../../../utils/cn";
import { FavoriteIcon } from "../../icons";
import { Button } from "../../ui/button";

type FavoriteButtonProps = {
  onClick?: () => void;
  productId: string;
  className?: string;
};

export const FavoriteButton = ({ onClick, className }: FavoriteButtonProps) => {
  return (
    <Button
      variant="icon"
      className={cn("", className)}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        onClick?.();
      }}
    >
      <FavoriteIcon width={24} height={24} />
    </Button>
  );
};
