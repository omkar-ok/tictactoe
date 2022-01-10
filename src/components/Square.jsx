import React from 'react'
import './styles/Square.style.css'

const Square = (props) => {
  return (
    
      <button type='button' className='btn square'>{props.val}</button>
    
  )
}

export default Square
