import { Breadcrumbs } from "../../components/bread-crumbs";
import { ProductFilters } from "../../components/product-filters";
import { ProductFiltersActions } from "../../components/product-filters-actions";
import { ProductSort } from "../../components/product-sort";
import { ROUT } from "../../constants";

export default async function Catalog() {
  return (
    <main className="flex flex-col pt-8 gap-6 mb-44">
      <Breadcrumbs
        crumbs={[
          {
            label: "Catalog",
            href: ROUT.CATALOG,
          },
        ]}
      />
      <section className="grid grid-cols-4 grid-rows-[41px_auto] gap-6">
        <ProductFilters className="row-span-full"/>
        <ProductFiltersActions className="col-span-2 items-end"/>
        <ProductSort className="flex  justify-end items-end"/>
      </section>
    </main>
  );
}
