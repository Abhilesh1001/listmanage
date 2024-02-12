import React from 'react'
import AddTask from './AddTask'

export const metadata={
  title :'Add Task: Work Manager'
}

const Page = () => {
  return (
    <div className='min-h-screen'>
      <AddTask />
    </div>
  )
}

export default Page