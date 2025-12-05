"use client";
import { useInputContext } from "./ input-provider";
import { cn } from "../../../utils/cn";

export const InputHint = (
  props: React.ComponentPropsWithoutRef<"p"> & { children?: React.ReactNode }
) => {
  const { id } = useInputContext();
  return (
    <p
      {...props}
      className={cn(
        "text-sm text-[var(--color-gray-300)] mt-2",
        props.className
      )}
      id={`${id}-hint`}
      role="note"
    >
      {props.children}
    </p>
  );
};
