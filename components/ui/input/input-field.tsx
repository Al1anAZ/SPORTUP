"use client";
import React, { ForwardedRef } from "react";
import { useInputContext } from "./ input-provider";
import { cn } from "../../../utils/cn";

export const InputField = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & { variant?: "primary" | "default" }
>(
  (
    { variant = "primary", ...props },
    forwardedRef: ForwardedRef<HTMLInputElement>
  ) => {
    const { id, fieldRef, inputType } = useInputContext();

    const setRefs = (el: HTMLInputElement | null) => {
      if (fieldRef) {
        fieldRef.current = el;
      }
      if (typeof forwardedRef === "function") {
        forwardedRef(el);
      } else if (forwardedRef) {
        (
          forwardedRef as React.MutableRefObject<HTMLInputElement | null>
        ).current = el;
      }
    };

    const variantStyles = {
      primary: cn(
        "my-input h-10 w-full px-3 pr-10 mt-2",
        "text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-gray-300)] placeholder:font-medium placeholder:opacity-60",
        "bg-transparent border border-[var(--color-gray-300)]",
        "outline-none transition-colors",
        "hover:border-[var(--color-blue)] focus:border-[var(--color-blue)]"
      ),
      default: "",
    };
    return (
      <input
        {...props}
        type={props.type ?? inputType}
        ref={setRefs}
        id={id}
        className={cn(variantStyles[variant], props.className)}
      />
    );
  }
);

InputField.displayName = "InputField";
