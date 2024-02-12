import { getResponseMessage } from "@/app/helper/errorMessae"
import { Task } from "@/models/task"
import { NextResponse } from "next/server"

export async function GET(request,{params}){
    console.log(params)
    const {userid} = params
    try{
       const task= await Task.find({
            userId : userid
        })
        return NextResponse.json(task)


    }catch(error){

        console.log(error)
        return  getResponseMessage('Failed to get task',404,false)

    }
}