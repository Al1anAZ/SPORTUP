import { cn } from "../../utils/cn";
import { Text } from "../ui/typography";

type PartnerItemProps = {
  name: string;
  className?: string;
};

export const PartnerItem = ({ name, className }: PartnerItemProps) => {
  return (
    <div className={cn("border border-[var(--color-gray-100)] px-8 rounded-full h-22", className)}>
      <Text.H2 className="text-[var(--color-blue)]">{name}</Text.H2>
    </div>
  );
};
