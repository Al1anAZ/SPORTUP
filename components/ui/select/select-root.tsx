"use client";
import { ComponentPropsWithoutRef, RefObject, useRef, useState } from "react";
import { cn } from "../../../utils/cn";
import { SelectContext } from "./select-provider";
import { useGenerateId } from "../../../hooks/use-generate-id";
import { useClickOutside } from "../../../hooks/use-click-outside";
import { useRovingFocus } from "../../../hooks/use-roving-focus";

export const SelectRoot = ({
  id,
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  const generatedId = useGenerateId("select");
  const resolvedId = id || generatedId;
  const selectRef = useRef<HTMLDivElement>(null!);
  const [listItems, setListItems] = useState<RefObject<HTMLLIElement>[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const registerListItems = (ref: RefObject<HTMLLIElement>) => {
    setListItems((prev) => (prev.includes(ref) ? prev : [...prev, ref]));
  };
  
  const handleKeyDown = useRovingFocus<HTMLLIElement>({
    refs: listItems,
    active: open,
    onSelect: (index) => {
      listItems[index].current?.click();
    },
    onEscape: () => setOpen(false),
  });

  useClickOutside(selectRef, () => setOpen(false));
  return (
    <SelectContext.Provider
      value={{
        id: resolvedId,
        open,
        setOpen,
        selectedValue,
        setSelectedValue,
        registerListItems,
        listItems,
      }}
    >
      <div
        {...props}
        className={cn("relative", className)}
        ref={selectRef}
        onKeyDown={handleKeyDown}
      >
        {children}
      </div>
    </SelectContext.Provider>
  );
};
