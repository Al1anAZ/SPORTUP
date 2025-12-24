import Link from "next/link";
import { ROUT } from "../../constants";
import { Text } from "../ui/typography";
import { ChevronIcon } from "../icons";

type Crumb = {
  label: string;
  href?: string;
};

type CrumbProps = {
  crumbs: Crumb[];
};

export const Breadcrumbs = ({ crumbs }: CrumbProps) => {
  const items = [{ href: ROUT.HOME, label: "Home" }, ...crumbs];

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center">
        {items.map((crumb, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={`${crumb.label}-${index}`}
              className="flex items-center"
            >
              {index !== 0 && (
                <ChevronIcon aria-hidden width={24} height={24} />
              )}

              {crumb.href && !isLast ? (
                <Link href={crumb.href}>
                  <Text.P
                    link
                    size="small"
                    className="text-[var(--color-gray-100)]"
                  >
                    {crumb.label}
                  </Text.P>
                </Link>
              ) : (
                <Text.P
                  size="small"
                  className="text-[var(--color-gray-300)]"
                >
                  {crumb.label}
                </Text.P>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
