import React from "react"
import Slider from "react-slick"
import twitterlogo from "../../../../assets/images/small-twitter.svg"
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
          <div className="twitter-content-container">
          <div className="upper-twitter-content">
              <div className="name-content">
                  <h5 className="name-twitter">{item.name}</h5>
                  <h5 className="username-twitter">{item.username}</h5>
                  </div>
                  <div className="icon-content">
                      <img className="twitter-logo" src={twitterlogo} alt="logo" />
                      </div>

              </div>
              <div className="lower-twitter-content">
                  <p className="content-twitter">{item.tweet}<br></br><span className="twitter-span">{item.tags}</span></p>
                  </div>
          </div>
        )
      })}
    </Slider>

  )
}

export default CardCarousel
