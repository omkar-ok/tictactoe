import React, { useState } from 'react';
import Board from './components/Board';

import calculateWinner from './helper'
import './components/styles/root.scss';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [who, setWho] = useState(true);
  // console.log(board);
  const winner = calculateWinner(board);
  const message = (winner!==null)? `Winner is ${winner}` : `Next player is ${who ? "X" : "O"}`;

  const ClickEvent = position => {
    // console.log('click event call', position);
    // console.log(board);
    if(winner !== null){
      alert("Player  "+ winner + "  is Winner")
    } 
    else if (board[position] !== null) {
      alert('You can not override previous moves');
    }
    else {
      setBoard(() => {
        let arr = board.map((value, pos) => {
          if (value === null && pos === position) {
            setWho(!who);
            return who ? 'X' : 'O';
          } else {
            return value;
          }
        });
        // console.log(arr);
        return arr;
      });
    }
    console.log(board);
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h3> {message} </h3>
      <Board board={board} ClickEvent={ClickEvent} />
      <br />
      <br />
      <hr />
      <br />
      <button className='clearbutton'
        onClick={() => {
          setBoard(Array(9).fill(null));
          setWho(true);
        }}
      >
      clear
      </button>
      <p>Hard to get more as minimal than this React app.</p>
    </div>
  );
};

export default App;
