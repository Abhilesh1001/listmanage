'use client'

import React,{useContext, useState} from 'react'
import { toast } from 'react-toastify'
import { login } from '@/services/userService'
import { useRouter } from 'next/navigation'
import UserContext from '@/context/UserContext'


const LoginPage = () => {
    const router = useRouter()
    const context= useContext(UserContext)
    const [data,setData]= useState({
        email :'',
        password :'',
    })

    const handleSubmit = async (e)=>{
        e.preventDefault()
        if (data.email.trimEnd()==="" || data.email === null){
            toast.warning('Email is require ',{
                position : 'top-center'
            })
            return;
        }

        try{
            const result = await login(data)

            toast.success('Login success',{
                position:'top-center'
            })
            context.setUser(result.user)

            router.push('/profile')
        }catch(error){
            console.log(error)
            toast.error('Error in Login',{
                position:'top-center'
            })
        }
    }


  return (
    <div className='grid grid-cols-12'>
        <div className='col-span-4 col-start-5'>
        <div className='py-5'>
        <h1 className='text-3l text-center'>Login Here</h1>
        <form action="" onSubmit={handleSubmit} className='mt-5'>
                    
                    <div className='mt-3'>
                        <label htmlFor="Email" className='block text-sm font-medium mb-2'>Email</label>
                        <input type="email" value={data.email} id='user_email'onChange={(e)=>setData({...data,email : e.target.value})}  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="password" className='block text-sm font-medium mb-2'>Password</label>
                        <input type="password" value={data.password} id='user_password' onChange={(e)=>setData({...data,password : e.target.value})} className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
               
                    <button type='submit' className='bg-green-600 py-1 px-3 rounded-lg hover:bg-green-400 mt-4'>Login</button>
                    {/* <button type='button' onClick={reset} className='bg-orange-500 py-1 px-3 rounded-lg hover:bg-orange-400 mt-4 mx-2'>Reset</button> */}
                </form>
        </div>
    </div>
    </div>
  )
}

export default LoginPage