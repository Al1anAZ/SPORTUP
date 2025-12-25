import { SelectMode, SelectValue, SelectItem } from "../select-provider";

export const isSelected = (
  item: SelectItem,
  mode: SelectMode,
  value: SelectValue<SelectMode>
) => {
  if (mode === "single") {
    return (value as SelectItem | null)?.value === item?.value;
  }
  return (value as SelectItem[])?.some((v) => v?.value === item?.value);
};
