import { Schema,model } from "mongoose";

const schema= Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    labour :{
        type:Schema.Types.ObjectId,
        ref:"Labour"
    },
    startDate: {
        type: String,
        required: true
    },
    contactNumber:{
        type:Number
    },
    department:{
        type:Schema.Types.ObjectId,
        ref:"Department"
    },
    requirements:{
        type:String,
        required:true
    },
    endDate:{
        type:String,
        required:true
    },
    duration: {
        type: String, 
        required: true
    },
   wage:{
    type:Number,
    required:true
   },
   home:{
        type:String,
        required:true
    },
    landMark:{
        type:String
    },
    place:{
        type:String,
        required:true
    },
   status:{
    type:String,
    enum:["Pending","Accepted","Rejected"],
    default:"Pending",
    // required:true
   }
})

const Book=model("Book",schema)
export default Book;