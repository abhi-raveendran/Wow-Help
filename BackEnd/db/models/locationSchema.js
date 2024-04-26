import { Schema,model } from "mongoose";

const schema=Schema({
    name:{
        type:String,
        unique:true
    },
    
})

const Location=model('Location',schema)
export default Location;