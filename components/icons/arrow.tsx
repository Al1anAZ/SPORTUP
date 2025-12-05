import React from "react";

export const ArrowIcon = (props: React.ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 20"
      fill="none"
      {...props}
    >
      <path
        d="M14 0L12.57 1.393L20.15 9H0V11H20.15L12.57 18.573L14 20L24 10L14 0Z"
        fill="currentColor"
      />
    </svg>
  );
};
