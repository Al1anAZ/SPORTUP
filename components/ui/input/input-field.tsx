"use client";
import React, { ForwardedRef } from "react";
import { useInputContext } from "./ input-provider";
import { cn } from "../../../utils/cn";

export const InputField = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>((props, forwardedRef: ForwardedRef<HTMLInputElement>) => {
  const { id, fieldRef, inputType } = useInputContext();

  const setRefs = (el: HTMLInputElement | null) => {
    if (fieldRef) {
      (fieldRef as any).current = el;
    }
    if (typeof forwardedRef === "function") {
      forwardedRef(el);
    } else if (forwardedRef && "current" in (forwardedRef as any)) {
      (forwardedRef as any).current = el;
    }
  };

  return (
    <input
      {...props}
      type={props.type ?? inputType}
      ref={setRefs}
      id={id}
      className={cn(
        "my-input h-10 w-full px-3 pr-10 mt-2",
        "text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-gray-300)] placeholder:font-medium placeholder:opacity-60",
        "bg-transparent border border-[var(--color-gray-300)]",
        "outline-none transition-colors",
        "hover:border-[var(--color-blue)] focus:border-[var(--color-blue)]",
        props.className
      )}
    />
  );
});
