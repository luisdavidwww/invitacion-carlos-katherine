import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image from "../images/Recurso-1.png";
import image2 from "../images/Recurso-2.png";

const CarouselFuntion = ({condition}) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className={`${condition === "algo" ? "slider-container-two" : "slider-container"}`} >
      <Slider {...settings}>
        <div className="contenedorImg">
          <img src={image} className="imgCarousel" />
        </div>
        <div className="contenedorImg">
          <img src={image2} className="imgCarousel" />
        </div>
      </Slider>
    </div>
  );
}

export default CarouselFuntion;