import React from "react"
import leftArrow from "../../../../assets/images/Left Arrow.svg"

function LeftArrow({ style, onClick }) {
  return (
    <div
      className="team-left-arrow"
      style={{
        ...style,
        position: "absolute",
        bottom: "0",
        transform: "translateX(150%) translateY(200%)",
        left: "0px",
        width: "63px",
        height: "63px",
        cursor: "pointer",
        backgroundColor: "transparent",
        zIndex: "10",
        borderRadius: "100%",
        border: "1.5px solid #C25A3F",
      }}
      onClick={onClick}
    >
      <img
        src={leftArrow}
        style={{
          transform: "translateX(37%) translateY(40%)",
        }}
      />
    </div>
  )
}

export default LeftArrow