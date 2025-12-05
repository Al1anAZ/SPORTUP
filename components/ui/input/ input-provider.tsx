"use client";
import { createContext, useContext, RefObject } from "react";

type InputContextType = {
  id: string;
  fieldRef: RefObject<HTMLInputElement | null>;
  inputType: React.HTMLInputTypeAttribute;
  setInputType: (inputType: React.HTMLInputTypeAttribute) => void;
};

export const InputContext = createContext<InputContextType>(null!);

export const useInputContext = () => {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error("useInputContext must be used within a InputProvider");
  }
  return context;
};
