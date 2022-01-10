import React from 'react';
import Square from './Square';

const Board= () => {

  return (
    <div className='board'>
      <div className='board-row'>
        <Square val={0} />
        <Square val={"X"} />
        <Square val={0} />
      </div>
      <div className='board-row'>
        <Square val={0} />
        <Square val={0} />
        <Square val={0} />
      </div>
      <div className='board-row'>
        <Square val={0} />
        <Square val={0} />
        <Square val={0} />
      </div>
    </div>
  );
};


export default Board;
