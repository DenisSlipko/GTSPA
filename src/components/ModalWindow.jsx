import React from "react";
import "./style.css";

const ChangeImg = (str) => {
  document.getElementById("modal__img__id").setAttribute("src", str);
};

const ModalWindow = ({
  active,
  setActive,
  fullText,
  imgBig,
  imgSmall1,
  imgSmall2,
  imgSmall3,
  imgSmall4,
  title,
}) => {
  return (
    <div
      className={active ? "modal_w active" : "modal_w"}
      onClick={() => setActive(false)}
      style={{ padding: "20px 200px" }}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setActive(false)}
          className="btn_exit_modal"
        ></button>
        <div className="img__container">
          <div className="small__img__container">
            <img
              src={imgSmall1}
              alt=""
              className="small__modal__img"
              onClick={() => ChangeImg(imgSmall1)}
            />
            <img
              src={imgSmall2}
              alt=""
              className="small__modal__img"
              onClick={() => ChangeImg(imgSmall2)}
            />
            <img
              src={imgSmall3}
              alt=""
              className="small__modal__img"
              onClick={() => ChangeImg(imgSmall3)}
            />
            <img
              src={imgSmall4}
              alt=""
              className="small__modal__img"
              onClick={() => ChangeImg(imgSmall4)}
            />
          </div>
          <img
            src={imgBig}
            alt=""
            style={{ width: "70%", marginBottom: "12px" }}
            className="modal__img"
            id="modal__img__id"
          />
        </div>

        <div className="modal__text__container">
          <p className="modal__title">{title}</p>
          <p className="modal__text">{fullText}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
