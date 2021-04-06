import React from 'react'
import Banner from "../../../assets/images/Banner.png"
import Logo from "../../../assets/images/Logo.svg"

import "./hero.scss"

const index = () => {
    return (
        <div className="hero">
            
                <div className="images-division">
               
               <img src={Banner} alt="banner" className="banner-division" />
               
               
                   <img src={Logo} alt="logo"className="logo-div"/>
             
               </div>
            
            
        </div>
    )
}

export default index
