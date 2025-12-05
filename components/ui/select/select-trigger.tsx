"use client";
import { cn } from "../../../utils/cn";
import { useSelectContext } from "./select-provider";
import { ChevronIcon } from "../../icons";

export const SelectTrigger = (
  props: React.ComponentPropsWithoutRef<"button"> & { placeholder?: string }
) => {
  const { id, open, setOpen, selectedValue } = useSelectContext();
  const { placeholder = "Text", className, ...rest } = props;
  const label = selectedValue ?? placeholder;
  return (
    <button
      id={`${id}-trigger`}
      type="button"
      aria-haspopup="listbox"
      aria-controls={`${id}-list`}
      aria-expanded={open}
      onClick={() => setOpen(!open)}
      className={cn(
        "flex h-10 w-full items-center justify-between gap-2 rounded-md border bg-transparent px-3",
        "border-[var(--color-gray-300)] text-sm text-[var(--color-foreground)]",
        "hover:border-[var(--color-blue)] focus:border-[var(--color-blue)] outline-none transition-colors",
        className
      )}
      {...rest}
    >
      <span className="truncate opacity-90">{label}</span>
      <ChevronIcon
        className={cn(
          "h-4 w-4 text-[var(--color-gray-300)] transition-transform",
          open && "rotate-90"
        )}
      />
    </button>
  );
};
