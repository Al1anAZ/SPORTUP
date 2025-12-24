"use client";
import { cn } from "../../../utils/cn";
import { useSelectContext } from "./select-provider";
import { ChevronIcon } from "../../icons";
import { Text } from "../typography";

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
        "flex h-10 w-full items-center justify-between border-b gap-2 bg-transparent cursor-pointer",
        "hover:border-[var(--color-blue)] hover:text-[var(--color-blue)] transition-colors",
        open && "text-[var(--color-blue)] border-[var(--color-blue)]",
        className
      )}
      {...rest}
    >
      <Text.P className="truncate" size="small">{label}</Text.P>
      <ChevronIcon
        width={24}
        height={24}
        className={cn(
          "transition-transform",
          open ? "rotate-90" : "-rotate-90"
        )}
      />
    </button>
  );
};
