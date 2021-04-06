import React from "react"
import { data } from "./data"
import "./style.scss"

import "./style.scss"

const Verpassen = () => {
  return (
    <div className="verpassen">
      <div className="container">
        <div className="verpassen-container">
          <h3>Das solltest du nicht verpassen</h3>
          <div className="verpassen-content-container">
            <div className="table-heading">
              <tr>
                <td className="table-head-name">Anlass</td>
                <td className="table-head-date">Datum</td>
                <td className="table-head-ort">Ort</td>
              </tr>
            
              {data.map((item, index) => {
                return (
                  <div className="data-table">
                    <tr>
                      <td className="name-div">{item.anlass}</td>
                      <td className="date-div">{item.datum}</td>
                      <td className="ort-div">{item.ort}</td>
                    </tr>
                  </div>
                )
              })}
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Verpassen
