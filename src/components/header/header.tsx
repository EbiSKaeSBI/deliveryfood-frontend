import logoDelivery from "../../assets/svg/logo.svg";
import Button from "../ui/button/button.tsx";
import { FaBasketShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import Input from "../ui/input/input.tsx";

const Header = () => {
  const isUserLogin: boolean = false;

  return (
    <header className="flex items-center justify-between mb-10 container mx-auto">
      <a>
        <img src={logoDelivery} alt="Logo" />
      </a>
      <Input
        classNameLabel="flex-[0.8]"
        className="bg-[url(./assets/svg/home.svg)]"
        placeholder="Адрес доставки"
      />
      <div className="flex items-center">
        {!isUserLogin && (
          <Button className="bg-[#1890ff] border-[#1890ff] text-white mr-[10px] hover:bg-white hover:border-[#d9d9d9] hover:text-[#595959] hover:duration-250">
            <FaUser size={16} />
            Войти
          </Button>
        )}
        {isUserLogin && (
          <>
            <span className="mr-[20px] font-bold text-[18px]"></span>
            <Button className="mx-[5px] hover:bg-[#1890ff] hover:text-white hover:duration-250">
              <FaBasketShopping size={16} /> Корзина
            </Button>
            <Button className="mx-[5px] bg-[#1890ff] border-[#1890ff] text-white mr-[10px] hover:bg-white hover:border-[#d9d9d9] hover:text-[#595959] hover:duration-250">
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
