"use client"
import { createContext, RefObject, useContext } from "react";

type SelectContextType = {
  id: string;
  open: boolean;
  setOpen: (next: boolean) => void;
  selectedValue: string | null;
  setSelectedValue: (value: string | null) => void;

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
