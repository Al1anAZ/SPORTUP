export const underlineClass = (u?: boolean) =>
  u ? "underline underline-offset-4" : "";

export const upperCase = (u?: boolean) =>
  u ? "text-transform: uppercase" : "";

export const linkClass = (u?: boolean) =>
  u ? "hover:underline hover:text-[var(--color-blue-light)] transition-all duration-150" : ""