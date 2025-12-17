"use client";

import { cn } from "../../utils/cn";
import { Button } from "../ui/button";
import { useProductColorVariantContext } from "./variant-provider";

type ColorSwitchProps = {
  colors: string[];
  productName: string;
};

export const ColorSwitcher = ({ colors, productName }: ColorSwitchProps) => {
  const { activeColor, setActiveColor } = useProductColorVariantContext();

  return (
    <div className="flex items-center gap-3">
      {colors?.map((color, index) => (
        <Button
          variant="icon"
          key={`${color}-${index}`}
          className={cn(
            "w-6 h-6 transition-all duration-300 hover:scale-110",
            color === activeColor && "rounded-full"
          )}
          style={{
            background: color,
            border:
              color.toLowerCase() === "#000000" ||
              color.toLowerCase() === "black"
                ? "1px solid white"
                : undefined,
          }}
          onClick={() => setActiveColor(color)}
          aria-label={`${productName} ${color} color`}
        />
      ))}
    </div>
  );
};
