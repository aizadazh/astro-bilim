import React, { Component } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import "./slider.scss" 


class ServiceSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider__wrapper">       
        <Slider {...settings}>
          <div className="slider__item1">
            <h3>1</h3>
          </div>
          <div className="slider__item2">
            <h3>2</h3>
          </div>
          <div className="slider__item3">
            <h3>3</h3>
          </div>
          <div className="slider__item4">
            <h3>4</h3>
          </div>
          <div className="slider__item5">
            <h3>5</h3>
          </div>         
        </Slider>
      </div>
    );
  }
}

export default ServiceSlider