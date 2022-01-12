import React from 'react';

const StatusMessage = ({ winner, current, tied }) => {
  return (
    <div>
      <div className="status-message">
        {winner && (
          <>
            {' '}
            Winner is{' '}
            <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
              {' '}
              ${winner}
            </span>{' '}
          </>
        )}
        {!winner && !tied && (
          <>
            {' '}
            Next player is{' '}
            <span className={current.who ? 'text-green' : 'text-orange'}>
              {' '}
              {current.who ? 'X' : 'O'}{' '}
            </span>
          </>
        )}
        {tied && (
          <>
            <span className="text-green">X</span> and{' '}
            <span className="text-orange"> O</span> tied{' '}
          </>
        )}
      </div>
    </div>
  );
};

export default StatusMessage;
