import { Suspense } from "react";
import { Breadcrumbs } from "../../components/bread-crumbs";
import { CatalogFilters } from "../../components/catalog-filters";
import { CatalogFiltersActions } from "../../components/catalog-filters-actions";
import { CatalogSort } from "../../components/catalog-sort";
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
        <Suspense fallback={<div>Loading filters...</div>}>
          <CatalogFilters className="row-span-full" />
        </Suspense>

        <Suspense fallback={<div>Loading actions...</div>}>
          <CatalogFiltersActions className="col-span-2 items-end" />
        </Suspense>

        {/* {todo add skeletons} */}
        <Suspense fallback={<div>Loading sort...</div>}>
          <CatalogSort className="flex justify-end items-end" />
        </Suspense>
      </section>
    </main>
  );
}
