"use client";
import { cn } from "../../../utils/cn";
import { useInputContext } from "./ input-provider";

export const InputLabel = (
  props: React.ComponentPropsWithoutRef<"label"> & {
    children?: React.ReactNode;
  }
) => {
  const { id } = useInputContext();
  return (
    <label
      {...props}
      className={cn(
        "text-[var(--color-gray-100)] font-medium",
        props.className
      )}
      id={`${id}-label`}
      htmlFor={id}
    >
      {props.children}
    </label>
  );
};
