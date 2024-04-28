import React from 'react'
import Note from './Note'
const Notice = () => {
  return (
    <div className='flex flex-col min-h-96 max-w-80 bg-slate-800 px-12 py-6 rounded-lg gap-6'>
      <h1 className=' font-bold text-3xl text-center '>Notice Board</h1>
        <div className='flex flex-col gap-2'>
            <Note message="Today gym will not be avialable between 4 to 6"/>
            <Note message="Cardio machines maintenance this Friday."/>
            <Note message="Gym opens at 7:30 AM tomorrow instead of 6 AM."/>
            <Note message="Extended hours on Fridays, open until 9 PM."/>
            <Note message="Reminder: No food or drinks in the gym area."/>
        </div>
    </div>
  )
}

export default Notice
