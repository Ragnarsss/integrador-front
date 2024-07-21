import React, { Component } from "react";
import Slider from "react-slick";

function VerticalSwipeToSlide() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function (currentSlide: number, nextSlide: number) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide: number) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <div className="container bg bg-primary flex flex-row">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default VerticalSwipeToSlide;
