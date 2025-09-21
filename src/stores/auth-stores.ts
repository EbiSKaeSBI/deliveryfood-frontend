import { AuthRequest } from "@/components/form/api/auth-request.ts";
import type { User } from "@/types/users/users.ts";
import type { AuthLogin, AuthRegister } from "@/types/auth/auth.ts";
import { create } from "zustand/react";
import { persist } from "zustand/middleware";
import { toast } from "react-hot-toast";

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  login: (credentials: AuthLogin) => Promise<void>;
  register: (credentials: AuthRegister) => Promise<void>;
  logout: () => Promise<void>;
  clearErrors: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (credentials: AuthLogin) => {
        set({ isLoading: true, error: null });

        try {
          const response: { user: User } = await AuthRequest.login(credentials);
          set({
            user: response.user,
            token: response.token,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } catch (error) {
          set({
            isLoading: false,
            error: error instanceof Error ? error.message : "Ошибка входа",
          });
          throw error;
        }
      },

      register: async (userData: AuthRegister) => {
        set({ isLoading: true, error: null });

        try {
          const response = await AuthRequest.register(userData);
          set({
            user: response.user,
            token: response.token,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } catch (error) {
          set({
            isLoading: false,
            error:
              error instanceof Error ? error.message : "Ошибка регистрации",
          });
          throw error;
        }
      },
      logout: async () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          error: null,
        });
        toast.success("Вы вышли!");
      },
      clearErrors: async () => {
        set({ error: null });
      },
    }),
    {
      name: "Auth Store",
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);
