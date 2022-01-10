import React from 'react';
import './styles/Square.style.css';

const Square = props => {
  // console.log(props)
  return (
    <button
      type="button"
      className="btn square"
      onClick={ props.myClickEvent}
    >
      {props.val}
    </button>
  );
};

export default Square;
