import React from "react"
import rightArrow from "../../../../assets/images/Right Arrow.svg"
import {firstclick} from "./tmp"


function RightArrow({  onClick }) {
  return (
    <div
      className="team-right-arrow"
      style={{
       
        position: "absolute",
        top: "-17px",
                right:"2%",
       
        
        width: "63px",
        height: "63px",
        cursor: "pointer",
        backgroundColor: "#transparent",
        zIndex: "10",
        
      }}
      onClick={()=>{onClick(); firstclick=true;}}
    >
      <img
        src={rightArrow}
       
      />
    </div>
  )
}

export default RightArrow
