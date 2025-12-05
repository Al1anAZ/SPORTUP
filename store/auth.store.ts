import { UserService } from "../services/user";
import { AuthState } from "../types/auth";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      authenticationStatus: "hydrating",
      accessToken: null,

      updateUser: (data) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...data } : null,
        })),
      
      init: async () => {
        const { accessToken, logout, setUser } = get();
        if (!accessToken) {
          set({ authenticationStatus: "guest", user: null });
          return;
        }

        try {
          const user = await UserService.getUserData();
          setUser(user);
          set({ authenticationStatus: "auth" });
        } catch (error) {
          console.error(error)
          logout();
        }
      },

      login: (data) =>
        set({
          accessToken: data.accessToken,
          authenticationStatus: "auth",
        }),
      setUser: (data) =>
        set({
          user: data,
        }),
      logout: async () => {
        set({
          user: null,
          authenticationStatus: "guest",
          accessToken: null,
        });
      },
    }),
    {
      name: "auth-store",
      partialize: (state) => ({
        accessToken: state.accessToken,
        authenticationStatus: state.authenticationStatus,
      }),
    }
  )
);
