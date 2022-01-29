import React from "react";
import Square from "./Square";

const Board = ({squares, onClick, turn, winningSquares}) =>{
  const createSquares = values =>{
    return values.map(value=>(
      <Square 
        winner={winningSquares.includes(value)}
        key={`square__${value}`}
        value={squares[value]}
        onClick={()=>onClick(value)}
        turn={turn}
      />
    ))
  }

  return(
    <div className="Board">
      <div className="row">
        {createSquares([0,1,2])}
      </div>
      <div className="row">
        {createSquares([3,4,5])}
      </div>
      <div className="row">
        {createSquares([6,7,8])}
      </div>
    </div>
  )
}
export default Board;