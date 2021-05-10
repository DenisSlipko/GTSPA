function Offer() {
  return (
    <div className="offer-container">
      <p className="offer-title">ЗАЯВКА НА ПОДБОР ТУРА</p>
      <p className="offer-subtitle">
        Заполните заявку и наш менеджер свяжется с вами и подберет идеальные
        условия для вашего путешествия
      </p>
      <div className="input-container">
        <div className="first-input-wrapper">
          <input type="text" placeholder="Ваше имя" className="name-input" />
          <input
            type="text"
            placeholder="Ваш телефон"
            className="phone-input"
          />
        </div>
        <textarea
          type="text"
          placeholder="Ваш комментарий"
          className="coment-input"
        />
      </div>
      <div className="btn-offer-wrapper">
        <button className="btn-offer-send">Отправить</button>
        <p className="subtitle-btn">
          Нажимая на кнопку отправить вы соглашаетесь с условиями политики
          конфиденциальности и обработки персональных данных
        </p>
      </div>
    </div>
  );
}

export default Offer;
