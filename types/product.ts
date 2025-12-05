export type ProductItemProps = {
  size: "small" | "medium" | "large";
  product: Product;
  variant: "circle" | "rectangle";
  className?: string;
};

type Product = {
  id: string;
  name?: string;
  imgs: string[];
  price?: number;
  category?: string;
  tag?: string[];
  colors?: string[];
};
