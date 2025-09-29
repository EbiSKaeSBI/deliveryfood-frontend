export type UserRole = "ADMIN" | "USER";

type Delivery = {
  id: string;
  address: string;
  phone: string;
  status: string;
  totalAmount: number;
  createdAt: Date;
  updatedAt: Date;
  comment: string | null;
  partnerId: string;
  userId: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  deliveries: Delivery[];
  createdAt: Date;
  updatedAt: Date;
};
