"use client";

import { cn } from "../../../utils/cn";
import {
  useAccordionContext,
  useAccordionItemContext,
} from "./accordion-provider";
import { motion, AnimatePresence } from "framer-motion";

export const AccordionContent = (
  props: React.ComponentPropsWithoutRef<"div">
) => {
  const { id, isItemOpen } = useAccordionContext();
  const { value } = useAccordionItemContext();

  const open = isItemOpen(value)
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          id={`${id}-content`}
          role="region"
          aria-labelledby={`${id}-trigger`}
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { height: "auto", opacity: 1 },
            collapsed: { height: 0, opacity: 0 },
          }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className={cn("overflow-hidden", props.className)}
        >
          <div className="py-2">{props.children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
