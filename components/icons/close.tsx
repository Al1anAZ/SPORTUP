import React from "react";

export const CloseIcon = (props: React.ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M9.4141 8L16 1.4141L14.5859 0L8 6.5859L1.4143 0L0 1.4141L6.5859 8L0 14.5859L1.4143 16L8 9.4141L14.5859 16L16 14.5859L9.4141 8Z"
        fill="currentColor"
      />
    </svg>
  );
};
