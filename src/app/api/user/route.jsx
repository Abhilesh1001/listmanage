import { connectDB } from "@/app/helper/db"
import { User } from "@/models/user";
import { NextResponse } from "next/server"
import bcrypt from 'bcryptjs'

connectDB()

export async function GET(){
       
    let users = []

     try{
        users = await User.find();
        
     }catch(error){
        console.log(error)

        return NextResponse.json({
            message : 'Failed to get users',
            status : 401
        }) 
     }

    return NextResponse.json(users)

}

export async function POST(request){
    
      
    const {name,email,password,about,profileURL} =await request.json()
   
    
    // create user object model 

    try{



        const user =new User({
            name,
            email,
            password,
            about,
            profileURL
        })

        user.password = bcrypt.hashSync(user.password,parseInt(process.env.BCRYPT_SALT))
        
    
        const createUser = await user.save()
      
        const response = NextResponse.json(user,{
            status:201,
        })
    
        return response

    }catch(error){
        console.log(error)
        return NextResponse.json({
            message : 'Failed to create user',
            status : false 
        },{
            status: 500 
        }
        )

    }
   
}


