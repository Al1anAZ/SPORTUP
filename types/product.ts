export type ProductItemProps = {
  size?: "small" | "medium" | "large";
  product: Product;
  variant?: "circle" | "rectangle";
  className?: string;
};

type Product = {
  id: string;
  name?: string;
  images: ProductImage[];
  price?: number;
  category?: string;
  tag?: ProductTag;
};

export enum ProductTag {
  NEW = "NEW",
  TOP = "TOP",
  SALE = "SALE",
}

export type ProductImage = {
  url: string;
  color: string;
};
