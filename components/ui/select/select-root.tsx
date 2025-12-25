"use client";

import {
  ComponentPropsWithoutRef,
  RefObject,
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
} from "react";
import { cn } from "../../../utils/cn";
import { SelectContext, SelectMode, SelectItem, SelectValue } from "./select-provider";
import { useGenerateId } from "../../../hooks/use-generate-id";
import { useClickOutside } from "../../../hooks/use-click-outside";
import { useRovingFocus } from "../../../hooks/use-roving-focus";

type SelectRootProps = ComponentPropsWithoutRef<"div"> & {
  mode?: SelectMode;
  value?: SelectValue<SelectMode>;
  onChange?: (value: SelectValue<SelectMode>) => void;
};

export const SelectRoot = ({
  id,
  children,
  className,
  mode = "single",
  value,
  onChange,
  ...props
}: SelectRootProps) => {
  const generatedId = useGenerateId("select");
  const resolvedId = id || generatedId;
  const selectRef = useRef<HTMLDivElement>(null!);

  const [listItems, setListItems] = useState<RefObject<HTMLLIElement>[]>([]);
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<SelectValue<SelectMode>>(
    mode === "single" ? null : []
  );

  const isControlled = value !== undefined;

  const selectedValue = isControlled ? value : internalValue;  

  const registerListItems = useCallback((ref: RefObject<HTMLLIElement>) => {
    setListItems((prev) => (prev.includes(ref) ? prev : [...prev, ref]));
  }, []);

  const handleSelectValue = useCallback(
    (item: SelectItem) => {
      let nextValue: SelectValue<SelectMode>;

      if (mode === "single") {
        nextValue =
          (selectedValue as SelectItem)?.value === item.value ? null : item;
      } else {
        const arr = selectedValue as SelectItem[];
        nextValue = arr.some((v) => v.value === item.value)
          ? arr.filter((v) => v.value !== item.value)
          : [...arr, item];
      }

      if (!value) setInternalValue(nextValue);
      onChange?.(nextValue);
    },
    [mode, selectedValue, onChange, value]
  );

  const handleKeyDown = useRovingFocus<HTMLLIElement>({
    refs: listItems,
    active: open,
    onSelect: (index) => {
      listItems[index].current?.click();
    },
    onEscape: () => setOpen(false),
  });

  useClickOutside(selectRef, () => setOpen(false));


  useLayoutEffect(() => {
    if (isControlled && value !== internalValue) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setInternalValue(value);
    }
  }, [value, isControlled, internalValue]);    
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
