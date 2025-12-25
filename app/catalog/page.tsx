import { Suspense } from "react";
import { Breadcrumbs } from "../../components/bread-crumbs";
import { CatalogFilters } from "../../components/catalog-filters";
import { CatalogFiltersActions } from "../../components/catalog-filters-actions";
import { CatalogSort } from "../../components/catalog-sort";
import { ROUT } from "../../constants";
import { Skeleton } from "../../components/ui/skeleton";

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
        <Suspense
          fallback={
            <div className="flex flex-col gap-6 row-span-full">
              {Array.from({ length: 7 }, (_, index) => (
                <Skeleton key={`skeleton-${index}`} className="w-full h-10" />
              ))}
            </div>
          }
        >
          <CatalogFilters className="row-span-full" />
        </Suspense>

        <Suspense fallback={<Skeleton className="w-full h-full col-span-2" />}>
          <CatalogFiltersActions className="col-span-2 items-end" />
        </Suspense>

        <Suspense fallback={<Skeleton className="w-full h-full" />}>
          <CatalogSort className="flex justify-end items-end" />
        </Suspense>
      </section>
    </main>
  );
}
