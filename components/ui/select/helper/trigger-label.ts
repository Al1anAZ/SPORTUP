import { SelectMode, SelectValue } from "../select-provider";

export const triggerLabel = (
  mode: SelectMode,
  value: SelectValue<SelectMode>,
  placeholder: string
) => {
  if (mode === "multi") {
    if (!value?.length) return placeholder;
    if (value?.length === 1) return value[0];
    return `${value?.length} selected`;
  }

  return value ?? placeholder;
};
