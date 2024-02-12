import { User } from "@/models/user";
import { NextResponse } from "next/server";



export async function GET(request,{params}){
    const {userID} = params
    const user = await User.findById(userID)
    return NextResponse.json(user);
}


export async function DELETE(request,{params}){

    const userID = params.userid


    try{
        await User.deleteOne({
            _id:userID,
        })

        return NextResponse.json({
            message:'User Deleted',
            ststus: 'ok'
        })


    }catch(error){
        console.log(error)
        return NextResponse.json({
            message : 'Error Delating user',
            status : true
        })
    }



  
}


// update user 
export async function PUT(request,{params}){
    const {userid} = params
    console.log(userid)
    const {name,password,about,profileURL} =await request.json()
    console.log(name,password,about,profileURL)
   

    try{
        const user= await User.findById(userid)
        user.name = name,
        user.about = about,
        user.password = password,
        user.profileURL= profileURL

        const updateUser= await user.save()
        return NextResponse.json(updateUser)

    }catch(error){
        console.log(error)
        return NextResponse.json({
            message : 'Failed to update user',
            status : false
        })

    }

}



