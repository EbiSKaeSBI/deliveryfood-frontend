import type {
  AuthLogin,
  AuthRegister,
  AuthResponse,
} from "@/types/auth/auth.ts";
import { api } from "@/shared/api/api.ts";

export const AuthRequest = {
  login: async (data: AuthLogin): Promise<AuthResponse> =>
    await api
      .post<AuthResponse>("auth/login", data)
      .then((response) => response.data),
  register: async (data: AuthRegister): Promise<AuthResponse> =>
    await api
      .post<AuthResponse>("auth/register", data)
      .then((response) => response.data),
  logout: async () =>
    await api.post("auth/logout").then((response) => response.data),
  refreshToken: async (token: string) =>
    await api
      .post("auth/refreshToken", token)
      .then((response) => response.data),
};
