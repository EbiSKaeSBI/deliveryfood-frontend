import { Route, Routes } from "react-router-dom";
import Main from "@/app/main/main.tsx";
import Login from "@/app/auth/login/login.tsx";
import Register from "@/app/auth/register/register.tsx";
import Product from "@/app/product/product.tsx";
import { useAuthInit } from "@/hooks/useAuthInit.ts";

function App() {
  useAuthInit();
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
}

export default App;
