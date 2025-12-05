"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useModalContext } from "./modal-provider";
import useModalScrollLock from "./hooks/use-modal-scroll-lock";
import ModalPortal from "./modal-portal";
import { cn } from "../../../utils/cn";
import useModalEscape from "../../../hooks/use-is-escape";

export default function ModalContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { id, open, setOpen } = useModalContext();
  useModalEscape(() => setOpen(false));
  useModalScrollLock(open);

  return (
    <ModalPortal>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          >
            <motion.div
              className={cn(
                "bg-[var(--color-gray-400)] border border-[var(--color-orange-light)]  p-10 min-w-[360px] max-w-[90%]",
                className
              )}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`${id}-title`}
              aria-describedby={`${id}-desc`}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ModalPortal>
  );
}
