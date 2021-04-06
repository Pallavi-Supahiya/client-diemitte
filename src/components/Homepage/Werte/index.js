import React from 'react'
import {data} from "./data"
import {Button } from "../../Button"

import "./style.scss"

const Werte  = () => {
    return (
        <div className="werte">
            <div className="container">
                <div className="werte-container">
                    <h3 className="werte-heading">Unsere Werte</h3>
                    <div className="werte-content-division">
                    {data.map((item, index)=>{
                    return (
                        <div className="werte-content-container">
                        <div className="about-content">
                            <h2 className="content-line">{item.line1}</h2>
                            <h2 className="content-line">{item.line2}</h2>
                            <h2 className="content-line">{item.line3}</h2>
                        </div>
                        
                            <Button className="button-werte" primary="true" big="true" border="true" >{item.button}</Button>
                      
                        </div>
                          )})}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Werte