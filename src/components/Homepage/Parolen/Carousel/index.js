import React from "react"
import Slider from "react-slick"

import RightArrow from "./rightArrow"
import LeftArrow from "./leftArrow"

import "./style.scss"

//  settings for slick carousel
var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
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
    <div className="cardCarousel">
      <Slider
        className="cardCarousel-slider"
        {...settings}
        afterChange={handleChange}
      >
        {data.map((item, index) => {
          return (
            <div
              key={`${"card" + index}`}
              className="cardCarousel-slider-card"
            >
              <div className="heading">{item.heading}</div>
              <div className="line1">{item.line1}</div>
              <div className="line2">{item.line2}</div>
              <div className="button">{item.button}</div>
            </div>
          )
        })}
      </Slider>
      {/* <div className="teamCarousel-cover"></div> */}
    </div>
  )
}

export default CardCarousel
