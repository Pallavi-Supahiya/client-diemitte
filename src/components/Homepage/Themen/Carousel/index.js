import React from "react"
import Slider from "react-slick"

import RightArrow from "./rightArrow"
import LeftArrow from "./leftArrow"
//import "../parolen.scss"

import "./style.scss"
import "../style.scss"

//  settings for slick carousel
var settings = {
  dots: true,
  infinite: true,
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
    <Slider
      className="cardCarousel-slider"
      {...settings}
      afterChange={handleChange}
    >
      {data.map((item, index) => {
        return (
            <div className="themen-content-container"  key={`${"card" + index}`}>
            <div className="full-content-container">
              <div className="upper-content">
                <h4 className="line">{item.line}</h4>
                <p className="date">{item.Date}</p>
              </div>
              <div className="full-lower-content">
              <div className="lower-content">
                <img className="author-image" src={item.image}/>
                <div className="about-author">
                  <h6 className="name">{item.name}</h6>
                  <p className="company">{item.company}</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </Slider>

  )
}

export default CardCarousel
