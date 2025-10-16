import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card.tsx";
import { Lock, Mail, Phone, User } from "lucide-react";
import { Label } from "@/components/ui/shadcn/label.tsx";
import { Input } from "@/components/ui/shadcn/input.tsx";
import { Separator } from "@/components/ui/shadcn/separator.tsx";
import { Button } from "@/components/ui/shadcn/ui/button.tsx";
import { Link } from "react-router-dom";
import { useAuthStore } from "@/stores/auth-stores.ts";
import { usePatch } from "@/components/edit-form/mutation";

const EditForm = () => {
  interface IFormInput {
    name?: string;
    email?: string;
    phone?: string;
    currentPassword?: string;
    newPassword?: string;
  }
  const { user } = useAuthStore();
  const userId = user?.id;
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormInput>();
  const update = usePatch();

  const currentPassword = watch("currentPassword");
  const onSubmit = (data: any) => {
    update.mutate({ userId: userId, ...data });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Обновление профиля</CardTitle>
        <CardDescription>
          Измените свои личные данные и настройки безопасности
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <User className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Личная информация</h3>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Имя</Label>
              <Input
                id="name"
                type="text"
                placeholder="Введите ваше имя"
                {...register("name", {
                  minLength: {
                    value: 2,
                    message: "Имя должно содержать минимум 2 символа",
                  },
                })}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p className="text-sm text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />

                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  className={`pl-10 ${errors.email ? "border-destructive" : ""}`}
                  {...register("email", {
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Введите корректный email",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <p className="text-sm text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Телефон</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  className="pl-10"
                  {...register("phone")}
                />
              </div>
            </div>
            <Separator />
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Lock className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Изменение пароля</h3>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Текущий пароль</Label>
              <Input
                id="currentPassword"
                type="password"
                placeholder="Введите текущий пароль"
                className={errors.currentPassword ? "border-destructive" : ""}
                {...register("currentPassword", {
                  minLength: {
                    value: 8,
                    message: "Пароль не должен быть короче 8 символов",
                  },
                })}
              />
            </div>
            {errors.currentPassword && (
              <p className="text-sm text-destructive">
                {errors.currentPassword.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="newPassword">Новый пароль</Label>
            <Input
              id="newPassword"
              type="password"
              placeholder="Введите новый пароль"
              className={errors.newPassword ? "border-destructive" : ""}
              {...register("newPassword", {
                validate: (value) => {
                  if (!currentPassword) {
                    return "Новый пароль обязателен при указании текущего пароля";
                  }
                  if (value && value.length < 8) {
                    return "Новый пароль должен содержать минимум 8 символов";
                  }
                  return true;
                },
              })}
            />
            {errors.newPassword && (
              <p className="text-sm text-destructive">
                {errors.newPassword.message}
              </p>
            )}
            {currentPassword && !errors.currentPassword && (
              <p className="text-sm text-destructive">Минимум 8 символов</p>
            )}
          </div>
          <div className="space-y-2 flex  gap-2">
            <Button>Сохранить измения</Button>
            <Link to="/profile">
              <Button disabled={update.isPending}>Отмена</Button>
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default EditForm;
