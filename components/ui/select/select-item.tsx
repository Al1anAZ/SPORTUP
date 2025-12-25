"use client";
import { useEffect, useRef } from "react";
import { cn } from "../../../utils/cn";
import {
  SelectItem as SelectItemType,
  useSelectContext,
} from "./select-provider";
import { isSelected } from "./helper/is-selected";
import { Checkbox } from "../check-box";
import { modeStyle } from "./helper/mode-style";

export const SelectItem = (
  props: React.ComponentPropsWithoutRef<"li"> & {
    item: SelectItemType;
    disabled?: boolean;
  }
) => {
  const { item, className, children, disabled, onClick, ...rest } = props;
  const { selectedValue, handleSelectValue, setOpen, registerListItems, mode } =
    useSelectContext();
  const selected = isSelected(item, mode, selectedValue);
  const listItem = useRef<HTMLLIElement>(null!);

  useEffect(() => registerListItems(listItem), [registerListItems]);

  return (
    <li
      role="option"
      ref={listItem}
      aria-selected={selected}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={(e) => {
        handleSelectValue(item);
        onClick?.(e);
        if (mode === "single") setOpen(false);
      }}
      className={cn(
        "cursor-pointer text-sm border-b border-b-transparent",
        "flex items-center gap-2",
        "hover:text-[var(--color-blue-light)]",
        "outline-none",
        modeStyle(mode, selected!),
        className
      )}
      {...rest}
    >
      {mode === "multi" && (
        <Checkbox checked={selected!} className="pointer-events-none" />
      )}
      {children ?? item.label}
    </li>
  );
};
