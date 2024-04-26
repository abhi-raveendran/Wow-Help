import { Schema,model } from "mongoose";

const schema= Schema({
    name: {
        type: String,
        required: true
    },
   
    location:{
        type:String
    },
    
    age: {
        type: Number,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String
    },
    password:{
        type:String,
        required:true
    },
    place:{
        type:Schema.Types.ObjectId,
        ref:'Location',
        unique:true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        // required: true
    },
    hourlyRate: {
        type: Number,
        // required: true
    },
    department:{
        type:Schema.Types.ObjectId,
        ref:'Department'
    },
    available: {
        type: Boolean,
        default: true
    },
   
    
})

const Labour=model('Labour',schema)
export default Labour;