import logoDelivery from "../../assets/svg/logo.svg";
import Button from "../ui/button/button.tsx";
import { FaBasketShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import Input from "../ui/input/input.tsx";
import { Link } from "react-router-dom";
import { useAuthStore } from "@/stores/auth-stores.ts";
import { useQuery } from "@tanstack/react-query";
import type { User } from "@/types/users/users.ts";
import { getProfile } from "@/shared/api/get-profile.ts";
import useCartStore from "@/stores/useCartStore.ts";
import {useAddressStore} from "@/stores/useAddressStore.ts";

const Header = () => {
  const { isAuthenticated, logout } = useAuthStore();
  const { items } = useCartStore();
  const { inputValue, setInputValue } = useAddressStore();


  const { data } = useQuery<User>({
    queryKey: ["user"],
    queryFn: getProfile,
    enabled: isAuthenticated,
  });


    return (
    <header className="flex items-center justify-between mb-10 container mx-auto">
      <Link to="/">
        <img src={logoDelivery} alt="Logo" />
      </Link>
      <Input
        classNameLabel="flex-[0.8]"
        className="bg-[url(./assets/svg/home.svg)]"
        placeholder="Адрес доставки"
        value={inputValue}
        setValue={setInputValue}
      />
      <div className="flex items-center">
        {!isAuthenticated && (
          <Link to="/login">
            <Button className="bg-[#1890ff] border-[#1890ff] text-white mr-[10px] hover:bg-white hover:border-[#d9d9d9] hover:text-[#595959] hover:duration-250">
              <FaUser size={16} />
              Войти
            </Button>
          </Link>
        )}
        {isAuthenticated && (
          <>
            <Link to="/profile/#">
              <span className="mr-[20px] font-bold text-[18px] flex items-center gap-2">
                <FaUser size={16} />
                {data?.name || "Loading..."}
              </span>
            </Link>
            <Link to="/cart">
              <Button className="mx-[5px] hover:bg-[#1890ff] hover:text-white hover:duration-250">
                <FaBasketShopping size={16} /> Корзина ({items?.length})
              </Button>
            </Link>
            <Button
              onClick={logout}
              className="mx-[5px] bg-[#1890ff] border-[#1890ff] text-white mr-[10px] hover:bg-white hover:border-[#d9d9d9] hover:text-[#595959] hover:duration-250"
            >
              <IoMdExit size={16} />
              Выйти
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
