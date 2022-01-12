import React from 'react';

const history = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className='history'>
        {history.map((_, index) => {
          return (
            <li key={index}>
              <button
                className={`historyTab btn-move ${index == currentMove ? 'active' : ''}`}
                type="button"
                onClick={() => {
                  moveTo(index);
                }}
                // style={{
                //   fontSize: '20px',
                //   fontWeight: index === currentMove ? 'bold' : 'normal',
                // }}
              >
                {' '}
                {index === 0 ? `Go to start game` : `Go to move #${index}`}{' '}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default history;
