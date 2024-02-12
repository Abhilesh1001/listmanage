import { User } from "@/models/user"
import { NextResponse } from "next/server"
import bcrypt from 'bcryptjs'
import  jwt  from "jsonwebtoken"
import { connectDB } from "@/app/helper/db"



export async function POST(request){

    await connectDB()
    const {email,password} =await request.json()
    try{
        const user=await User.findOne({
            email:email
        })
        console.log(user)

        if (user==null){
            throw new Error('User not Found')
        }

        const matched = bcrypt.compareSync(password,user.password)
        if(!matched){
            throw new Error('Password not Matched')
        }
        
        const token =jwt.sign({
            _id :user._id,
            name :user.name
        },process.env.jwt_key)

        const response = NextResponse.json({
            message : 'Login Success',
            success : true,
            user : user
        })
        response.cookies.set('authToken',token,{
            expiresIn:'1d',
            httpOnly:true 
        })
        return response

    }catch(error){
        console.log(error)
        return NextResponse.json({
            message : error.message,
            success : false
        },{
            status:500
        }
        )
    }


}
