import React, { Component } from "react";
import Slider from "react-slick";
import "./engineering.css"
import "../abled/hmtl.css"
import "../Navfolder/file.css"
import FinalMed from "../Card12/FinalMed"
export default class Medical extends Component {
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
          <img src="https://scopeblog.stanford.edu/wp-content/uploads/2017/10/computer-1149148_1920.jpg" className="responsive-img1 center" alt=""/>
          </div>
        </Slider>
        <section id="one" class="white">
				<div class="inner">

						<h1>What is MBBS?</h1>
		 <p>An MBBS degree is an undergraduate course for aspirants who want to fulfil their dream of becoming a doctor. Bachelor of Medicine and Bachelor of Surgery (MBBS), is a professional degree in medical science. A person holding the MBBS degree becomes a certified medical practitioner. The duration of MBBS course is five years and six months including one year of rotational internship at hospitals, health centers, and health camps organized by non-profit organisations (NGOs).</p>
          </div>
		</section>
        <div className="engineercont1">
        <FinalMed />
        </div>
      </div>
    );
  }
}