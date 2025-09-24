import type { User } from "@/types/users/users.ts";

export type AuthLogin = {
  email: string;
  password: string;
};

export type AuthRegister = {
  name: string;
  email: string;
  password: string;
  phone?: string;
};

export type AuthResponse = {
  message: string;
  user: User;
  accessToken: string;
  refreshToken: string;
};
