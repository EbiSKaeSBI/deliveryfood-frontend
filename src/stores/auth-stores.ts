import { AuthRequest } from "@/shared/api/auth-request.ts";
import type { User } from "@/types/users/users.ts";
import type { AuthLogin, AuthRegister } from "@/types/auth/auth.ts";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-hot-toast";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  error: string | null;

  login: (credentials: AuthLogin) => Promise<void>;
  register: (credentials: AuthRegister) => Promise<void>;
  logout: () => Promise<void>;
  clearErrors: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      refreshToken: null,
      isAuthenticated: false,
      isAdmin: false,
      isLoading: false,
      error: null,

      login: async (credentials: AuthLogin) => {
        set({ isLoading: true, error: null });

        try {
          const response = await AuthRequest.login(credentials);
          const isAdmin = response.user.role === "ADMIN";
            set({
              user: response.user,
              isAdmin: isAdmin,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });



          localStorage.setItem("token", response.accessToken);
          toast.success(response.message || "Успешный вход в систему!");
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
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
          localStorage.setItem("token", response.accessToken);
          toast.success(response.message || "Успешная регистрация!");
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
          isAuthenticated: false,
          isAdmin: false,
          error: null,
        });
        localStorage.clear();
        toast.success("Вы вышли!");
      },

      clearErrors: () => {
        set({ error: null });
      },
    }),
    {
      name: "Auth Store",
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        isAdmin: state.isAdmin,
      }),
    },
  ),
);
