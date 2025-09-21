import { Label } from "@/components/ui/shadcn/label.tsx";
import { Input } from "@/components/ui/shadcn/input.tsx";
import { Button } from "@/components/ui/shadcn/ui/button.tsx";
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

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    registerMutation.mutate(data);
  };

  useEffect(() => {
    if (registerMutation.isSuccess) {
      navigate("/");
    }
  }, [registerMutation.isSuccess]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Имя</Label>
          <Input
            placeholder="Введите имя"
            className="w-full"
            {...register("name", {
              required: "Имя обязательно",
              maxLength: 20,
            })}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name?.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="email">Почта</Label>
          <Input
            placeholder="Введите почту"
            {...register("email", {
              required: "Почта обязательно",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Введите корректный email",
              },
            })}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email?.message}</p>
          )}
        </div>
      </div>
      <div>
        <Label htmlFor="password">Пароль</Label>
        <Input
          type="password"
          placeholder="Введите пароль"
          {...register("password", {
            required: "Пароль обязателен",
            minLength: {
              value: 8,
              message: "Пароль должен составлять минимум 8 символов",
            },
          })}
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password?.message}</p>
        )}
      </div>
      <Button type="submit" disabled={registerMutation.isPending}>
        Зарегистрироваться!
      </Button>
    </form>
  );
};

export default RegisterForm;
