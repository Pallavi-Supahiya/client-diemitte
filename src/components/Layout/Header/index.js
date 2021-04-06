import React from "react"
import { data } from "./data"
import {Link} from "gatsby"
import Search from "../../../assets/images/search.svg"
import "./header.scss"

const index = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-division">
          <div className="links-div">
            {data.map((item, index) => (
              <Link className="header-link" to={item.link} key={index}>
                {item.title}
              </Link>
            ))}
          </div>
          <div className="search-div">
              <div className="search-icon">
                  <img src={Search} alt="icon" />
                  <p>Suche</p>
              </div>
              <div className="drop-down">
                  
                  <div className="drop-selection">
                  <select>
                     <option>DE</option>
                     <option>DE</option>
                     <option>DE</option>
                  </select>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
