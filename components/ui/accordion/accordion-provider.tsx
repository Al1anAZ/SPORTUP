"use client";

import { useContext, createContext, RefObject } from "react";

export type AccordionType = "single" | "multiple";

export type AccordionContextType = {
  id: string
  type: AccordionType;

  openItems: string[];
  toggleItem: (value: string) => void;
  isItemOpen: (value: string) => boolean;

  triggers: RefObject<HTMLButtonElement>[];
  registerTrigger: (ref: RefObject<HTMLButtonElement>) => void;
};

export const AccordionContext = createContext<AccordionContextType>(null!);
export const AccordionItemContext = createContext<{ value: string }>(null!);

export const useAccordionContext = () => {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error("useAccordionContext must be used within <Accordion.Root>");
  }
  return ctx;
};

export const useAccordionItemContext = () => {
  const ctx = useContext(AccordionItemContext);
  if (!ctx) {
    throw new Error("useAccordionItemContext must be used within <Accordion.Item>");
  }
  return ctx;
};
