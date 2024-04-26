import { Schema,model } from "mongoose";

const schema=Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        // required: true   
    },
})

const Department=model("Department",schema)

export default Department;