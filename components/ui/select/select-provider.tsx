"use client";
import { createContext, RefObject, useContext } from "react";

export type SelectMode = "single" | "multi";

export type SelectItem = { value: string; label: string };

export type SelectValue<T extends SelectMode> =
  T extends "single" ? SelectItem | null : SelectItem[];

type SelectContextType = {
  id: string;
  open: boolean;
  setOpen: (next: boolean) => void;
  mode: SelectMode;
  selectedValue: SelectValue<SelectMode>;
  handleSelectValue: (item: SelectItem) => void;
  listItems: RefObject<HTMLLIElement>[];
  registerListItems: (ref: RefObject<HTMLLIElement>) => void;
};

export const SelectContext = createContext<SelectContextType>(null!);

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context)
    throw new Error("useSelectContext must be used within a Select provider");
  return context;
};
