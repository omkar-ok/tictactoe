import React, { useState } from 'react';
import Board from './components/Board';

import calculateWinner from './helper';
import './components/styles/root.scss';
import History from './components/History';
import StutusMessage from './components/StatusMessage'

const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), who: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [who, setWho] = useState(true);
  const winner = calculateWinner(current.board);
  const tied = current.board.every( (value)=> value )
  // const message =
  //   winner !== null
  //     ? `Winner is ${winner}`
  //     : `Next player is ${current.who ? 'X' : 'O'}`;

  const ClickEvent = position => {
    if (winner !== null) {
      alert('Player  ' + winner + '  is Winner');
    } else if (current.board[position] !== null && !tied) {
      alert('You can not override previous moves');
    }else if( tied ){
      alert('Game tied, Restart the game')
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
      <StutusMessage winner={winner} current={current} tied={tied} />
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
          restart
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
      
    </div>
  );
};

export default App;
