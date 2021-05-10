import Carousel from "../components/Carousel";
import "./style.css";
import Card from "../components/Card";
import WhyUs from "../components/WhyUs";
import Offer from "../components/Offer";
import ComentCarousel from "../components/ComentCarousel";
import Map from "../components/Map";

function Homepage() {
  return (
    <>
      <div className="home-container">
        <div className="text">
          <p className="pre-title">Незабываемые туры в разные страны</p>
          <p className="main-title">ГРАНД ТУР</p>
          <p className="post-title">
            Хотите посетить новые уголки мира и оставить яркие впечатления?{" "}
            <br /> Тогда вы по адресу!
          </p>
          <button className="btn main" style={{ marginTop: "50px" }}>
            Посмотреть предложения
          </button>
        </div>
      </div>
      <div className="carousel-container">
        <Carousel />
      </div>
      <WhyUs />
      <Card />
      <Offer />
      <ComentCarousel />
      <Map />
    </>
  );
}

export default Homepage;
