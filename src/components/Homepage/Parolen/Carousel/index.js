import React from "react"
import Slider from "react-slick"
import { Button } from "../../../Button"
import RightArrow from "./rightArrow"
import LeftArrow from "./leftArrow"
import "../parolen.scss"

import "./style.scss"

//  settings for slick carousel
var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1.3,
  slidesToScroll: 1,
centerPadding: "50px",
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
    </Slider>

  )
}

export default CardCarousel
