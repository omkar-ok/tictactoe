import React from 'react';
import './styles/Square.style.css';

const Square = props => {
  // console.log(props)
  return (
    <button
      type="button"
      className="btn square"
      onClick={ props.myClickEvent}
      style={{fontWeight : props.isWinningSquare ? "bold" : "normal"}}
    >
      {props.val}
    </button>
  );
};

export default Square;
