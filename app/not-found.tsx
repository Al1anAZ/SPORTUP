import { Metadata } from "next";
import Link from "next/link";
import { Text } from "../components/ui/typography";
import { Button } from "../components/ui/button";
import { ArrowIcon } from "../components/icons";
import { NotFoundShoes } from "../components/not-found-shoes";
import { ROUT } from "../constants";

export const metadata: Metadata = {
  title: "Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main className="flex flex-col gap-10 justify-center min-h-[calc(100vh-80px)]">
      <section className="flex flex-col gap-6 items-center">
        <Text.H1 className="text-[var(--color-blue)]">404</Text.H1>
        <div className="flex flex-col gap-2 items-center">
          <Text.H3 className="text-[var(--color-blue)]">
            it seems like someone has kicked you out
          </Text.H3>
          <Text.P size="small">
            The page you are looking for is not available
          </Text.P>
        </div>
      </section>
      <NotFoundShoes />
      <Link href={ROUT.HOME} className="self-center">
        <Button className="flex items-center gap-2 px-16">
          Go home <ArrowIcon width={24} height={24} />
        </Button>
      </Link>
    </main>
  );
}
