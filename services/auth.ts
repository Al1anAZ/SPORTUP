import { LoginInput, RegisterInput } from "../components/auth/model/schema";
import { api } from "../lib/axios-client";
import { AuthResponse } from "../types/api-response";

export const AuthService = {
  login: async (loginData: LoginInput) => {
    const loginResponse = await api.post<AuthResponse>(
      "/auth/login",
      loginData
    );
    return loginResponse.data;
  },
  register: async (registerData: RegisterInput) => {
    const registerResponse = await api.post<AuthResponse>(
      "/auth/register",
      registerData
    );
    return registerResponse.data;
  },
  refreshToken: async () => {
    const newTokenData = await api.post<AuthResponse>("/auth/refresh-token");
    return newTokenData.data;
  },
  logout: async () => {
    await api.post("/auth/logout");
    return;
  },
};
