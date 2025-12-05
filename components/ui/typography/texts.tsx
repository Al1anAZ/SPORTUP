import React from "react";
import { cn } from "../../../utils/cn";
import {
  linkClass,
  underlineClass,
  upperCase,
} from "../../../utils/typography-formatting";
import { TypographyProps } from "./type";

type ParagraphSize = "xsmall" | "small" | "medium" | "large";

const paragraphSizeClass: Record<ParagraphSize, string> = {
  large: "text-[20px]",
  medium: "text-[18px]",
  small: "text-[16px]",
  xsmall: "text-[14px]",
};

export const P = ({
  size = "medium",
  underline,
  uppercase,
  link,
  className,
  children,
  ...rest
}: TypographyProps & {
  size?: ParagraphSize;
} & React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
    {...rest}
    className={cn(
      "font-body font-medium",
      paragraphSizeClass[size],
      upperCase(uppercase),
      underlineClass(underline),
      linkClass(link),
      className
    )}
  >
    {children}
  </p>
);
