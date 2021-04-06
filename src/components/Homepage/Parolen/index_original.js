import React from "react"
import { data } from "./data"

import { Button } from "../../Button"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Slider from "react-slick"
import "./parolen.scss"


const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  nextArrow: true,

};

const Parolen = () => {
  return (
    <div className="parolen">
      <div className="container">
        <div className="parolen-container">
          <h3>Unsere Parolen</h3>
          <Slider {...settings}>
            <div className="content-division">

              {data.map((item, index) => {
                return (
                  <div className="content-container" key={`${"card" + index}`}>
                    <div className="about-parolen-container">
                      <p className="heading-p">{item.heading}</p>
                      <h1 className="line1">{item.line1}</h1>
                      <div className="line2-div">
                        <h1 className="line2">
                          {item.line2}
                          <span className="span-content">{item.content}</span>
                        </h1>
                      </div>
                    </div>
                    <Button
                      className="button"
                      primary="true"
                      big="true"
                      secondary="true"
                    >
                      {item.button}
                    </Button>
                  </div>
                )
              })}

            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Parolen
