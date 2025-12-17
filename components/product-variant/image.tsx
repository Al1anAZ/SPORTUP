"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ProductImage as ProductImageType } from "../../types/product";
import { useProductColorVariantContext } from "./variant-provider";

type ProductImageProps = {
  images: ProductImageType[];
  name: string;
};

export const ProductImage = ({ images, name }: ProductImageProps) => {
  const { activeColor } = useProductColorVariantContext();
  const [hovered, setHovered] = useState(false);

  const colorImages = images.filter((img) => img.color === activeColor);

  const mainImage = colorImages[0] ?? images[0];
  const hoverImage = colorImages[1];

  const displayedImage = hovered && hoverImage ? hoverImage : mainImage;

  return (
    <motion.div
      className="absolute inset-0"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={displayedImage.url}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={displayedImage.url}
            alt={`${name} ${displayedImage.color}`}
            fill
            className="object-contain"
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
