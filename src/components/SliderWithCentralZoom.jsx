import React from "react";
import { CarouselWrapper } from "react-pretty-carousel";

export default function SliderWithCentralZoom() {
  const [images, setImages] = React.useState([
    "https://alushta-king.com/wp-content/uploads/2018/02/0222-500x300-1.jpg",
    "https://alushta-king.com/wp-content/uploads/2018/02/0222-500x300-1.jpg",
    "https://alushta-king.com/wp-content/uploads/2018/02/0222-500x300-1.jpg",
    "https://alushta-king.com/wp-content/uploads/2018/02/0222-500x300-1.jpg",
    "https://alushta-king.com/wp-content/uploads/2018/02/0222-500x300-1.jpg",
    "https://alushta-king.com/wp-content/uploads/2018/02/0222-500x300-1.jpg",
  ]);
  return (
    <div className="SliderWithCentralZoom">
      <CarouselWrapper items={3} mode="gallery" showControls="false">
        {images.map((image, index) => (
          <img src={image} alt={`pic-${index}`} key={image} />
        ))}
      </CarouselWrapper>
    </div>
  );
}
