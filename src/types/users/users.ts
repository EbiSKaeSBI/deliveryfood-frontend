export type UserRole = "ADMIN" | "USER";

export type User = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
};
