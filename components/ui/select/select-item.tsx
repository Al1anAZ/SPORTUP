"use client";
import { useEffect, useRef } from "react";
import { cn } from "../../../utils/cn";
import { useSelectContext } from "./select-provider";

export const SelectItem = (
  props: React.ComponentPropsWithoutRef<"li"> & {
    value: string;
    disabled?: boolean;
  }
) => {
  const { value, className, children, disabled, ...rest } = props;
  const { selectedValue, setSelectedValue, setOpen, registerListItems } =
    useSelectContext();
  const selected = selectedValue === value;
  const listItem = useRef<HTMLLIElement>(null!);

  useEffect(() => registerListItems(listItem), [registerListItems]);

  return (
    <li
      role="option"
      ref={listItem}
      aria-selected={selected}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={() => {
        setSelectedValue(value);
        setOpen(false);
      }}
      className={cn(
        "cursor-pointer py-2 text-sm border-b border-b-transparent",
        "hover:border-b-[var(--color-blue-light)] hover:text-[var(--color-blue-light)]",
        "outline-none focus:border-b-[var(--color-white)]",
        selected &&
          "border-b-[var(--color-blue-light)] text-[var(--color-blue-light)]",
        className
      )}
      {...rest}
    >
      {children ?? value}
    </li>
  );
};
