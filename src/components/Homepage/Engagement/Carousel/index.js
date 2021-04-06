import React from "react"
import Slider from "react-slick"

import RightArrow from "./rightArrow"
import LeftArrow from "./leftArrow"
import { Button } from "../../../Button"
//import "../parolen.scss"

import "./style.scss"
import "../style.scss"

//  settings for slick carousel
var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1.5,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "25%",
  nextArrow: <RightArrow />,
  prevArrow: <LeftArrow />,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        centerPadding: "12%",
      },
    },
  ],
}

function CardCarousel({ data }) {
  const [currentMember, setCurrentMember] = React.useState(0)

  const handleChange = currentSlide => {
    setCurrentMember(currentSlide)
  }

  return (
    <Slider
      className="cardCarousel-slider"
      {...settings}
      afterChange={handleChange}
    >
      {data.map((item, index) => {
        return (
          <div className="engagement-content-division" >
          <Button className="button-engagement" primary="true"  border="true" >{item.button}</Button>

      </div>
        )
      })}
    </Slider>

  )
}

export default CardCarousel
