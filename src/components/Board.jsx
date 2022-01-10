import React from 'react';
import Square from './Square';

const Board = ({board, ClickEvent}) => {
  
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
    </div>
  );
};

export default Board;
