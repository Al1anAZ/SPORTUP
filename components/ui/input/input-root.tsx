"use client";
import { ComponentPropsWithoutRef, useRef, useState } from "react";
import { InputContext } from "./ input-provider";
import { useGenerateId } from "../../../hooks/use-generate-id";

export const InputRoot = ({
  id,
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  const generatedId = useGenerateId("input");
  const resolvedId = id || generatedId;
  const fieldRef = useRef<HTMLInputElement | null>(null);
  const [inputType, setInputType] =
    useState<React.HTMLInputTypeAttribute>("text");
  return (
    <InputContext.Provider
      value={{ id: resolvedId, fieldRef, inputType, setInputType }}
    >
      <div {...props} className={`input relative ${props.className}`}>
        {children}
      </div>
    </InputContext.Provider>
  );
};
