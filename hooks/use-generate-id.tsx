import { useId, useState } from "react";

export function useGenerateId(prefix: string = "id") {
  const reactId = useId();
  const [uniqueId] = useState(() => `${prefix}-${reactId}`);

  return uniqueId;
}
