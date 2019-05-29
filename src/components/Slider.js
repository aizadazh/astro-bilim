import React, { Component } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./slider.scss";
import i1 from "../images/111.jpg";
import i2 from "../images/222.jpg";
import i3 from "../images/333.jpg";
import i4 from "../images/444.jpeg";
import i5 from "../images/555.jpg";

class ServiceSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div className="slider__wrapper">
        <Slider {...settings}>
          <Slide image={i1} title="НАТАЛЬНАЯ КАРТА" description="Поможет узнать, от кого ваш ребенок или вы переняли свою жизненную программу, какие сферы работы лучше подходят, какие периоды вашей жизни будут удачными"  />
          <Slide image={i2} title="НАТАЛЬНАЯ КАРТА РЕБЕНКА" description="Для подрастающего маленького человечка очень важно составить персональную натальную карту." />
          <Slide image={i3} title="ЛИЧНАЯ ЖИЗНЬ" description="Одним из частых вопросов, с которыми ко мне обращаются - это семейное консультирование" />
          <Slide image={i4} title="ВЫБОР ДАТЫ" description="Выбор дня для регистрации брака — очень ответственное дело, мало кто подозревает, но от этого выбора во многом зависит продолжительность и счастье в браке

" />
          <Slide image={i5} title="КАРТА СОВМЕСТИМОСТИ" description="Подбор деловых партнеров поможет вам оптимизировать рабочий процесс, ведь очень важно понять на рабочем месте, кто окружает тебя и чего можно ожидать от каждого сотрудника" />
        </Slider>
      </div>
    );
  }
}
class Slide extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
  };
  render() {
    return (
      <div className="slider__item">
        <img className="slider-image" src={this.props.image} alt="" />
        <div className="slider-info">
          <h3 className="title">{this.props.title}</h3>
          <p className="description">{this.props.description}></p>
          <button className="btn">ПОДРОБНЕЕ</button>
        </div>
      </div>
    );
  }
}

export default ServiceSlider;
