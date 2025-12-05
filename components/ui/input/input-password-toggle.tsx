"use client";
import React, { useState, useEffect } from "react";

import { cn } from "../../../utils/cn";
import { useInputContext } from "./ input-provider";
import { EyeIcon } from "../../icons";

export const InputPasswordToggle = (
  props: React.ComponentPropsWithoutRef<"button">
) => {
  const { setInputType } = useInputContext();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setInputType("password");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = () => {
    const nextVisible = !visible;
    setInputType(nextVisible ? "text" : "password");
    setVisible(nextVisible);
  };

  return (
    <button
      type="button"
      aria-label={visible ? "Hide password" : "Show password"}
      aria-pressed={visible}
      onClick={toggle}
      {...props}
      className={cn(
        "text-sm text-[var(--color-gray-300)] hover:text-[var(--color-foreground)]",
        props.className
      )}
    >
      <EyeIcon isOpen={!visible} width={24} height={24} />
    </button>
  );
};
