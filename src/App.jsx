import React from "react";
import Board from "./components/Board";

import "./components/styles/root.scss"

export default () => (
  <div className="app">
    <h1>Tic Tac Toe</h1>
    <Board/>
    <p>Hard to get more as minimal than this React app.</p>
  </div>
);
