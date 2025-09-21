import { Route, Routes } from "react-router-dom";
import Main from "@/app/main/main.tsx";
import Login from "@/app/auth/page/login/login.tsx";
import Register from "@/app/auth/page/register/register.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
