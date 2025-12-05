import { cn } from "../../../utils/cn";

export default function ModalFooter({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex justify-end gap-2", className)}>{children}</div>
  );
}
