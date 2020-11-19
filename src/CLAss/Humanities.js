import React, { Component } from "react";
import Slider from "react-slick";
import "./engineering.css"
import "../Navfolder/file.css"
import Art from "../Card12/Art"
import Fashion from "./Fashion"
export default class Humanities extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
    };
    return (
        <div className="engineercont white" >
        <Slider {...settings}>
          <div>
          <img src="https://fairgaze.com/images/UploadedImages/thumbs/0267796_arts-humanities.jpg" className="responsive-img1 center" alt=""/>
          </div>
        </Slider>
        <div className="engineercont1">
        <Art />
        </div>
      </div>
    );
  }
}