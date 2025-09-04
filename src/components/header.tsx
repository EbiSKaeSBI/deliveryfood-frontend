import logoDelivery from '../assets/svg/logo.svg'

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
      <div className="buttons">
        {isUserLogin && <span className="user-name"></span>}
        <button className="button button-primary button-auth">
          <span className="button-auth-svg"></span>
          <span className="button-text">Войти</span>
        </button>
        {isUserLogin && (
          <button className="button button-cart">
            <span className="button-cart-svg"></span>
            <span className="button-text">Корзина</span>
          </button>
        )}
        {isUserLogin && (
          <button className="button button-primary button-out">
            <span className="button-text">Выйти</span>
            <span className="button-out-svg"></span>
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
