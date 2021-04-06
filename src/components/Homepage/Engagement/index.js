import React from 'react'
import { Button } from '../../Button'
import {data} from "./data"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import CardCarousel from "./Carousel/index";
import "./style.scss"

const Engagement = () => {
    return (
        <div className="engagement">
            <div className="container">
                <div className="engagement-container">
                    <h3 className="engagement-heading">Engagiere dich</h3>
                    <div className="background-engagement">
                    <CardCarousel data={data}>

</CardCarousel>
</div>
                </div>
            </div>
            
        </div>
    )
}

export default Engagement
