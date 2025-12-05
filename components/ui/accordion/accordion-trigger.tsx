"use client";

import { useEffect, useRef } from "react";
import { cn } from "../../../utils/cn";
import { MinusIcon, PlusIcon } from "../../icons";
import {
  useAccordionContext,
  useAccordionItemContext,
} from "./accordion-provider";

export const AccordionTrigger = (
  props: React.ComponentPropsWithoutRef<"button">
) => {
  const { id, triggers, registerTrigger, toggleItem, isItemOpen } =
    useAccordionContext();

  const { value } = useAccordionItemContext();
  const triggerRef = useRef<HTMLButtonElement>(null!);

  const open = isItemOpen(value);

  useEffect(() => {
    registerTrigger(triggerRef);
  }, [registerTrigger]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const index = triggers.indexOf(triggerRef);
    const lastIndex = triggers.length - 1;

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleItem(value);
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = triggers[index + 1] ?? triggers[0];
      next?.current?.focus();
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = triggers[index - 1] ?? triggers[lastIndex];
      prev?.current?.focus();
    }

    if (e.key === "Home") {
      e.preventDefault();
      triggers[0]?.current?.focus();
    }

    if (e.key === "End") {
      e.preventDefault();
      triggers[lastIndex]?.current?.focus();
    }
  };

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
