"use client";
import React from "react";
import { cn } from "../../../utils/cn";

export const InputRightSlot = (
  props: React.ComponentPropsWithoutRef<"div"> & { children?: React.ReactNode }
) => {
  return (
    <div
      {...props}
      className={cn(
        "input-right-slot pointer-events-auto inset-y-0 right-2 flex items-center gap-2 h-fit top-7",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};
