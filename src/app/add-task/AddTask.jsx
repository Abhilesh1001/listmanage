'use client'
import { useState } from "react"
import { addTask } from '@/services/taskService'
import { toast } from 'react-toastify';
import { connectDB } from "../helper/db";



const AddTask = () => {

const [task,setTask]  =useState({
    title :'',
    content : '',
    status : '',
    userId : '',
  })
  
  const handleAddTAsk = async (event)=>{
    event.preventDefault()
    console.log(task)
    // validate task data 
    // server API 
    try{
      await connectDB()
      const result =await addTask(task)
      console.log(result)
      toast.success('Your task is added',{position:'top-center'})
      setTask({
        title :'',
        content : '',
        status : 'none'
      })

    }catch(error){
      console.log(error)
      toast.error('Your not added',{position:'top-center'})

    }


  }


  return (
    <div className='grid grid-cols-12 justify-center'>
      <div className='col-span-6 col-start-4 p-5 shadow'>
        <h1 className='text-3xl'>Add your task here</h1>
        <form action="" onSubmit={handleAddTAsk}>
          <div  className='mt-4'>
            {/* task input  */}
            <label htmlFor="task-tille" className='block text-sm font-medium mb-2'>Title</label>
            <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="task_title"
            onChange={(event)=>{
              setTask({
                ...task,title:event.target.value
              })
            }}
            value={task.title}
            />
          </div>
          <div  className='mt-4'>
            {/* task input  */}
            <label htmlFor="Content" className='block text-sm font-medium mb-2'>Content</label>
            <textarea type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" rows={5} 
             name="task_content"
             onChange={(event)=>{
               setTask({
                 ...task,content:event.target.value
               })
             }}
             value={task.content}
            />
          </div>

          {/* task status  */}
          <div className='mt-4'>
            <label htmlFor="task-status">Status</label>
            <select id="task-status" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="task_status"
            onChange={(event)=>{
              setTask({
                ...task,status:event.target.value
              })
            }}
            value={task.status}
            
            >
              <option value="none">----Select Status -----</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>

            {/* button acition  */}
            <div className='mt-4 flex justify-center'>
            <button type="submit" className='bg-blue-600 py-1 px-3 rounded-lg hover:bg-blue-800'>Add Todo</button>
            <button className='bg-red-500 py-1 px-3 rounded-lg hover:bg-red-800 mx-2'>Clear</button>
            </div>


          </div>
        </form>
      </div>

    </div>
  )
}

export default AddTask