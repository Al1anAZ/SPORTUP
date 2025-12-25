import { SelectMode, SelectValue, SelectItem } from "../select-provider";

export const triggerLabel = (
  mode: SelectMode,
  value: SelectValue<SelectMode>,
  placeholder: string
) => {
  if (mode === "multi") {
    const arr = value as SelectItem[];
    if (!arr?.length) return placeholder;
    if (arr.length === 1) return arr[0].label;
    return `${arr.length} selected`;
  }

  return (value as SelectItem | null)?.label ?? placeholder;
};
