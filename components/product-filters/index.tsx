import { Text } from "../ui/typography";
import { Select } from "../ui/select";

export const ProductFilters = () => {
  return (
    <section className="grid grid-cols-4 gap-6 pb-500">
      <div className="flex flex-col gap-8">
        <div className="flex items-end justify-between border-b border-b-[var(--color-white)]">
          <Text.H3 className="text-[var(--color-blue)]">Filters</Text.H3>
          <Text.P size="small" className="text-[var(--color-blue-light)]">
            Results - 230
          </Text.P>
        </div>
        <div className="flex flex-col gap-6">
          {["Category", "Brand", "Size", "Color", "Price"].map(
            (item, index) => (
              <Select mode="multi" key={index}>
                <Select.Trigger placeholder={item} />
                <Select.List className="relative">
                  <Select.Item value={"sd"}>test</Select.Item>
                  <Select.Item value={"s3d"}>test</Select.Item>
                </Select.List>
              </Select>
            )
          )}
        </div>
      </div>
    </section>
  );
};
