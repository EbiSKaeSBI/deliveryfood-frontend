import logoDelivery from '../assets/svg/logo.svg'
import Button from "./ui/button/button.tsx";

const Header = () => {
  const isUserLogin: boolean = false

  return (
    <header className="flex items-center justify-between mb-10">
      <a>
        <img src={logoDelivery} alt="Logo" />
      </a>
      <label className="flex-[0.8]">
        <input
          type="text"
          className="bg-white border border-[#d9d9d9] rounded-[2px] text-base/[24px] px-2 pr-2 pl-[35px] bg-no-repeat bg-[left_11px_center] w-full bg-[url(../assets/svg/home.svg)]"
          placeholder="Адрес доставки"
        />
      </label>
      <div className="flex items-center">
        {isUserLogin && <span className="user-name"></span>}
          <Button className="bg-[#1890ff] border-[#1890ff] text-white mr-[10px] hover:bg-white hover:border-[#d9d9d9] hover:text-[#595959] hover:duration-250">
              Войти
          </Button>
        {isUserLogin && (
            <Button className="mx-[5px]">
                Корзина
            </Button>
        )}
        {isUserLogin && (
          <Button className="mx-[5px] bg-[#1890ff] border-[#1890ff] text-white mr-[10px] hover:bg-white hover:border-[#d9d9d9] hover:text-[#595959] hover:duration-250">
              Выйти
          </Button>
        )}
      </div>
    </header>
  )
}

export default Header
