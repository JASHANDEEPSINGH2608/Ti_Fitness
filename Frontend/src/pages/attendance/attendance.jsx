import React from 'react'
import Navbar from '../../components/Navbar'
import Notice from '../../components/Notice'
import Lat from '../../components/Lat'

const attendance = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex justify-center h-[80vh] items-center gap-12'>
        <Notice/>
        <Lat/>
      </div>
    </div>
  )
}

export default attendance
