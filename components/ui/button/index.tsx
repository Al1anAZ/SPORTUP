import React from "react";
import { Loader } from "../loader";
import { cn } from "../../../utils/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "icon";
  loading?: boolean;
};

export const Button = ({
  children,
  variant = "primary",
  disabled,
  className,
  loading,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "flex items-center justify-center gap-2 px-6 py-2 font-medium text-md transition-all duration-150 select-none cursor-pointer";

  const variantStyles = {
    primary: cn(
      "text-[var(--color-white)] bg-[var(--color-orange-light)]",
      "hover:bg-[var(--color-orange)]",
      "active:bg-[var(--color-orange-dark)]",
      "focus:outline focus:outline-2 focus:outline-[var(--color-orange-light)]/50",
      (disabled || loading) &&
        "bg-[var(--color-gray-300)] text-[var(--color-gray-200)] cursor-not-allowed hover:bg-[var(--color-gray-300)] active:bg-[var(--color-gray-300)]"
    ),
    outline: cn(
      "text-[var(--color-white)] border border-[var(--color-blue-light)]",
      "hover:border-[var(--color-blue)] hover:text-[var(--color-blue-light)]",
      "active:border-[var(--color-blue-dark)] active:text-[var(--color-blue)]",
      "focus:outline focus:outline-2 focus:outline-[var(--color-blue-light)]/50",
      (disabled || loading) &&
        "border-[var(--color-gray-300)] text-[var(--color-gray-300)] cursor-not-allowed hover:border-[var(--color-gray-300)] active:border-[var(--color-gray-300)]"
    ),
    icon: cn(
      "p-0 m-0 border-none bg-transparent flex items-center justify-center gap-0 hover:text-[var(--color-blue-light)]"
    ),
  };

  return (
    <button
      disabled={disabled || loading}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {loading ? <Loader /> : children}
    </button>
  );
};
