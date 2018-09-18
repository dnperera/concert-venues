import React from "react";
import Carousel from "./Carousel";
import CountDown from "./CountDown";
const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carousel />
      <div className="artist_name ">
        <div className="wrapper">Concert of the Year</div>
      </div>
      <CountDown />
    </div>
  );
};
export default Featured;
