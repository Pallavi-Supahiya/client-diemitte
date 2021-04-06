import React from "react"
import leftArrow from "../../../../assets/images/Left Arrow.svg"

function LeftArrow({ style, onClick }) {
  return (
    <div
      className="team-left-arrow"
      style={{
        ...style,
        position: "absolute",
      top: "45%",
      left: "2%",
       
        width: "63px",
        height: "63px",
        cursor: "pointer",
        backgroundColor: "transparent",
        zIndex: "10",
     
      }}
      onClick={onClick}
    >
      <img
        src={leftArrow}
       
      />
    </div>
  )
}

export default LeftArrow