import React from 'react'
import {data} from "./data"
import twitterlogo from "../../../assets/images/small-twitter.svg"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import CardCarousel from "./Carousel/index";

import "./style.scss"

const Twitterfeed = () => {
    return (
        <div className="twitterfeed">
            <div className="container">
                <div className="twitter-container">
                    <h3>Das beschäftigt uns gerade</h3>
                  <CardCarousel data={data}></CardCarousel>
                </div>
            </div>
            
        </div>
    )
}

export default Twitterfeed
