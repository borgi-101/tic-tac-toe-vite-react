import React from "react";
import classnames from "classnames";

const Square = ({value, onClick, turn, winner}) =>{
  const handleClick = () =>{
    (turn !== null & value === null) && onClick()
  }
  let squareClassName = classnames({
    square: true,
    [`square--${value}`]: value !== null,
    winner
  })

  return(
    <div className={squareClassName} onClick={()=> handleClick()}></div>
  )
};
export default Square;