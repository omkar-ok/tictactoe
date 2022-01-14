import React, { useState } from 'react';
import Board from './components/Board';

import calculateWinner from './helper';
import './components/styles/root.scss';
import History from './components/History';
import StutusMessage from './components/StatusMessage';

const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), who: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  //const [helperIndex, setHelperIndex] = useState(0);
  const current = history[currentMove];
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [who, setWho] = useState(true);
  // console.log(calculateWinner(current.board))
  const { winner, winningSquares } = calculateWinner(current.board);
  // console.log(winner, winningSquares)
  const tied = current.board.every(value => value);
  // const message =
  //   winner !== null
  //     ? `Winner is ${winner}`
  //     : `Next player is ${current.who ? 'X' : 'O'}`;

  const ClickEvent = position => {
    //setHistory(history.slice(0, helperIndex))
    if (history[currentMove + 1]) {
      alert("this is history, can't modify");
    } else if (winner !== null) {
      alert('Player  ' + winner + '  is Winner');
    } else if (current.board[position] !== null && !tied) {
      alert('You can not override previous moves');
    } else if (tied) {
      alert('Game tied, Restart the game');
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
  };

  const moveTo = move => {
    setCurrentMove(move);
    //setHelperIndex(move);
  };

  return (
    <div>
      <div className="app">
        <h1>
          Tic <span className="text-green"> Tac </span> Toe{' '}
        </h1>
        <StutusMessage winner={winner} current={current} tied={tied} />
        <Board
          board={current.board}
          ClickEvent={ClickEvent}
          winningSquares={winningSquares}
        />
        <br />
        <br />
        <hr />
        <br />
        <div>
          <button
            className={`btn-reset ${winner ? 'active' : ''}`}
            onClick={() => {
              setHistory([{ board: Array(9).fill(null), who: true }]);
              setCurrentMove(0);
            }}
          >
            restart
          </button>
          <button
            className={`btn-reset ${winner ? 'active' : ''}`}
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
            className={`btn-reset ${winner ? 'active' : ''}`}
            onClick={() => {
              if (currentMove < history.length - 1) {
                setCurrentMove(currentMove + 1);
              } else {
                alert("cann't redo more");
              }
            }}
          >
            redo
          </button>
        </div>
        <h2 style={{ fontWeight: 'normal' }}> Current game history</h2>
        <History history={history} moveTo={moveTo} currentMove={currentMove} />
        <div className="creadit-details">
          Created by <a href="../img/Team_ok.png" target="_blank"><span>Team OK</span></a>
        </div>
      </div>
      <div className="bg-balls" />
    </div>
  );
};

export default App;
