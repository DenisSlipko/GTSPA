import React, { Component } from "react";
import Slider from "react-slick";
import "./style.css";
import img from "../img/bgimg.jpg";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 925,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
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
        title: "Каникулы в Египте",
        img: `${img}`,
      },
      {
        text:
          "Вкус рождества в окружении чудесных пирамид, вы такое пробовали? Очутиться в жаркой стране посреди зимы - это то, что нужно!",
        title: "Каникулы в Египте",
        img: `${img}`,
      },
      {
        text:
          "Вкус рождества в окружении чудесных пирамид, вы такое пробовали? Очутиться в жаркой стране посреди зимы - это то, что нужно!",
        title: "Каникулы в Египте",
        img: `${img}`,
      },
      {
        text:
          "Вкус рождества в окружении чудесных пирамид, вы такое пробовали? Очутиться в жаркой стране посреди зимы - это то, что нужно!",
        title: "Каникулы в Египте",
        img: `${img}`,
      },
    ];
    return (
      <div className="slider-container">
        <h2 style={{ textTransform: "uppercase", marginBottom: "60px" }}>
          {" "}
          Актуальные туры{" "}
        </h2>
        <Slider {...settings}>
          {obj.map((item) => (
            <div className="card-container">
              <div className="card-img">
                <img src={item.img} alt="" className="image" />
              </div>
              <p className="carousel-title">{item.title}</p>
              <p className="carousel-text">{item.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
