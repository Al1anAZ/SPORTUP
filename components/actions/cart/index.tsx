"use client";

import { useState } from "react";
import { cn } from "../../../utils/cn";
import { Button } from "../../ui/button";
import { AnimatePresence, motion } from "framer-motion";

type CartButtonProps = {
  onClick?: () => void;
  productId: string;
  className?: string;
};

export const CartButton = ({ onClick, className }: CartButtonProps) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddedToCart(true);

    setTimeout(() => setIsAddedToCart(false), 500);
  };
  return (
    <Button
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        onClick?.();
        handleAddToCart();
      }}
      className={cn(
        "",
        className,
        isAddedToCart &&
          "focus:outline-none hover:bg-[var(--color-lime)]"
      )}
    >
      <AnimatePresence mode="wait">
        {isAddedToCart ? (
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
