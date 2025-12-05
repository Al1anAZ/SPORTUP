import Link from "next/link";
import { Text } from "../ui/typography";
import { companyLinks, helpLinks } from "./data/footer.data";
import { SubscribeForm } from "../subscribe-form";
import Modal from "../ui/modal";

export const Footer = () => {
  return (
    <footer
      className="
        flex flex-col py-10 gap-10 relative
        before:content-[''] before:absolute before:bg-[var(--color-blue)]
        before:w-screen before:h-0.5 before:top-0 
        before:left-1/2 before:-translate-x-1/2
      "
    >
      <div className="flex justify-between flex-10 flex-wrap">
        <Link href="#">
          <Text.H3 className="hover:text-[var(--color-blue)]">sportup</Text.H3>
        </Link>
        <div className="flex flex-col gap-2">
          <Text.H4
            className="font-body text-[var(--color-blue)]"
            uppercase={false}
          >
            Receive exclusive promotions, private sales and news
          </Text.H4>
          <Modal>
            <SubscribeForm />
          </Modal>
        </div>
        <div className="flex flex-col gap-6">
          <Text.H4
            className="font-body text-[var(--color-blue)]"
            uppercase={false}
          >
            Company
          </Text.H4>
          <nav aria-label="Company navigation">
            <ul className="flex flex-col gap-2">
              {companyLinks.map(({ id, link, title }) => (
                <li key={id}>
                  <Link href={link}>
                    <Text.P
                      link
                      size="xsmall"
                      className="text-[var(--color-gray-200)]"
                    >
                      {title}
                    </Text.P>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-6">
          <Text.H4
            className="font-body text-[var(--color-blue)]"
            uppercase={false}
          >
            Help
          </Text.H4>
          <nav aria-label="Help navigation">
            <ul className="flex flex-col gap-2">
              {helpLinks.map(({ id, link, title }) => (
                <li key={id}>
                  <Link href={link}>
                    <Text.P
                      link
                      size="xsmall"
                      className="text-[var(--color-gray-200)]"
                    >
                      {title}
                    </Text.P>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <nav aria-label="Legal navigation">
        <ul className="flex items-center gap-20 flex-wrap">
          <li>
            <Link href="#">
              <Text.P
                link
                size="xsmall"
                className="text-[var(--color-gray-300)]"
              >
                Terms of use
              </Text.P>
            </Link>
          </li>

          <li>
            <Link href="#">
              <Text.P
                link
                size="xsmall"
                className="text-[var(--color-gray-300)]"
              >
                Privacy Policy
              </Text.P>
            </Link>
          </li>

          <li>
            <Link href="#">
              <Text.P
                link
                size="xsmall"
                className="text-[var(--color-gray-300)]"
              >
                All rights reserved
              </Text.P>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
