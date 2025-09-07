import FooterLogo from "@/assets/svg/logo.svg";
import { Link } from "react-router-dom";
import instagramLogo from "@/assets/social/instagram.svg";
import facebookLogo from "@/assets/social/fb.svg";
import vkLogo from "@/assets/social/vk.svg";

const Footer = () => {
  return (
    <footer className="py-[60px] mx-auto container ">
      <div className="flex justify-between items-center">
        <nav className="mb-[20px] flex items-center  gap-4  ">
          <Link to="/">
            <img src={FooterLogo} alt="Logo" />
          </Link>
          <Link
            to="/app"
            className="inline-block text-[#595959] not-italic font-normal text-[18px]/[21px] no-underline"
          >
            Ресторанам
          </Link>
          <Link
            to="/delivery"
            className="inline-block text-[#595959] not-italic font-normal text-[18px]/[21px] no-underline"
          >
            Курьерам
          </Link>
          <Link
            to="/press-center"
            className="inline-block text-[#595959] not-italic font-normal text-[18px]/[21px] no-underline"
          >
            Пресс-центр
          </Link>
          <Link
            to="/contact"
            className="inline-block text-[#595959] not-italic font-normal text-[18px]/[21px] no-underline"
          >
            Контакты
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/jasonstatham/"
            className="social-link"
          >
            <img src={instagramLogo} alt="instagram" />
          </a>
          <a href="https://www.facebook.com/" className="social-link">
            <img src={facebookLogo} alt="facebook" />
          </a>
          <a
            href="https://vk.com/misterskyline?from=search&search_track_code=923443b1vluw67LfRIZX0tvuWBnL_uORiBOKoRt9H0WIUZ6AyHGZPKTeot8UlQOChW67uiyRlPraVNr8TS5xDutdjZHLS59T1G4WXeBouzRcZtOmOZyDkYE4m6gbaixT6bxZSATREqwrLNA"
            className="social-link"
          >
            <img src={vkLogo} alt="vk" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
