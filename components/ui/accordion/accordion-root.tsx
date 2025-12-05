"use client";

import { AccordionContext, AccordionType } from "./accordion-provider";
import { ComponentPropsWithoutRef, RefObject, useState } from "react";
import { useGenerateId } from "../../../hooks/use-generate-id";
import { cn } from "../../../utils/cn";

type AccordionRootProps = ComponentPropsWithoutRef<"div"> & {
  type?: AccordionType;
};

export const AccordionRoot = ({
  id,
  children,
  type = "single",
  ...props
}: AccordionRootProps) => {
  const generatedId = useGenerateId("accordion");
  const resolvedId = id || generatedId;
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [triggers, setTriggers] = useState<RefObject<HTMLButtonElement>[]>([]);
  const toggleItem = (value: string) => {
    setOpenItems((current) => {
      if (type === "multiple") {
        return current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value];
      }

      return current[0] === value ? [] : [value];
    });
  };

  const isItemOpen = (value: string) => openItems.includes(value);

  const registerTrigger = (ref: RefObject<HTMLButtonElement>) => {
    setTriggers((prev) => (prev.includes(ref) ? prev : [...prev, ref]));
  };

  return (
    <AccordionContext.Provider
      value={{
        id: resolvedId,
        type,
        openItems,
        toggleItem,
        isItemOpen,
        triggers,
        registerTrigger,
      }}
    >
      <div {...props} className={cn("relative", props.className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};
