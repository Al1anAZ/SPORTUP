"use client"

import { ComponentPropsWithoutRef } from "react";
import { AccordionItemContext } from "./accordion-provider";
import { cn } from "../../../utils/cn";

export const AccordionItem = ({
  value,
  ...props
}: ComponentPropsWithoutRef<"div"> & { value: string }) => {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div className={cn("", props.className)} role="presentation">
        {props.children}
      </div>
    </AccordionItemContext.Provider>
  );
};
