import React from "react";
import Slider from "react-slick";
import slide1 from "../../resources/images/slide_one.jpg";
import slide2 from "../../resources/images/slide_two.jpg";
import slide3 from "../../resources/images/slide_three.jpg";
const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true
  };
  return (
    <div
      className="carrousel_wrapper"
      style={{
        height: `${window.innerHeight}px`
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide1})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide2})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide3})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
