"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../../utils/cn";
import { CheckIcon } from "../../icons";

type CheckboxProps = {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
};

export const Checkbox = ({
  checked,
  onChange,
  disabled,
  label,
  className,
}: CheckboxProps) => {
  return (
    <label
      className={cn(
        "inline-flex items-center gap-3 cursor-pointer select-none",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="sr-only"
      />

      <span
        aria-hidden
        className={cn(
          "relative flex h-5 w-5 items-center justify-center",
          "border transition-colors",
          checked ? "border-[var(--color-blue)]" : "border-white"
        )}
      >
        <AnimatePresence>
          {checked && (
            <motion.svg
              key="check"
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 stroke-[3] stroke-[var(--color-blue)]"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
              <CheckIcon width={24} height={24} />
            </motion.svg>
          )}
        </AnimatePresence>
      </span>

      {label && <span className="text-sm">{label}</span>}
    </label>
  );
};
