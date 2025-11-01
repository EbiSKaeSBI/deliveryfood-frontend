import { Label } from "@/components/ui/shadcn/label";
import { Input } from "@/components/ui/shadcn/input";
import { Button } from "@/components/ui/shadcn/ui/button";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useRegister } from "@/components/form/mutations";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface IFormInput {
  name: string;
  email: string;
  password: string;
}

const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const registerMutation = useRegister();

  const onSubmit: SubmitHandler<IFormInput> = (data, e) => {
    e?.preventDefault();
    registerMutation.mutate(data);
  };

  useEffect(() => {
    if (registerMutation.isSuccess) {
      navigate("/");
    }
  }, [registerMutation.isSuccess, navigate]);

  return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Имя</Label>
            <Input
                id="name"
                type="text"
                placeholder="Введите ваше имя"
                className="w-full"
                {...register("name", {
                  required: "Имя обязательно для заполнения",
                  maxLength: {
                    value: 20,
                    message: "Имя не должно превышать 20 символов"
                  },
                  minLength: {
                    value: 2,
                    message: "Имя должно содержать минимум 2 символа"
                  }
                })}
            />
            {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Электронная почта</Label>
            <Input
                id="email"
                type="email"
                placeholder="Введите вашу почту"
                className="w-full"
                {...register("email", {
                  required: "Электронная почта обязательна",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Введите корректный адрес электронной почты",
                  },
                })}
            />
            {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Пароль</Label>
            <Input
                id="password"
                type="password"
                placeholder="Введите ваш пароль"
                className="w-full"
                {...register("password", {
                  required: "Пароль обязателен",
                  minLength: {
                    value: 8,
                    message: "Пароль должен содержать минимум 8 символов",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                    message: "Пароль должен содержать буквы в верхнем и нижнем регистре и цифры",
                  },
                })}
            />
            {errors.password && (
                <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
        </div>

        <Button
            type="submit"
            disabled={registerMutation.isPending}
            className="w-full"
        >
          {registerMutation.isPending ? "Регистрация..." : "Зарегистрироваться"}
        </Button>
      </form>
  );
};

export default RegisterForm;