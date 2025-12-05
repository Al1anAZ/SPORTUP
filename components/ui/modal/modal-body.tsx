import { cn } from "../../../utils/cn";
import { useModalContext } from "./modal-provider";

export default function ModalBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { id } = useModalContext();
  return <div className={cn("", className)} id={`${id}-desc`}>{children}</div>;
}
