import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/stores/auth-stores.ts";

export const useRegister = () => {
  const { register } = useAuthStore();
  return useMutation({
    mutationFn: register,
    onSuccess: () => {
      toast.success("Вы успешно зарегистрировались");
    },
    onError: (error) => {
      toast.error(
        // @ts-ignore
        error.response?.data.message || "Произошла ошибка при регистрации",
      );
    },
  });
};

export const useLogin = () => {
  const { login } = useAuthStore();
  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      toast.success("Вы успешно вошли в систему");
    },
    onError: (error) => {
      // @ts-ignore
      toast.error(error.response?.data.message || "Произошла ошибка при входе");
    },
  });
};
