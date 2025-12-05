export interface ModalRootProps {
  id?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (value: boolean) => void;
}
