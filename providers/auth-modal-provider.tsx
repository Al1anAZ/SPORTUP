"use client";
import { AuthFormTypes, AuthModalContextProps } from "../types/auth";
import { createContext, useContext, useState, ReactNode } from "react";

const AuthModalContext = createContext<AuthModalContextProps>(null!);

export const AuthModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [authForm, setAuthForm] = useState<AuthFormTypes>("loginForm");

  const openModal = (form?: AuthFormTypes) => {
    if (form) setAuthForm(form);
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <AuthModalContext.Provider
      value={{ isOpen, openModal, closeModal, authForm, setAuthForm }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};

export const useAuthModal = () => {
  const context = useContext(AuthModalContext);
  if (!context) {
    throw new Error("useAuthModal must be used within AuthModalProvider");
  }
  return context;
};
