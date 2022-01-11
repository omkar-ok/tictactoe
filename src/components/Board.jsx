import React from 'react';
import Square from './Square';

const Board = ({ board, ClickEvent, winningSquares }) => {
  const renderSquare = position => {
    const isWinningSquare = winningSquares.includes(position);
    return (
      <Square
        val={board[position]}
        myClickEvent={() => {
          ClickEvent(position);
        }}
        isWinningSquare={isWinningSquare}
      />
    );
  };

  return (
    <div>
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  );
};

export default Board;
