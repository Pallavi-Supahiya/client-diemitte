import React from "react"
import { data } from "./data"

import "./style.scss"

const Themen = () => {
  return (
    <div className="themen">
      <div className="container">
        <div className="themen-container">
          <h3>Aktuelle Themen</h3>
          <div className="themen-content-division">
            {data.map((item, index) => {
              return (
                <div className="themen-content-container">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Themen
