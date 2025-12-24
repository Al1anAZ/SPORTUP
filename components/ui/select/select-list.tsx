"use client";
import { cn } from "../../../utils/cn";
import { useSelectContext } from "./select-provider";
import { HTMLMotionProps, motion } from "framer-motion";

export const SelectList = ({
  className,
  children,
  ...rest
}: React.ComponentPropsWithoutRef<"ul">) => {
  const { id, open } = useSelectContext();

  return (
    <motion.ul
      role="listbox"
      id={`${id}-list`}
      className={cn(
        "absolute z-10 mt-2 w-full overflow-hidden bg-[var(--color-gray-400)] invisible",
        open && "visible",
        className
      )}
      initial={false}
      animate={{
        height: open ? "auto" : 0,
        opacity: open ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      {...(rest as HTMLMotionProps<"ul">)}
    >
      {children}
    </motion.ul>
  );
};
