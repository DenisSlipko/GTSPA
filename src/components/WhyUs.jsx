import svgMap from "../img/svgMap.svg";

export default function WhyUs() {
  return (
    <div className="whyus-container">
      <div className="w-container">
        <p className="w-title">ПОЧЕМУ СТОИТ ВЫБРАТЬ НАС?</p>
        <p className="w-text light">
          Мы работаем с людьми, а не с турами.
          <br />
          Самое важное для нас решить задачи клиента
        </p>
        <div className="w-list">
          <div className="col-item">
            <div className="w-item">
              <img src="" alt="" className="w-logo" />
              <p className="w-item-text">Опыт в подборе туров чёто типа</p>
            </div>
            <div className="w-item">
              <img src="" alt="" className="w-logo" />
              <p className="w-item-text">Время на рынке</p>
            </div>
          </div>
          <div className="col-item">
            <div className="w-item">
              <img src="" alt="" className="w-logo" />
              <p className="w-item-text">
                Сопровождение и отзывчивость во время отдыха
              </p>
            </div>
            <div className="w-item">
              <img src="../img/.jpg" alt="" className="w-logo" />
              <p className="w-item-text">Хорошие цены</p>
            </div>
          </div>
        </div>
        <div className="btn-container">
          <button className="btn header about">Выбрать тур</button>
          <button className="btn header w about">Выбрать тур</button>
        </div>
      </div>
      <img
        src={svgMap}
        alt="map"
        style={{
          textAlign: "end",
          position: "absolute",
          opacity: "0.3",
          right: 0,
          marginTop: "100px",
        }}
      />
    </div>
  );
}
