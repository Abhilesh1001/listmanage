'use client'
import UserContext from '@/context/UserContext'
import { deleteTask, getTaskofUser } from '@/services/taskService'
import React, { useContext, useEffect, useState } from 'react'
import Task from './Task'
import { toast } from 'react-toastify'


const ShowTask = () => {

    const [task,setTask] = useState()
    const context=useContext(UserContext)
    const userId = context?.user?._id

    useEffect(()=>{

        if(userId!==undefined){
            loadTask(userId)
        }        
    },[userId])
    async function loadTask(userId){
        try{
            const taskitem = await getTaskofUser(userId)
            setTask([...taskitem])
        }catch(error){
            console.log(error)
        }

    }

    async function deletetaskparent(taskId){

      
        try{
          const result=await deleteTask(taskId)
          const newTasks = task.filter((item)=>item._id!==taskId)
          setTask(newTasks)
          toast.success('Your task is deleted',{position:'top-center'})
        }catch(error){
            toast.error('Error Deleting task',{position:'top-center'})
        }
    }

    
  return (
    <div className='grid grid-cols-12 mt-3 mb-4'>
        <div className='col-span-6 col-start-4' >
            <h1 className='text-3l text-center'>Your task {task?.length}</h1>

            {
                task?.map((taskItem)=>{

                    return (
                        <Task task={taskItem}  deletetaskparent={deletetaskparent} key={taskItem._id} />

                    )
                })
            }
        </div>
    </div>
  )
}

export default ShowTask