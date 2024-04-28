import React from 'react'

const Note = (props) => {
  return (
    <div className='p-4 bg-black opacity-80 rounded-lg'>
    <h2 className='text-md font-semibold'>{props.message}</h2>
    </div>
  )
}

export default Note
