"use client";
import { cn } from "../../../utils/cn";
import { useSelectContext } from "./select-provider";

export const SelectList = (
  props: React.ComponentPropsWithoutRef<"ul"> & { maxHeight?: number | string }
) => {
  const { id, open } = useSelectContext();
  if (!open) return null;
  const { className, maxHeight = 240, ...rest } = props;
  return (
    <ul
      role="listbox"
      id={`${id}-list`}
      className={cn(
        "absolute z-10 mt-2 w-full overflow-auto rounded-md border bg-[var(--color-gray-400)] p-1",
        "border-[var(--color-gray-300)]",
        className
      )}
      style={{ maxHeight }}
      {...rest}
    />
  );
};
