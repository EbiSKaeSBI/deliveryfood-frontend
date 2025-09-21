import type { AuthLogin, AuthRegister } from "@/types/auth/auth.ts";
import axios from "axios";
import type { User } from "@/types/users/users.ts";

export const AuthRequest = {
  login: async (data: AuthLogin) =>
    await axios
      .post<{ user: User }>("http://localhost:4000/auth/login", data)
      .then((response) => response.data),
  register: async (data: AuthRegister) =>
    await axios
      .post("http://localhost:4000/auth/register", data)
      .then((response) => response.data),
  logout: async () =>
    await axios
      .post("http://localhost:4000/auth/logout")
      .then((response) => response.data),
};
