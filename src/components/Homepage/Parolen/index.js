import React from "react"
import { data } from "./data"

import { Button } from "../../Button"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Slider from "react-slick"
import "./parolen.scss"

import CardCarousel from "./Carousel/index";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  nextArrow: true,
  className: "slides"
};

const Parolen = () => {
  return (
    <div className="parolen">
      <div className="container">
        <div className="parolen-container">
          <h3>Unsere Parolen</h3>
          <CardCarousel data={data}>

          </CardCarousel>
        </div>
      </div>
    </div>
  )
}

export default Parolen
