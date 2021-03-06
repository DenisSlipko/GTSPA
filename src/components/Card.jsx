import { useState } from "react";
import img from "../img/background.jpg";
import img2 from "../img/backgroundHP.jpg";
import ModalWindow from "./ModalWindow";

function Card() {
  const obj = [
    {
      text:
        "Вкус рождества в окружении чудесных пирамид, вы такое пробовали? Очутиться в жаркой стране посреди зимы - это то, что нужно!",
      full_text: `Нажимая на кнопку отправить вы соглашаетесь с условиями политики конфиденциальности и обработки персональных данных. \n Нажимая на кнопку отправить вы соглашаетесь с условиями политики конфиденциальности и обработки персональных данных.Нажимая на кнопку отправить вы соглашаетесь с условиями политики конфиденциальности и обработки персональных данных. Нажимая на кнопку отправить вы соглашаетесь с условиями политики конфиденциальности и обработки персональных данных`,
      title: "Каникулы в Египте",
      imgBig: `${img}`,
      imgSmall1: `${img}`,
      imgSmall2: `${img2}`,
      imgSmall3: `${img2}`,
      imgSmall4: `${img2}`,
    },
    {
      text:
        "Вкус рождества в окружении чудесных пирамид, вы такое пробовали? Очутиться в жаркой стране посреди зимы - это то, что нужно!",
      full_text:
        "Нажимая на кнопку отправить вы соглашаетесь с условиями политики конфиденциальности и обработки персональных данных. Нажимая на кнопку отправить вы соглашаетесь с условиями политики конфиденциальности и обработки персональных данных.Нажимая на кнопку отправить вы соглашаетесь с условиями политики конфиденциальности и обработки персональных данных. Нажимая на кнопку отправить вы соглашаетесь с условиями политики конфиденциальности и обработки персональных данных",
      title: "Каникулы в Египте",
      imgBig: `${img}`,
    },
    {
      text:
        "Вкус рождества в окружении чудесных пирамид, вы такое пробовали? Очутиться в жаркой стране посреди зимы - это то, что нужно!",
      full_text: `Нажимая на кнопку отправить вы соглашаетесь с условиями политики конфиденциальности и обработки персональных данных.\n Нажимая на кнопку отправить вы соглашаетесь с условиями политики конфиденциальности и обработки персональных данных. \n Нажимая на кнопку отправить вы соглашаетесь с условиями политики конфиденциальности и обработки персональных данных. Нажимая на кнопку отправить вы соглашаетесь с условиями политики конфиденциальности и обработки персональных данных`,
      title: "Каникулы в Египте",
      imgBig: `${img}`,
    },
    {
      text:
        "Вкус рождества в окружении чудесных пирамид, вы такое пробовали? Очутиться в жаркой стране посреди зимы - это то, что нужно!",
      title: "Каникулы в Египте",
      imgBig: `${img}`,
    },
    {
      text:
        "Вкус рождества в окружении чудесных пирамид, вы такое пробовали? Очутиться в жаркой стране посреди зимы - это то, что нужно!",
      full_text:
        "Нажимая на кнопку отправить вы соглашаетесь с условиями политики конфиденциальности и обработки персональных данных. Нажимая на кнопку отправить вы соглашаетесь с условиями политики конфиденциальности и обработки персональных данных.Нажимая на кнопку отправить вы соглашаетесь с условиями политики конфиденциальности и обработки персональных данных. Нажимая на кнопку отправить вы соглашаетесь с условиями политики конфиденциальности и обработки персональных данных",
      title: "Каникулы в Египте",
      imgBig: `${img}`,
    },
    {
      text:
        "Вкус рождества в окружении чудесных пирамид, вы такое пробовали? Очутиться в жаркой стране посреди зимы - это то, что нужно!",
      full_text:
        "Нажимая на кнопку отправить вы соглашаетесь с условиями политики конфиденциальности и обработки персональных данных. Нажимая на кнопку отправить вы соглашаетесь с условиями политики конфиденциальности и обработки персональных данных.Нажимая на кнопку отправить вы соглашаетесь с условиями политики конфиденциальности и обработки персональных данных. Нажимая на кнопку отправить вы соглашаетесь с условиями политики конфиденциальности и обработки персональных данных",
      title: "Каникулы в Египте",
      imgBig: `${img}`,
    },
  ];
  const [modalActive, setModalActive] = useState(false);
  const [modalText, setModalText] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalBigImg, setModalBigImg] = useState("");
  const [modalFullText, setModalFullText] = useState("");
  const [modalImg1, setModalImg1] = useState("");
  const [modalImg2, setModalImg2] = useState("");
  const [modalImg3, setModalImg3] = useState("");
  const [modalImg4, setModalImg4] = useState("");
  return (
    <>
      <div className="card-container">
        <p className="card-text">Популярные Направления</p>
        <div className="card-wrapper">
          {obj.map((item) => (
            <>
              <div
                className="card"
                onClick={() => {
                  setModalActive(true);
                  setModalText(item.text);
                  setModalTitle(item.title);
                  setModalBigImg(item.imgBig);
                  setModalFullText(item.full_text);
                  setModalImg1(item.imgSmall1);
                  setModalImg2(item.imgSmall2);
                  setModalImg3(item.imgSmall3);
                  setModalImg4(item.imgSmall4);
                }}
              >
                <div className="card-text-container">
                  <img src={item.imgBig} alt="" className="card-img" />
                  <p className="card-title">{item.title}</p>
                </div>
                <p className="card-subtitle">{item.text}</p>
              </div>
            </>
          ))}
        </div>
      </div>
      <ModalWindow
        active={modalActive}
        setActive={setModalActive}
        text={modalText}
        title={modalTitle}
        imgBig={modalBigImg}
        fullText={modalFullText}
        imgSmall1={modalImg1}
        imgSmall2={modalImg2}
        imgSmall3={modalImg3}
        imgSmall4={modalImg4}
      />
    </>
  );
}

export default Card;
