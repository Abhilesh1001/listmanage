import {  NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import { User } from "@/models/user";
import { connectDB } from "@/app/helper/db";


export async function GET(request){
    await connectDB()
    const authToken = request.cookies.get('authToken')?.value;
    const data=jwt.verify(authToken,process.env.jwt_key)
    console.log(data)
    const user=await User.findById(data._id).select("-password")
    return NextResponse.json(user)
}