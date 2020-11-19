import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../images/img5.jpg"
import "./engineering.css"
import "../Navfolder/file.css"
import Eng from "../Card12/Eng"
export default class KIDS extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
    };
    return (
        <div className="engineercont" >
        <Slider {...settings}>
          <div>
          <img src={img1} className="responsive-img1 center" alt=""/>
          </div>
        </Slider>
        <div className="engineercont1">
        <Eng />  
        </div>
      </div>
    );
  }
}