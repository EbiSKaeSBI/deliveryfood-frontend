import type {
  AuthLogin,
  AuthRegister,
  AuthResponse,
} from "@/types/auth/auth.ts";
import { api } from "@/shared/api/api.ts";

export const AuthRequest = {
  login: async (data: AuthLogin): Promise<AuthResponse> =>
    await api
      .post<AuthResponse>("http://localhost:4000/auth/login", data)
      .then((response) => response.data),
  register: async (data: AuthRegister): Promise<AuthResponse> =>
    await api
      .post<AuthResponse>("http://localhost:4000/auth/register", data)
      .then((response) => response.data),
  logout: async () =>
    await api
      .post("http://localhost:4000/auth/logout")
      .then((response) => response.data),
};
