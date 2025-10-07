import { Navigate, Route, Routes } from "react-router-dom";
import Main from "@/app/main/main.tsx";
import Login from "@/app/auth/login/login.tsx";
import Register from "@/app/auth/register/register.tsx";
import Product from "@/app/product/product.tsx";
import { useAuthInit } from "@/hooks/useAuthInit.ts";
import Profile from "@/app/profile/profile.tsx";
import { useAuthStore } from "@/stores/auth-stores.ts";

function App() {
  useAuthInit();
  const { isAuthenticated } = useAuthStore();
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/product/:id" element={<Product />} />
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/" replace /> : <Login />}
      />
      <Route
        path="/register"
        element={isAuthenticated ? <Navigate to="/" replace /> : <Register />}
      />
      <Route
        path="/profile"
        element={
          isAuthenticated ? <Profile /> : <Navigate to="/login" replace />
        }
      />
      <Route
        path="*"
        element={
          <p className="text-center font-bold text-2xl">
            Страница не найдена 404
          </p>
        }
      />
    </Routes>
  );
}

export default App;
