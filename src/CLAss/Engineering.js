import React, { Component } from "react";
import Slider from "react-slick";
import "./engineering.css"
import "../Navfolder/file.css"
import FinalEng from "../Card12/FinalEng"
import "./sidebar.css"
import Carousel from "../Carousel"
import Trendclg from "./TrendingClg"
import Trendcour from "./Trendingcour"
import "./engineering.css"
import "../abled/hmtl.css"
export default class Engineering extends Component {
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
          <div class="container">
          <img src="https://liip.rokka.io/www_articlebig_3/95d3e8/how-to-become-software-developer.jpg" className="responsive-img1 center" alt=""/>
          </div>
        </Slider> 
        <div className="container">
            <section id="one" class="white">
				<div class="inner">

						<h1>What does an engineer do?</h1>
				<p> Engineers design, evaluate, develop, test, modify, install, inspect and maintain a wide variety of products and systems. They also recommend and specify materials and processes, supervise manufacturing and construction, conduct failure analysis, provide consulting services and teach engineering courses in colleges and universities.</p>
              </div>
		</section> </div>	 
        <FinalEng />
      </div>
    );
  }
}