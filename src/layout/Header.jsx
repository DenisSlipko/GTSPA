import { Link } from "react-router-dom";
import tgiconW from "../icons/tgiconW.svg";

function Header() {
  const handleColorClick = () => {
    document.querySelector(".brand-text").style = "color: #595959";
    document.querySelector(".brand-text-small").style = "color: #595959";
    document
      .querySelectorAll(".nav-link")
      .forEach((el) => (el.style = "color: #595959"));
    document.querySelector(".header-phone").style = "color: #595959";
  };
  const handleReverseColor = () => {
    document.querySelector(".brand-text").style = "color: white";
    document.querySelector(".brand-text-small").style = "color: white";
    document
      .querySelectorAll(".nav-link")
      .forEach((el) => (el.style = "color: white"));
    document.querySelector(".header-phone").style = "color: white";
  };

  const handleMenuClick = () => {
    let element = document.querySelector(".navbar-toggler");
    element.classList.toggle("open");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/"
          onClick={() => handleReverseColor()}
        >
          <div className="brand-container">
            <div className="brand-text">ГРАНД ТУР</div>
            <p className="brand-text-small">туристическая фирма</p>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => handleMenuClick()}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/"
                onClick={() => handleReverseColor()}
              >
                Главная
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                onClick={() => handleColorClick()}
              >
                О нас
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/places"
                onClick={() => handleColorClick()}
              >
                Страны
              </Link>
            </li>
            <li className="nav-item last">
              <Link
                className="nav-link"
                to="/offer"
                onClick={() => handleColorClick()}
              >
                Оставить запрос
              </Link>
            </li>
          </ul>
          <a href="#!" className="tg-icon-link">
            <img className="header-icon-tg" src={tgiconW} alt="telegram" />
          </a>
          <div className="white-space-container"></div>
          <p className="header-phone">+38 (067) 749-80-55</p>
          <button className="btn header">Перезвонить мне</button>
          <p className="location-header">
            Украина, Днепр,
            <br /> ул. Литейная 4
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Header;
