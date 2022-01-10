import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [who, setWho] = useState(true);
  // console.log(board);

  const ClickEvent = position => {
    // console.log('click event call', position);
    // console.log(board);
    if (board[position] !== null) {
      alert('You can not override previous moves');
    } else {
      setBoard(() => {
        let arr = board.map((value, pos) => {
          if (value === null && pos === position) {
            setWho(!who);
            return who ? "X" : "O" ;
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
    <div>
      <div className="board">
        <div className="board-row">
          <Square
            val={board[0]}
            myClickEvent={() => {
              ClickEvent(0);
            }}
          />
          <Square
            val={board[1]}
            myClickEvent={() => {
              ClickEvent(1);
            }}
          />
          <Square
            val={board[2]}
            myClickEvent={() => {
              ClickEvent(2);
            }}
          />
        </div>
        <div className="board-row">
          <Square
            val={board[3]}
            myClickEvent={() => {
              ClickEvent(3);
            }}
          />
          <Square
            val={board[4]}
            myClickEvent={() => {
              ClickEvent(4);
            }}
          />
          <Square
            val={board[5]}
            myClickEvent={() => {
              ClickEvent(5);
            }}
          />
        </div>
        <div className="board-row">
          <Square
            val={board[6]}
            myClickEvent={() => {
              ClickEvent(6);
            }}
          />
          <Square
            val={board[7]}
            myClickEvent={() => {
              ClickEvent(7);
            }}
          />
          <Square
            val={board[8]}
            myClickEvent={() => {
              ClickEvent(8);
            }}
          />
        </div>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <button className='clearbutton'
        onClick={() => {
          setBoard(Array(9).fill(null));
        }}
      >
      clear
      </button>
    </div>
  );
};

export default Board;
