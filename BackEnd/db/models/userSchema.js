import { Schema,model } from "mongoose";

const schema=Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
   
    password:{
        type:String
    },
   
   
})

const User=model('User',schema)

export default User;