"use client";

import Link from "next/link";
import { Text } from "../ui/typography";
import { AdminIcon, CartIcon, FavoriteIcon, SearchIcon } from "../icons";
import { UserAuthWidget } from "../auth";
import { ROUT } from "../../constants";
import { Button } from "../ui/button";
import { ProductTag } from "../../types/product";
import { useAdminPermission } from "../../hooks/use-admin-permission";

export const Header = () => {
  const { allowed } = useAdminPermission();
  return (
    <header
      className="relative py-5 flex justify-between 
  before:content-[''] before:absolute before:bg-[var(--color-orange-light)] 
  before:w-screen before:h-0.5 before:bottom-0 
  before:left-1/2 before:-translate-x-1/2
"
    >
      <nav aria-label="Main navigation">
        <ul className="flex items-center justify-center h-full gap-4">
          <li>
            <Link
              href={{
                pathname: ROUT.CATALOG,
                query: { category: "man" },
              }}
            >
              <Text.P link size="small">
                Man
              </Text.P>
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: ROUT.CATALOG,
                query: { category: "woman" },
              }}
            >
              <Text.P link size="small">
                Women
              </Text.P>
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: ROUT.CATALOG,
                query: { category: "kids" },
              }}
            >
              <Text.P link size="small">
                Kids
              </Text.P>
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: ROUT.CATALOG,
                query: { category: "accessories" },
              }}
            >
              <Text.P link size="small">
                Accessories
              </Text.P>
            </Link>
          </li>
        </ul>
      </nav>

      <Link href={ROUT.HOME}>
        <Text.H3 uppercase className="hover:text-[var(--color-blue-light)]">
          sportup
        </Text.H3>
      </Link>
      <div className="flex items-center gap-8">
        <nav aria-label="Special or promotions actions">
          <ul className="flex items-center justify-center h-full gap-4">
            <li>
              <Link
                href={{
                  pathname: ROUT.CATALOG,
                  query: { tag: ProductTag.TOP },
                }}
              >
                <Text.P link size="small">
                  Special
                </Text.P>
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: ROUT.CATALOG,
                  query: { tag: ProductTag.NEW },
                }}
              >
                <Text.P link size="small">
                  New
                </Text.P>
              </Link>
            </li>
          </ul>
        </nav>
        <nav aria-label="User actions">
          <ul className="flex items-center justify-center h-full gap-3">
            <li>
              <Button variant="icon">
                <SearchIcon width={24} height={24} />
              </Button>
            </li>
            <li>
              <UserAuthWidget />
            </li>
            {allowed && (
              <li>
                <Link
                  href={ROUT.ADMIN}
                  className="hover:text-[var(--color-blue-light)] transition-all duration-150"
                >
                  <AdminIcon width={24} height={24} />
                </Link>
              </li>
            )}
            <li>
              <Link
                href="#"
                className="hover:text-[var(--color-blue-light)] transition-all duration-150"
              >
                <FavoriteIcon width={24} height={24} />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-[var(--color-blue-light)] transition-all duration-150"
              >
                <CartIcon width={24} height={24} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
