import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/shadcn/card";
import {Link} from "react-router-dom";
import RegisterForm from "@/components/form/register-form/register-form";

const Register = () => {
  return (
      <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background via-background to-muted/20 p-4">
        <div className="w-full max-w-md">
          <Card className="border-border/50 shadow-xl backdrop-blur-sm">
            <CardHeader className="space-y-3 text-center pb-6">
              <CardTitle className="text-3xl font-bold tracking-tight">Создать аккаунт</CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                Заполните форму для регистрации
              </CardDescription>
            </CardHeader>
            <CardContent className="px-6 pb-8">
              <RegisterForm />
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Уже есть аккаунт?{" "}
                  <Link
                      to="/login"
                      className="font-semibold text-primary hover:underline underline-offset-4 transition-all"
                  >
                    Войти
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
  );
};

export default Register;