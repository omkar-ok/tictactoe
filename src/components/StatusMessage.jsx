import React from 'react'

const StatusMessage = ({winner, current, tied }) => {
  return (
    <div>
      <h3>
        {winner && `Winner is ${winner}`}
        {!winner && !tied && `Next player is ${current.who ? 'X' : 'O' }`}
        {tied && `X and O tied`}
      </h3>
    </div>
  )
}

export default StatusMessage
