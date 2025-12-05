import React from "react";

export const ChevronIcon = (props: React.ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <path
        d="M22.0001 16L12.0001 26L10.6001 24.6L19.2001 16L10.6001 7.4L12.0001 6L22.0001 16Z"
        fill="currentColor"
      />
    </svg>
  );
};
