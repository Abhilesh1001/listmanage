'use client'
import React, { useEffect, useState } from 'react'
import UserContext from './UserContext'
import { currentUser } from '@/services/userService'
import axios from 'axios'
import { toast } from 'react-toastify'



const UserProvider = ({children}) => {
    const [user,setUser]=useState(undefined)

    // console.log(user)

    useEffect(()=>{

        async function load(){
            try{
                const currentuser = await currentUser()
                console.log('cutterntuser',currentuser)
                setUser(currentuser)
          }catch(errro){
          console.log(errro)
          toast.error('Error in loading current user',{position:'top-center'})
          setUser(undefined)
          }
        }
        load()
    },[])

  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider