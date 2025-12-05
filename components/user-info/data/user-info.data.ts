import { UserInfoField } from "../../../types/user";

export const userInfofields: readonly UserInfoField[] = [
  { key: "name", label: "Name" },
  {
    key: "address",
    label: "Address",
    hint: "This address is used to autocomplete your orders",
  },
  { key: "phone", label: "Phone Number" },
  { key: "email", label: "Email Address" },
] as const;
