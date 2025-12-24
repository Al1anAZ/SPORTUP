import { Breadcrumbs } from "../../components/bread-crumbs";
import { ProductFilters } from "../../components/product-filters";
import { ROUT } from "../../constants";

export default async function Catalog() {
  return (
    <main className="flex flex-col pt-8 gap-6">
      <Breadcrumbs
        crumbs={[
          {
            label: "Catalog",
            href: ROUT.CATALOG,
          },
        ]}
      />
      <ProductFilters />
    </main>
  );
}
