import React, { Component } from "react";
import Slider from "react-slick";
export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
        <div className="center">
        <h2 className="center"> Multiple items </h2>
        <Slider {...settings}>
        <div>
          <iframe width="320" height="270" src="https://www.youtube.com/embed/yIW6eTU2oXY" frameborder="0"
           allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
           </iframe>
          </div>
          <div>
          <iframe width="320" height="270" src="https://www.youtube.com/embed/yIW6eTU2oXY" frameborder="0"
           allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
           </iframe>
          </div>
          <div>
          <iframe width="320" height="270" src="https://www.youtube.com/embed/yIW6eTU2oXY" frameborder="0"
           allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
           </iframe>
          </div>
          <div>
          <iframe width="320" height="270" src="https://www.youtube.com/embed/yIW6eTU2oXY" frameborder="0"
           allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
           </iframe>
          </div>
          <div>
          <iframe width="320" height="270" src="https://www.youtube.com/embed/yIW6eTU2oXY" frameborder="0"
           allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
           </iframe>
          </div>
          <div>
          <iframe width="320" height="270" src="https://www.youtube.com/embed/yIW6eTU2oXY" frameborder="0"
           allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
           </iframe>
          </div>
        </Slider>
      </div>
    );
  }
}