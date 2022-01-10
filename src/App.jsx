import React, { useState } from 'react';
import Board from './components/Board';

import calculateWinner from './helper';
import './components/styles/root.scss';
import History from './components/History';

const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), who: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [who, setWho] = useState(true);
  const winner = calculateWinner(current.board);
  const message =
    winner !== null
      ? `Winner is ${winner}`
      : `Next player is ${current.who ? 'X' : 'O'}`;

  const ClickEvent = position => {
    if (winner !== null) {
      alert('Player  ' + winner + '  is Winner');
    } else if (current.board[position] !== null) {
      alert('You can not override previous moves');
    } else {
      setHistory(() => {
        const last = history[history.length - 1];
        let arr = last.board.map((value, pos) => {
          if (value === null && pos === position) {
            // setWho(!prev.who);
            return last.who ? 'X' : 'O';
          } else {
            return value;
          }
        });
        // console.log(arr);
        return history.concat({ board: arr, who: !last.who });
      });
      setCurrentMove(prev => prev + 1);
    }
    console.log(current.board);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h3> {message} </h3>
      <Board board={current.board} ClickEvent={ClickEvent} />
      <br />
      <br />
      <hr />
      <br />
      <div>
        <button
          className="clearbutton"
          onClick={() => {
            setHistory([{ board: Array(9).fill(null), who: true }]);
            setCurrentMove(0);
          }}
        >
          clear
        </button>
        <button
          className="clearbutton"
          onClick={() => {
            if (currentMove > 0) {
              setCurrentMove(currentMove - 1);
            } else {
              alert("cann't undo more");
            }
          }}
        >
          undo
        </button>
        <button
          className="clearbutton"
          onClick={() => {
            if (currentMove < history.length-1) {
              setCurrentMove(currentMove + 1);
            } else {
              alert("cann't redo more");
            }
          }}
        >
          redo
        </button>
      </div>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <p>Hard to get more as minimal than this React app.</p>
    </div>
  );
};

export default App;
