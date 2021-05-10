import "./style.css";
import mailicon from "../icons/mailicon.svg";
import tgicon from "../icons/tgicon.svg";

import { Link } from "react-router-dom";

function Footer() {
  let data = new Date();
  return (
    <div className="footer-container navbar-fixed-bottom row-fluid">
      <div className="footer-header">
        <div className="footer-section first">
          <div className="brand-container">
            <div className="brand-text f">ГРАНД ТУР</div>
            <p className="brand-text-small f">туристическая фирма</p>
          </div>
        </div>
        <div className="contact-sections">
          <div className="footer-section contacts">
            {/* <p className="footer-menu-el">grandtour11@gmail.com</p> */}
            <p className="footer-menu-el phone"></p>
            {/* <p className="footer-menu-el">Пн-Пт с 9:00 до 18:00</p> */}
          </div>

          <p className="footer-menu-el location">
            Украина, Днепр,
            <br />
            ул. Литейная 4
          </p>
        </div>
        <div className="footer-section icons">
          <a href="#!">
            <img className="footer-icon" src={tgicon} alt="telegram" />
          </a>
        </div>
      </div>

      <div className="footer-container-copyright">
        <div className="brand-copyright">
          © {data.getFullYear()} Все права защищены
        </div>
        <div className="footer-menu">
          <div className="footer-menu-el link">
            <Link className="footer-menu-el" aria-current="page" to="/">
              Главная
            </Link>
          </div>
          <div className="footer-menu-el link">
            <Link
              className="footer-menu-el"
              aria-current="page"
              to="/AboutPlaces"
            >
              Клиентам
            </Link>
          </div>
          <div className="footer-menu-el link">
            <Link className="footer-menu-el" aria-current="page" to="/">
              Блог
            </Link>
          </div>
          <div className="footer-menu-el link">
            <Link className="footer-menu-el" aria-current="page" to="/about">
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
