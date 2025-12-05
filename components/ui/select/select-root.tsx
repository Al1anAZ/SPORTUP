"use client";
import { ComponentPropsWithoutRef, useState } from "react";
import { cn } from "../../../utils/cn";
import { SelectContext } from "./select-provider";
import { useGenerateId } from "../../../hooks/use-generate-id";

export const SelectRoot = ({
  id,
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  const generatedId = useGenerateId("select");
  const resolvedId = id || generatedId;
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  return (
    <SelectContext.Provider
      value={{ id: resolvedId, open, setOpen, selectedValue, setSelectedValue }}
    >
      <div {...props} className={cn("relative", className)} >
        {children}
      </div>
    </SelectContext.Provider>
  );
};
