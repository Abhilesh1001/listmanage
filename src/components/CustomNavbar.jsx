'use client'

import UserContext from "@/context/UserContext"
import { logout } from "@/services/userService"
import Link from "next/link"
import { useContext, useEffect } from "react"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"

const CustomNavbar = () => {
    const router = useRouter()
    
   const context= useContext(UserContext)
   const dologout= async ()=>{
    try{

        const result = await logout()
        context.setUser(undefined)
        router.push('/login')
    }catch(error){
        toast.error('Logout Error',{position:'top-center'})
    }
   }

  return (
    <nav className='bg-blue-400 h-12 py-2 px-3 flex justify-between items-center'>
        <div className='brand'>
            <h1><a href="#">Work Manager</a></h1>
        </div>
        <div>
            <ul className='flex space-x-3'>

                {
                    context?.user && <><li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/add-task">Add Task</Link>
                </li>
                <li>
                    <Link href="/show-task">Show Task</Link>
                </li></>
                }
                
            </ul>
        </div>
        <div>
        <ul className='flex space-x-3'>

            {
                !context?.user && <><li>
                <Link href="/login">Login</Link>
            </li>
            <li>
                <Link href="/signuppage">Signup</Link>
            </li></>
            }
                
            </ul>
        <ul className='flex space-x-3'>

            {
                context?.user && <><li>
                <Link href="/login">{context?.user?.name}</Link>
            </li>
            <li>
                <button href="/signuppage" onClick={dologout}>Logout</button>
            </li></>
            }
                
            </ul>
        </div>
        

    </nav>
  )
}

export default CustomNavbar