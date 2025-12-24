import { SelectMode } from "../select-provider";

export const modeStyle = (mode: SelectMode, selected: boolean) => {
  switch (mode) {
    case "multi":
      return "focus:text-[var(--color-blue-light)]";
    case "single":
      return selected
        ? "border-b-[var(--color-blue-light)] text-[var(--color-blue-light)]"
        : "hover:border-b-[var(--color-blue-light)] focus:text-[var(--color-blue-light)] focus:border-b-[var(--color-blue-light)]";
  }
};
