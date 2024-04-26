import { Schema,model } from "mongoose";

const schema=Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    labour: {
        type: Schema.Types.ObjectId,
        ref: 'Labour', 
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: true
    }
})

const Review=model("Review",schema)
export default Review;