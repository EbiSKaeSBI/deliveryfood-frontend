import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/shadcn/card.tsx";
import {Link} from "react-router-dom";
import LoginForm from "@/components/form/login-form/login-form.tsx";

const Login = () => {
  return (
      <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background via-background to-muted/20 p-4">
        <div className="w-full max-w-md">
          <Card className="border-border/50 shadow-xl backdrop-blur-sm">
            <CardHeader className="space-y-3 text-center pb-6">
              <CardTitle className="text-3xl font-bold tracking-tight">Добро пожаловать</CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                Войдите в свой аккаунт для продолжения
              </CardDescription>
            </CardHeader>
            <CardContent className="px-6 pb-8">
              <LoginForm />
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Нет аккаунта?{" "}
                  <Link
                      to="/register"
                      className="font-semibold text-primary hover:underline underline-offset-4 transition-all"
                  >
                    Зарегистрироваться
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
  );
};

export default Login;
