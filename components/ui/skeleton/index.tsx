import { cn } from "../../../utils/cn";

type SkeletonProps = {
  className?: string;
  variant?: "rounded" | "circle";
  color?: string;
  animate?: boolean;
};

export const Skeleton = ({
  className,
  variant = "rounded",
  color = "bg-[var(--color-gray-200)]",
  animate = true,
}: SkeletonProps) => {
  return (
    <div
      className={cn(
        `relative overflow-hidden ${color}`,
        variant === "circle" ? "rounded-full" : "rounded-lg",
        animate && "animate-pulse",
        className
      )}
      aria-hidden="true"
    />
  );
};
