import { cn } from "../../../utils/cn";
export const Loader = ({ className }: { className?: string }) => {
  return (
    <span
      className={cn("loader", className)}
    >
      <span className="sr-only">Loading</span>
    </span>
  );
};
