import React from "react";
import { cn } from "../../../utils/cn";
import {
  underlineClass,
  upperCase,
} from "../../../utils/typography-formatting";
import { TypographyProps } from "./type";

export const H1 = ({
  underline,
  uppercase = true,
  className,
  children,
  ...rest
}: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) => (
  <h1
    {...rest}
    className={cn(
      "font-heading font-bold tracking-wide",
      "text-[152px] leading-[0.95]",
      "transition-all duration-150",
      underlineClass(underline),
      upperCase(uppercase),
      className
    )}
  >
    {children}
  </h1>
);

export const H2 = ({
  underline,
  uppercase = true,
  className,
  children,
  ...rest
}: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2
    {...rest}
    className={cn(
      "font-heading font-bold tracking-wide",
      "text-[64px] leading-tight",
      "transition-all duration-150",
      underlineClass(underline),
      upperCase(uppercase),
      className
    )}
  >
    {children}
  </h2>
);

export const H3 = ({
  underline,
  uppercase = true,
  className,
  children,
  ...rest
}: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    {...rest}
    className={cn(
      "font-heading font-bold tracking-wide",
      "text-[32px] leading-tight",
      "transition-all duration-150",
      underlineClass(underline),
      upperCase(uppercase),
      className
    )}
  >
    {children}
  </h3>
);

export const H4 = ({
  underline,
  uppercase = true,
  className,
  children,
  ...rest
}: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) => (
  <h4
    {...rest}
    className={cn(
      "font-heading font-normal",
      "text-[16px] leading-snug",
      "transition-all duration-150",
      underlineClass(underline),
      upperCase(uppercase),
      className
    )}
  >
    {children}
  </h4>
);
