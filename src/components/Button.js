import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#FF9B00" : "#FF9B00")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "11px 32px" : "40px 64px")};
  color: ${({ secondary }) => (secondary ? "#003C69" : "#FFF")};
  font-size: ${({ big }) => (big ? "20px" : "64px")};
  line-height:  ${({ big }) => (big ? "20px" : "64px")};
  font-weight: 800;
  outline: none;
  border:1px solid  ${({ border }) => (border ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.2)")};
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: 4px;
  margin-top: 64px;

  &:hover {
    background: ${({ primary }) => (primary ? "#FFF" : "#FFF")};
    color: ${({secondary})=>(secondary ? '#FF9B00' : '#003C69')};
    transform: ${({ big }) => (big ? "translateY(0px)" : "translateY(-10px)")};
   
  }
`