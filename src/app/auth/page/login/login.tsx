import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card.tsx";
import { Link } from "react-router-dom";
import LoginForm from "@/components/form/login-form/login-form.tsx";

const Login = () => {
  return (
    <section className="flex items-center justify-center">
      <Card className="container mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Войдите в свой аккаунт
          </CardTitle>
          <CardDescription className="text-center mt-2">
            Введите свой логин и пароль ниже
          </CardDescription>
          <CardAction>
            <Link to="/register" className="text-base">
              Зарегистрировать
            </Link>
          </CardAction>
          <CardContent className="flex justify-center">
            <LoginForm />
          </CardContent>
        </CardHeader>
      </Card>
    </section>
  );
};

export default Login;
