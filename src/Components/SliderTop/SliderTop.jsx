import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderTop.scss'
import slider1 from '../../assets/slider1.jpeg'
import slider2 from '../../assets/slider2.jpeg'
import slider3 from '../../assets/slider3.jpeg'

const SliderTop = () => {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider">
      <div className="container">
        <div className="slider-container">
          <button className="nav-button prev" onClick={previous}>‹</button>
          <Slider
            ref={slider => {
              sliderRef = slider;
            }}
            {...settings}
          >
            <div key={1}>
              <img className="sliderImg" src={slider1} alt="" />
            </div>
            <div key={2}>
              <img className="sliderImg" src={slider2} alt="" />
            </div>
            <div key={3}>
              <img className="sliderImg" src={slider3} alt="" />
            </div>
          </Slider>
          <button className="nav-button next" onClick={next}>›</button>
          <div style={{ textAlign: "center", display: "flex", justifyContent: "space-evenly", width: "100%", marginLeft: "auto", marginRight: "auto" }}>
            <button className="buttonSlider" onClick={next}>
              <img className="btnImg" src={slider3} alt="" />
            </button>
            <button className="buttonSlider" onClick={previous}>
              <img className="btnImg" src={slider1} alt="" />
            </button>
            <button className="buttonSlider" onClick={next}>
              <img className="btnImg" src={slider2} alt="" />
            </button>
            <button className="buttonSlider" onClick={previous}>
              <img className="btnImg" src={slider3} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SliderTop
