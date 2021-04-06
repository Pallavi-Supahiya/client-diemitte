import React from 'react'
import {data} from "./data"
import Carousel from "./Carousel/index"
import {Button } from "../../Button"
import "./parolen.scss"


const Parolen = () => {
    return (
        <div className="parolen">
            <div className="container">
                <div className="parolen-container">
                    <h3>Unsere Parolen</h3>
<div className="content-division">
                {data.map((item, index)=>{
                    return (
                    <div className="content-container" key={`${"card"+index}`}>
                        <div className="about-parolen-container">
                <p className="heading-p">{item.heading}</p>
                <h1 className="line1">{item.line1}</h1>
                <div className="line2-div">
                <h1 className="line2">{item.line2}<span className="span-content">{item.content}</span></h1>
                </div>
                </div>
                <Button className="button" primary="true" big="true" secondary="true">{item.button}</Button>
                     
                </div>
)})}
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Parolen
