export type AuthLogin = {
  email: string;
  password: string;
};

export type AuthRegister = {
  name: string;
  email: string;
  password: string;
};

export type AuthResponse = {
  user: {
    id: string;
    name: string;
    email: string;
  };
  token: string;
};
