import Image from "next/image";
import { ProductItemProps } from "../../types/product";
import { cn } from "../../utils/cn";
import { Button } from "../ui/button";
import { Text } from "../ui/typography";
import Link from "next/link";

export const ProductItem = ({
  size = "small",
  variant = "circle",
  product,
  className,
}: ProductItemProps) => {
  const dimensions = {
    small: {
      container: 204,
      img: {
        width: 152,
        heigth: 88,
      },
    },
    medium: {
      container: 260,
      img: {
        width: 168,
        heigth: 128,
      },
    },
    large: {
      container: 300,
      img: {
        width: 188,
        heigth: 150,
      },
    },
  };

  switch (variant) {
    case "circle":
      return (
        <div
          className={cn(
            "bg-[var(--color-gray-100)] rounded-full flex flex-col gap-2 items-center justify-center",
            className
          )}
          style={{
            width: dimensions[size].container,
            height: dimensions[size].container,
          }}
          role="figure"
          aria-label={`${product?.name}, price $${product?.price}, category ${product?.category}`}
        >
          <div className="border border-[var(--color-gray-400)] rounded-full px-4 py-1">
            <Text.P className="text-[var(--color-gray-400)]">
              ${product?.price}
            </Text.P>
          </div>
          <div
            className="relative"
            style={{
              width: dimensions[size].img.width,
              height: dimensions[size].img.heigth,
            }}
          >
            <Image
              src={product?.imgs?.[0]}
              alt={product?.name || "Product image"}
              fill
              className="object-contain"
            />
          </div>

          <Link
            href={"#"}
            className={cn("text-[var(--color-gray-400)] rounded-full",
              "border border-[var(--color-grat-400)] py-1 px-4",
              "hover:bg-[var(--color-blue)] transition-all duration-150"
            )}
          >
            <Text.P>{product?.category}</Text.P>
          </Link>
        </div>
      );

    case "rectangle":
      return <></>;
  }
};
