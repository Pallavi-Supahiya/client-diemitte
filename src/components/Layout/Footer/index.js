import React from "react"
import { Link } from "gatsby"
import { data } from "./data"
import Map from "../../../assets/images/Map.png"
import twitter from "../../../assets/images/Social-Icon-Twitter.svg"
import facebook from "../../../assets/images/Social-Icon-Facebook.svg"
import instagram from "../../../assets/images/Social-Icon-Instagram.svg"
import linkedin from "../../../assets/images/Social-Icon-Linkedin.svg"

import "./footer.scss"
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="upper-footer">
            <div className="links">
              <p className="heading">Links</p>
              <ul className="list-links">
              {data.map((item, index) => (
              <Link className="footer-link" to={item.link} key={index}>
                {item.title}
              </Link>
            ))}
              </ul>
            </div>
            <div className="map">
              <p className="heading">Kantonalparteien</p>
              <img src={Map} alt="map" />
            </div>
            <div className="social-media">
              <p className="heading">Social Media</p>
              <div className="icons">
                <img src={twitter} alt="twitter" className="image-icons" />
                <img src={facebook} alt="facebook" className="image-icons"/>
                <img src={instagram} alt="instagram" className="image-icons"/>
                <img src={linkedin} alt="linkedin" className="image-icons"/>
              </div>
            </div>
          </div>
          <div className="lower-footer">
              <h5 style={{color:"#bfcdd9"}}>© 2021 Die Mitte</h5>
              <h5>Datenschutz</h5>
              <h5>Impressum</h5>
              <h5>Cookies</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
