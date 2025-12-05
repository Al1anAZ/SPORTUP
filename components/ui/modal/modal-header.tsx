import { CloseIcon } from "../../icons";
import { useModalContext } from "./modal-provider";
import { cn } from "../../../utils/cn";
import { Button } from "../button";

export default function ModalHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { id, setOpen } = useModalContext();
  return (
    <div className={cn("relative", className)} id={`${id}-title`}>
      {children}
      <Button
        variant="icon"
        className="absolute -right-5 -top-5"
        type="button"
        aria-label="Close Modal"
        onClick={() => setOpen(false)}
      >
        <CloseIcon width={16} height={16} />
      </Button>
    </div>
  );
}
