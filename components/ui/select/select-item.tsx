"use client";
import { cn } from "../../../utils/cn";
import { useSelectContext } from "./select-provider";

export const SelectItem = (
  props: React.ComponentPropsWithoutRef<"li"> & {
    value: string;
    disabled?: boolean;
  }
) => {
  const { value, className, children, disabled, ...rest } = props;
  const { selectedValue, setSelectedValue, setOpen } = useSelectContext();
  const selected = selectedValue === value;
  return (
    <li
      role="option"
      aria-selected={selected}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={() => {
        setSelectedValue(value);
        setOpen(false);
      }}
      className={cn(
        "cursor-pointer rounded-sm px-3 py-2 text-sm",
        "text-[var(--color-foreground)] hover:bg-[color:rgb(144_176_255_/_0.25)]",
        selected && "bg-[color:rgb(144_176_255_/_0.45)]",
        className
      )}
      {...rest}
    >
      {children ?? value}
    </li>
  );
};
