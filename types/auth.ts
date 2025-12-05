import { AuthResponse } from "./api-response";
import { User } from "./user";

export type AuthStatus = "hydrating" | "auth" | "guest";

export type AuthState = {
  user: User | null;
  authenticationStatus: AuthStatus;
  accessToken: string | null;

  setUser: (data: User) => void;
  login: (data: Partial<AuthResponse>) => void;
  logout: () => void;
  init: () => void;

  updateUser: (data: Partial<User>) => void;
};


export type AuthFormTypes = "loginForm" | "registerForm";

export interface AuthModalContextProps {
  isOpen: boolean;
  openModal: (form?: AuthFormTypes) => void;
  closeModal: () => void;
  authForm: AuthFormTypes;
  setAuthForm: (form: AuthFormTypes) => void;
}
