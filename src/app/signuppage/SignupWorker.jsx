'use client'
import { signUp } from '@/services/userService'
import React, { useState } from 'react'
import { toast } from 'react-toastify'


const SignupWorker = () => {

    const [data,setData]= useState({
        name : '',
        email :'',
        password :'',
        about :'',
        profileURL : 'https://cdn.vectorstock.com/i/1000x1000/17/61/male-avatar-profile-picture-vector-10211761.webp'
    })
    const handleSubmit = async (e)=>{
    
        e.preventDefault()
        if (data.name.trimEnd()==="" || data.name === null){
            toast.warning('Name is require ',{
                position : 'top-center'
            })
            return;
        }
        // console.log(data)

        try{
            const result =await signUp(data)
            // console.log(result)
            toast.success('User is Register',{position:'top-center'})
            reset()
           
        }catch(error){
            console.log(error)
            toast.error('Error '+ error.response.data.message,{position:'top-center'})

        }
        
    }

    const reset =()=>{
        setData({
            name : '',
            email :'',
            password :'',
            about :'',
            profileURL : 'https://cdn.vectorstock.com/i/1000x1000/17/61/male-avatar-profile-picture-vector-10211761.webp'
        })
    }



  return (
    <div className='grid grid-cols-12'>
        <div className='col-span-4 col-start-5'>                            
            <div className='py-4'>
                <h1 className='text-3l text-center'> Signup Form</h1>
                <form action="" onSubmit={handleSubmit} className='mt-5'>
                    <div className='mt-3'>
                        <label htmlFor="username" className='block text-sm font-medium mb-2'>UserName</label>
                        <input id='user_name' value={data.name}  type="text" onChange={(e)=>setData({...data,name : e.target.value})} className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="Email" className='block text-sm font-medium mb-2'>Email</label>
                        <input type="email" value={data.email} id='user_email'onChange={(e)=>setData({...data,email : e.target.value})}  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="password" className='block text-sm font-medium mb-2'>Password</label>
                        <input type="password" value={data.password} id='user_password' onChange={(e)=>setData({...data,password : e.target.value})} className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="about"   className='block text-sm font-medium mb-2'>About</label>
                        <textarea type="text" value={data.about} id='user_about'onChange={(e)=>setData({...data,about : e.target.value})}  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  rows={8}/>
                    </div>

                    <button type='submit' className='bg-green-600 py-1 px-3 rounded-lg hover:bg-green-400 mt-4'>Signup</button>
                    <button type='button' onClick={reset} className='bg-orange-500 py-1 px-3 rounded-lg hover:bg-orange-400 mt-4 mx-2'>Reset</button>
                </form>
            </div>

        </div>
    </div>
  )
}

export default SignupWorker