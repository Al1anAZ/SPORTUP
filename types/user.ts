import { ProfileInput } from "../components/user-info/model/schema";

export interface User {
  name: string;
  email: string;
  phone: string;
  avatarUrl: string;
  address: string;
}

export type EditableField = keyof ProfileInput;

export type UserInfoField = {
  key: EditableField;
  label: string;
  hint?: string;
};
