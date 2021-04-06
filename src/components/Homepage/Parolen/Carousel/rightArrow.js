import React from "react"
import rightArrow from "../../../../assets/images/Right Arrow.svg"


function RightArrow({ style, onClick }) {
  return (
    <div
      className="team-right-arrow"
      style={{
        ...style,
        position: "absolute",
        bottom: "0",
        transform: "translateX(100%) translateY(200%)",
        left: "105px",
        width: "63px",
        height: "63px",
        cursor: "pointer",
        backgroundColor: "#transparent",
        zIndex: "10",
        borderRadius: "100%",
        border: "1.5px solid #C25A3F",
      }}
      onClick={onClick}
    >
      <img
        src={rightArrow}
        style={{
          transform: "translateX(47%) translateY(40%)",
        }}
      />
    </div>
  )
}

export default RightArrow