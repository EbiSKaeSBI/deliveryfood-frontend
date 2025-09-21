import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card.tsx";
import { Link } from "react-router-dom";
import RegisterForm from "@/components/form/register-form/register-form.tsx";

const Register = () => {
  return (
    <section className="flex items-center justify-center">
      <Card className="container mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Регистрация</CardTitle>
          <CardDescription className="text-center mt-2">
            Введите свои данные ниже
          </CardDescription>
          <CardAction>
            <Link to="/login" className="text-base">
              Войти
            </Link>
          </CardAction>
          <CardContent className="flex justify-center">
            <RegisterForm />
          </CardContent>
        </CardHeader>
      </Card>
    </section>
  );
};

export default Register;
