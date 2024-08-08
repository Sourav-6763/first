import React from 'react'

function Wrapperbox(props) {
  return (
    <div className='wrapper'>{props.children}</div>
  )
}

export default Wrapperbox