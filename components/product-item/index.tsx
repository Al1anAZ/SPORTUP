import Image from "next/image";
import { ProductItemProps } from "../../types/product";
import { cn } from "../../utils/cn";
import { Text } from "../ui/typography";
import Link from "next/link";
import { dimensions, tagColor } from "./config";
import { FavoriteButton } from "../actions/favorite";
import { CartButton } from "../actions/cart";
import { ProductVariantProvider } from "../product-variant/variant-root";
import { ColorSwitcher } from "../product-variant/color-switcher";
import { ProductImage } from "../product-variant/image";

export const ProductItem = ({
  size = "small",
  variant = "circle",
  product,
  className,
}: ProductItemProps) => {
  const defautlColor = product.images[0].color;

  switch (variant) {
    case "circle":
      return (
        <article
          className={cn(
            "bg-[var(--color-gray-100)] rounded-full flex flex-col gap-2 items-center justify-center",
            className
          )}
          style={{
            width: dimensions[size].container,
            height: dimensions[size].container,
          }}
          itemScope
          itemType="https://schema.org/Product"
        >
          <div
            itemProp="offers"
            itemScope
            itemType="https://schema.org/Offer"
            className="border border-[var(--color-gray-400)] rounded-full px-4 py-1"
          >
            <meta itemProp="priceCurrency" content="USD" />
            <Text.P
              className="text-[var(--color-gray-400)]"
              itemProp="price"
              content={String(product.price)}
            >
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
              src={product?.images?.[0].url}
              alt={`${product.name} – ${product.category}`}
              fill
              className="object-contain"
            />
          </div>

          <Link
            href={"#"}
            className={cn(
              "text-[var(--color-gray-400)] rounded-full",
              "border border-[var(--color-gray-400)] py-1 px-4",
              "hover:bg-[var(--color-blue)] transition-all duration-150"
            )}
          >
            <Text.P itemProp="category">{product?.category}</Text.P>
          </Link>
        </article>
      );

    case "rectangle":
      return (
        <ProductVariantProvider defautlColor={defautlColor}>
          <article
            itemScope
            itemType="https://schema.org/Product"
            className={cn("group flex flex-col gap-4", className)}
          >
            <Link
              href={"#"}
              className="relative h-[368px] bg-gray-100 flex items-center justify-center"
              aria-label={product?.name}
            >
              {product?.tag && (
                <div className="absolute z-10 flex items-center gap-2 px-4 py-2 left-0 top-0 border-r border-b border-r-[var(--color-gray-400)] border-b-[var(--color-gray-400)]">
                  <span
                    className="rounded-full w-3 h-3"
                    style={{ backgroundColor: tagColor[product.tag] }}
                  />
                  <Text.P className="text-[var(--color-gray-400)]" size="small">
                    {product.tag}
                  </Text.P>
                </div>
              )}
              <FavoriteButton
                productId=""
                className="absolute z-10 right-4 top-4 text-[var(--color-gray-400)] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300"
              />
              <CartButton
                className="absolute z-10 w-full bottom-0 h-12 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300"
                productId=""
              />

              <ProductImage images={product.images} name={product.name!} />
            </Link>
            <div className="flex flex-col gap-2">
              <Text.H3 className="text-xl font-body h-12" itemProp="name">
                {product?.name}
              </Text.H3>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <Link href={"#"}>
                    <Text.P
                      link
                      size="small"
                      itemProp="category"
                      className="text-[var(--color-gray-100)]"
                    >
                      {product?.category}
                    </Text.P>
                  </Link>
                  <div
                    itemProp="offers"
                    itemScope
                    itemType="https://schema.org/Offer"
                  >
                    <meta itemProp="priceCurrency" content="USD" />
                    <Text.P
                      size="small"
                      className="text-[var(--color-gray-100)]"
                      itemProp="price"
                      content={String(product.price)}
                    >
                      ${product?.price}
                    </Text.P>
                  </div>
                </div>
                <ColorSwitcher
                  colors={Array.from(
                    new Set(product.images.map(({ color }) => color))
                  )}
                  productName={product.name!}
                />
              </div>
            </div>
          </article>
        </ProductVariantProvider>
      );
  }
};
