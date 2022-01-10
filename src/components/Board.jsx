import React from 'react';
import Square from './Square';

const Board= () => {

  return (
    <div>
      <div>
        <Square val={0} />
        <Square val={"x"} />
        <Square val={0} />
      </div>
      <div>
        <Square val={0} />
        <Square val={0} />
        <Square val={0} />
      </div>
      <div>
        <Square val={0} />
        <Square val={0} />
        <Square val={0} />
      </div>
    </div>
  );
};


export default Board;
