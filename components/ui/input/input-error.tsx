"use client";
import React from "react";
import { useInputContext } from "./ input-provider";

export const InputError = (
  props: React.ComponentPropsWithoutRef<"p"> & { children?: React.ReactNode }
) => {
  const { id } = useInputContext();
  return (
    <p
      className="text-sm text-[var(--color-gray-200)] mt-2"
      id={`${id}-error`}
      role="alert"
      aria-atomic="true"
    >
      {props.children}
    </p>
  );
};
