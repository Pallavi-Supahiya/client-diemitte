import React from "react"

import { data } from "./data"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import "./style.scss"
import CardCarousel from "./Carousel/index";


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2.5,
  slidesToScroll: 1,
  centerMode: true,
  nextArrow: true,
 
};

const Themen = () => {
  return (
    <div className="themen">
      <div className="container">
        <div className="themen-container">
          <h3>Aktuelle Themen</h3>
      
         <CardCarousel data={data}>

         </CardCarousel>
          
        </div>
      </div>
    </div>
  )
}

export default Themen
