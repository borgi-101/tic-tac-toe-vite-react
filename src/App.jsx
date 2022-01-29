import React, { useState } from 'react';
import './App.scss';
import Board from './components/Board';
import ThemeContext from './context/ThemeContext';
import SwitchThemeButton from './components/SwitchThemeButton';
import Counter from "./components/Counter";

function App() {
	const [darkmode, setDarkmode]= useState(false);
  const reset = () =>{
    setTurn('x');
    setSquares(Array(9).fill(null));
    setWinningSquares([]);
  } 

  const [turn, setTurn ] = useState('x');
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [score, setScore] = useState({
    x: 0,
    o: 0
  });
  const [winningSquares, setWinningSquares] = useState([]);

  const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
  ];

  const checkForWinner = newSquares =>{
    turn === 'x' ? setTurn('o') : setTurn('x');

    for(let i = 0; i < winningPositions.length; i++){
      const [a,b,c] = winningPositions[i]
      if(newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]){
        endGame(newSquares[a], winningPositions[i])
        return
      }
    }

    if(!newSquares.includes(null)){
      endGame(null, Array.from(Array(10).keys()));
      return
    }
  };

  const handleClick = (square) =>{
    let newSquares = [...squares];
    newSquares.splice(square, 1, turn);
    setSquares(newSquares);
    checkForWinner(newSquares);
  }

  const endGame = (result , winPosition) =>{
    setTurn(null);
    if(result !== null){
      setScore({
        ...score,
        [result]: score[result] + 1
      })
    }
    setWinningSquares(winPosition);

    setTimeout(()=>{
      reset();
    },5000)
  }

	return (
		<ThemeContext.Provider value={{darkmode, setDarkmode}}>
			<div className={`App ${darkmode ? 'Dark' : 'Light'}`} >
				<h1>Tic Tac Toe by <a href="https://franborgiani.com">Franco Borgiani</a></h1>
				<SwitchThemeButton/>
				<Board
          onClick={handleClick}
          squares={squares}
          turn={turn}
          winningSquares={winningSquares}
        />
				<Counter score={score} />
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
