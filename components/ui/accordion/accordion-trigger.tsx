"use client";

import { useEffect, useRef } from "react";
import { cn } from "../../../utils/cn";
import { MinusIcon, PlusIcon } from "../../icons";
import {
  useAccordionContext,
  useAccordionItemContext,
} from "./accordion-provider";
import { useRovingFocus } from "../../../hooks/use-roving-focus";

export const AccordionTrigger = (
  props: React.ComponentPropsWithoutRef<"button">
) => {
  const { id, triggers, registerTrigger, toggleItem, isItemOpen } =
    useAccordionContext();

  const { value } = useAccordionItemContext();
  const triggerRef = useRef<HTMLButtonElement>(null!);

  const handleKeyDown = useRovingFocus<HTMLButtonElement>({
    refs: triggers,
    onSelect: () => toggleItem(value),
  });
  
  const open = isItemOpen(value);

  useEffect(() => {
    registerTrigger(triggerRef);
  }, [registerTrigger]);


  return (
    <button
      ref={triggerRef}
      id={`${id}-trigger`}
      type="button"
      aria-controls={`${id}-content`}
      aria-expanded={open}
      onKeyDown={handleKeyDown}
      onClick={() => toggleItem(value)}
      className={cn(
        "accordion-trigger flex items-center justify-between w-full py-2 px-4 cursor-pointer text-[var(--color-blue)]",
        "hover:bg-[var(--color-blue-dark)] hover:text-[var(--color-white)] transition-all duration-150",
        open && "text-[var(--color-white)] bg-[var(--color-blue-dark)]",
        props.className
      )}
      {...props}
    >
      {props.children}
      {open ? (
        <MinusIcon width={28} height={28} />
      ) : (
        <PlusIcon width={28} height={28} />
      )}
    </button>
  );
};
