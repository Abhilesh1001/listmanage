import { connectDB } from "@/app/helper/db";
import { NextResponse } from "next/server";

export async function POST(request){

    await connectDB()
    const response =NextResponse.json({
        message : "Logout",
        success : true
    })
    response.cookies.set('authToken','',{
        expires:new Date(0)
    })

    return response 
}