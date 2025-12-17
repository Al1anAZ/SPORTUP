"use client";
import { createContext, useContext } from "react";

type ProductColorVariantType = {
  setActiveColor: (color: string) => void;
  activeColor: string
};

export const ProductColorVariantContext = createContext<ProductColorVariantType>(null!);

export const useProductColorVariantContext = () => {
  const context = useContext(ProductColorVariantContext);
  if (!context) {
    throw new Error("useProductColorVariantContext must be used within a InputProvider");
  }
  return context;
};
