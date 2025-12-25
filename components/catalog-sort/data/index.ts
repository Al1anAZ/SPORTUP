export const sortOptions = [
  { label: "Price Low-High", value: "price" },
  { label: "Price High-Low", value: "priceMax" },
  { label: "Newest", value: "createdAt" },
];

export const sortOptionsMap = Object.fromEntries(
  sortOptions.map(({ value, label }) => [value, label])
) as Record<(typeof sortOptions)[number]["value"], string>;
