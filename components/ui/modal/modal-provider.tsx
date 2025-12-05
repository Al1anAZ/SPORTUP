"use client";

import { createContext, useContext } from "react";

type ModalContextType = {
  id: string;
  open: boolean;
  setOpen: (val: boolean) => void;
};

export const ModalContext = createContext<ModalContextType>(null!);

export function useModalContext() {
  const ctx = useContext(ModalContext);
  if (!ctx)
    throw new Error("useModalContext must be used within a Modal provider");
  return ctx;
}
