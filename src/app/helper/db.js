import { User } from "@/models/user"
import mongoose from "mongoose"
const config={
    isConnected :0
}

export const  connectDB  = async ()=>{

    if(config.isConnected){
        return 
    }
   try {
    const {connection} = await mongoose.connect(process.env.MONGO_DB_URL,{
        dbName : 'work'
    })
    console.log('db ... connected')

//    testing 
    config.isConnected = connection.readyState
   

   }catch(error){
    console.log('failed to connect with database')
   console.log(error)
   }
}