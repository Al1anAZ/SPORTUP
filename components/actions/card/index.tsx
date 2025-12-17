"use client";

import { useState } from "react";
import { cn } from "../../../utils/cn";
import { Button } from "../../ui/button";
import { AnimatePresence, motion } from "framer-motion";

type CardButtonProps = {
  onClick?: () => void;
  productId: string;
  className?: string;
};

export const CardButton = ({ onClick, className }: CardButtonProps) => {
  const [isAddedToCard, setIsAddedToCard] = useState(false);

  const handleAddToCard = () => {
    setIsAddedToCard(true);

    setTimeout(() => setIsAddedToCard(false), 500);
  };
  return (
    <Button
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        onClick?.();
        handleAddToCard();
      }}
      className={cn(
        "",
        className,
        isAddedToCard &&
          "focus:outline-none hover:bg-[var(--color-lime)]"
      )}
    >
      <AnimatePresence mode="wait">
        {isAddedToCard ? (
          <motion.span
            key="added"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="text-[var(--color-gray-400)]"
          >
            Added to Cart
          </motion.span>
        ) : (
          <motion.span
            key="add"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
          >
            Add to Cart
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
};
