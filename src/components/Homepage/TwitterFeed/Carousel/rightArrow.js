import React from "react"
import rightArrow from "../../../../assets/images/Right Arrow.svg"


function RightArrow({ style, onClick }) {
  return (
    <div
      className="team-right-arrow"
      style={{
       
        position: "absolute",
        top:"45%",
        right:"5%",
       
        
        width: "63px",
        height: "63px",
        cursor: "pointer",
        backgroundColor: "#transparent",
        zIndex: "10",
        
      }}
      onClick={onClick}
    >
      <img
        src={rightArrow}
       
      />
    </div>
  )
}

export default RightArrow
