import { SelectMode, SelectValue } from "../select-provider";

export const isSelected = (v: string, mode: SelectMode, value: SelectValue<SelectMode>) => {
    if (mode === "single") return value === v;
    return value?.includes(v);
  };
  