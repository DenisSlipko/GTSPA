function Map() {
  return (
    <div className="map-container">
      <p className="map_title">Где нас найти ?</p>
      <iframe
        title="map"
        className="g-map"
        style={{
          frameBorder: "0",
          scrolling: "no",
          marginHeight: "0",
          marginWidth: "0",
        }}
        src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=dnipro,%20lyvarna%20sr%204+(Your%20Business%20Name)&amp;t=p&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  );
}
export default Map;
