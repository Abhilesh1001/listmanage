import mongoose, { Schema } from "mongoose";
const userSchama=new Schema({
    name : String,
    email : {
        type : String,
        unique: true,
        require : [true,'EmailRequired']
    },
    password :{
        type :String,
        require : [true,'Password Require']
    },
    about: String,
    profileURL : String,
})

export const User=mongoose?.models?.users || mongoose?.model('users',userSchama)

