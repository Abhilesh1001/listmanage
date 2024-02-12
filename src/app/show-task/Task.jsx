import UserContext from '@/context/UserContext'
import React, { useContext } from 'react'

import { RxCross1 } from "react-icons/rx";

const Task = ({task,deletetaskparent}) => {

  const handleDelete=(taskId)=>{
    deletetaskparent(taskId)
  }

  

  const {user} = useContext(UserContext)
  return (
    <div className={` shadow-lg mt-2 ${task?.status=='completed'?'bg-green-950 ':'bg-red-950'}`}>
      
        <div className='p-5'>
            <div className='flex justify-between'>
            <h1 className='text-2xl font-semibold'>{task?.title}</h1>
            <span onClick={()=>handleDelete(task?._id)} className='shadow-lg bg-gray-950 rounded-full w-9 h-9 cursor-pointer items-center justify-center flex' ><RxCross1 /></span>
            
            </div>
            <p className='font-normal'>{task?.content}</p> 
            <p className='text-right'>Author:{user?.name}</p>
            <p className=''>Status:{task?.status}</p>
        </div>
    </div>
  )
}

export default Task