"use client";

import { useState } from "react";
import { ModalContext } from "./modal-provider";
import { ModalRootProps } from "./type";
import { useGenerateId } from "../../../hooks/use-generate-id";

export default function ModalRoot({ id, children, defaultOpen = false, open: controlledOpen, onOpenChange }: ModalRootProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const generatedId = useGenerateId("modal");
  const resolvedId = id || generatedId;
  const isControlled = typeof controlledOpen === "boolean";
  const open = isControlled ? controlledOpen : internalOpen;

  const setOpen = (val: boolean) => {
    if (!isControlled) setInternalOpen(val);
    onOpenChange?.(val);
  };

  return (
    <ModalContext.Provider value={{ id: resolvedId, open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
}
