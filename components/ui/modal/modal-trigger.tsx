"use client";
import { cn } from "../../../utils/cn";
import { useModalContext } from "./modal-provider";
import { Button } from "../button";

export default function ModalTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { setOpen } = useModalContext();
  return (
    <Button
      variant="icon"
      onClick={() => setOpen(true)}
      className={cn("", className)}
      aria-label="Open Modal"
      aria-haspopup="dialog"
    >
      {children}
    </Button>
  );
}
