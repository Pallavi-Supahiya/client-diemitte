import React from "react"
import leftArrow from "../../../../assets/images/Left Arrow.svg"
import {firstclick} from "./tmp"

function LeftArrow({ style, onClick, visible }) {
  return (
    <div
      className="team-left-arrow"
      style={{
        ...style,
        position: "absolute",
        top: "-17px",
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
        src={firstclick ? leftArrow : null}
       
      />
    </div>
  )
}

export default LeftArrow