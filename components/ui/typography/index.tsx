import { H1, H2, H3, H4 } from "./titles";
import { P } from "./texts";

export const Text = Object.assign(
  ({ children }: { children?: React.ReactNode }) => <>{children}</>,
  { H1, H2, H3, H4, P }
);
