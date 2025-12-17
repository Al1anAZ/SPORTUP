"use client";
import { useState } from "react";
import { ProductColorVariantContext } from "./variant-provider";

type ProductVariantProviderProps = {
  children: React.ReactNode;
  defautlColor: string;
};

export const ProductVariantProvider = ({
  children,
  defautlColor,
}: ProductVariantProviderProps) => {
  const [activeColor, setActiveColor] = useState<string>(defautlColor);
  return (
    <ProductColorVariantContext.Provider
      value={{
        activeColor,
        setActiveColor,
      }}
    >
      {children}
    </ProductColorVariantContext.Provider>
  );
};
