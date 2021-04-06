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
                <td>Anlass</td>
                <td>Datum</td>
                <td>Ort</td>
              </tr>
              {data.map((item, index) => {
                return (
                  <div className="data-table">
                    <tr>
                      <td>{item.anlass}</td>
                      <td>{item.datum}</td>
                      <td>{item.ort}</td>
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
