import { getResponseMessage } from "@/app/helper/errorMessae";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

// get all the tasks 
export async function GET(request){
    try{

        const tasks = await Task.find() 
        return NextResponse.json(tasks)

    }catch(error) {
        console.log(error)
        return getResponseMessage('Error in get Data',404,false)    
    }
}


// create all the tasks 

export async function POST(request){

    const {title,content,userId,status} =await request.json();
    // console.log(title,content,userId)

    // fetching login id 
    const authToken = request.cookies.get('authToken')?.value
    const data=jwt.verify(authToken,process.env.jwt_key)
    console.log(data._id)

    try {
        const task = new Task({
            title,
            content,
            userId:data._id,
            status
        })

       const createdTask =await task.save()
       return NextResponse.json({
        createdTask,
        status :201
       })

    }catch(errror) {
        console.log(errror)
        return NextResponse.json({
            message : 'Failed to create task',
            success : false,
        })
    }
}