import React, { Component } from "react";
import Slider from "react-slick";
import "./style.css";
import img from "../img/bgimg.jpg";
import tgicon from "../icons/tgicon.svg";

export default class ComentCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 925,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    };
    const obj = [
      {
        text:
          "Вкус рождества в окружении чудесных пирамид, вы такое пробовали? Очутиться в жаркой стране посреди зимы - это то, что нужно!",
        personName: "Египетская Cила",
        img: `${img}`,
        tgIcon: `${tgicon}`,
        instIcon: `${tgicon}`,
      },
      {
        text:
          "Вкус рождества в окружении чудесных пирамид, вы такое пробовали? Очутиться в жаркой стране посреди зимы - это то, что нужно!",
        personName: "Египетская Cила",
        img: `${img}`,
        tgIcon: `${tgicon}`,
        instIcon: `${tgicon}`,
      },
      {
        text:
          "Вкус рождества в окружении чудесных пирамид, вы такое пробовали? Очутиться в жаркой стране посреди зимы - это то, что нужно!",
        personName: "Египетская Cила",
        img: `${img}`,
        tgIcon: `${tgicon}`,
        instIcon: `${tgicon}`,
      },
      {
        text:
          "Вкус рождества в окружении чудесных пирамид, вы такое пробовали? Очутиться в жаркой стране посреди зимы - это то, что нужно!",
        personName: "Египетская Cила",
        img: `${img}`,
        tgIcon: `${tgicon}`,
        instIcon: `${tgicon}`,
      },
    ];
    return (
      <div className="coment-slider">
        <Slider {...settings} style={{ width: "40%" }}>
          {obj.map((item) => (
            <div className="coment-container">
              <div className="info-coment">
                <img src={img} alt="" className="person-photo" />
                <div className="info-person">
                  <p className="person-name">{item.personName}</p>
                  <div className="ntw-container">
                    <a href="#!">
                      <img
                        className="tg-icon"
                        src={item.tgIcon}
                        alt="telegram"
                      />
                    </a>
                    <a href="#!">
                      <img
                        className="inst-icon"
                        src={item.instIcon}
                        alt="telegram"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="coment-text">{item.text}</div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
