import React from 'react'
import ShowTask from './ShowTask'

export const metadata = {
    title : 'Show Task : Work Manager'
  
  }

const ShowTasks = () => {
  return (
    <div className='min-h-screen'>
      <ShowTask />
    </div>
  )
}

export default ShowTasks