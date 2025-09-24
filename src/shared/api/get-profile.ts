import type { User } from "@/types/users/users.ts";
import { api } from "@/shared/api/api.ts";

export const getProfile = async (): Promise<User> =>
  api.get("auth/profile").then((response) => response.data);
