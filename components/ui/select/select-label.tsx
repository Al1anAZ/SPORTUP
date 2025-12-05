"use client";
import { cn } from "../../../utils/cn";
import { useSelectContext } from "./select-provider";

export const SelectLabel = (props: React.ComponentPropsWithoutRef<"label">) => {
  const { id } = useSelectContext();
  return (
    <label
      {...props}
      className={cn("text-sm text-[var(--color-gray-300)]", props.className)}
      htmlFor={`${id}-trigger`}
    />
  );
};
