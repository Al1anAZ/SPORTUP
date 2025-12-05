import Image from "next/image";
import { Text } from "../components/ui/typography";
import Link from "next/link";
import { ArrowIcon, ChevronIcon } from "../components/icons";
import { ProductItem } from "../components/product-item";
import { Accordion } from "../components/ui/accordion";
import { featuresAccordion } from "../data/home-page";

export default async function Home() {
  return (
    <main className="flex flex-col gap-24 pt-10 pb-23">
      <section className="grid grid-cols-[1fr_1fr_260px] gap-y-14 gap-x-32">
        <div className="flex items-center gap-16 col-span-2">
          <Text.H1 className="border-b pb-6 text-nowrap">Step up</Text.H1>
          <Text.P size="small">
            Discover the perfect blend of style and comfort with our sports
            footwear
          </Text.P>
        </div>
        <div
          className="flex flex-col gap-4 bg-[var(--color-orange-light)] px-9 py-4 relative  
          before:content-[''] before:absolute before:bg-[var(--color-gray-400)] 
          before:w-4 before:h-4 before:rounded-full before:left-2 before:top-2"
        >
          <Text.H2>-30%</Text.H2>
          <Link href={"#"}>
            <Text.P link className="flex items-center gap-2">
              summer sales <ArrowIcon width={32} height={32} />
            </Text.P>
          </Link>
        </div>
        <div className="flex items-center gap-16 col-span-2">
          <Text.P size="small">
            Reach new heights by pushing your limits and fears
          </Text.P>
          <Text.H1 className="text-[var(--color-lime)] text-nowrap">
            [gear up]
          </Text.H1>
        </div>
        <Image
          src="/shoes-main-page.webp"
          alt="Shoes Main Page"
          width={233}
          height={159}
        />
        <div className="col-span-3 flex items-end justify-between">
          <ProductItem
            variant="circle"
            size="medium"
            product={{
              id: "2",
              price: 100,
              category: "Accessories",
              imgs: ["/product-temp.webp"],
            }}
          />
          <ProductItem
            variant="circle"
            size="small"
            product={{
              id: "2",
              price: 100,
              category: "Man",
              imgs: ["/product-temp.webp"],
            }}
          />
          <ProductItem
            variant="circle"
            size="small"
            product={{
              id: "2",
              price: 100,
              category: "Woman",
              imgs: ["/product-temp.webp"],
            }}
          />
          <ProductItem
            variant="circle"
            size="small"
            product={{
              id: "2",
              price: 100,
              category: "Kids",
              imgs: ["/product-temp.webp"],
            }}
          />
          <Link
            href={"#"}
            className="hover:text-[var(--color-blue-light)] transition-all duration-150"
          >
            <ChevronIcon width={204} height={204} />
          </Link>
        </div>
      </section>
      <section>
        <Accordion>
          {featuresAccordion.map((item, index) => (
            <Accordion.Item value={item.id} key={item.id}>
              <Accordion.Trigger>
                <Text.H2>
                  0{index + 1} {item.trigger}
                </Text.H2>
              </Accordion.Trigger>
              <Accordion.Content>
                <div className="grid grid-cols-6">
                  <Text.P size="small" className="col-start-2 col-end-4">
                    {item.content.text1}
                  </Text.P>
                  <Text.P size="small" className="col-start-5 col-end-7">
                    {item.content.text2}
                  </Text.P>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion>
      </section>
    </main>
  );
}
