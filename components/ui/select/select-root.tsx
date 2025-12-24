"use client";
import { ComponentPropsWithoutRef, RefObject, useRef, useState } from "react";
import { cn } from "../../../utils/cn";
import { SelectContext, SelectMode, SelectValue } from "./select-provider";
import { useGenerateId } from "../../../hooks/use-generate-id";
import { useClickOutside } from "../../../hooks/use-click-outside";
import { useRovingFocus } from "../../../hooks/use-roving-focus";

export const SelectRoot = ({
  id,
  children,
  className,
  mode = "single",
  ...props
}: ComponentPropsWithoutRef<"div"> & { mode?: SelectMode }) => {
  const generatedId = useGenerateId("select");
  const resolvedId = id || generatedId;
  const selectRef = useRef<HTMLDivElement>(null!);
  const [listItems, setListItems] = useState<RefObject<HTMLLIElement>[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<SelectValue<SelectMode>>(
    mode === "single" ? null : []
  );

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

  const handleSelectValue = (newValue: string) => {
    setSelectedValue((prev) => {
      if (mode === "single") {
        return prev === newValue ? null : newValue;
      }

      if (Array.isArray(prev)) {
        return prev.includes(newValue)
          ? prev.filter((v) => v !== newValue)
          : [...prev, newValue];
      }

      return prev;
    });
  };

  useClickOutside(selectRef, () => setOpen(false));
  return (
    <SelectContext.Provider
      value={{
        id: resolvedId,
        open,
        setOpen,
        selectedValue,
        handleSelectValue,
        registerListItems,
        listItems,
        mode,
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
