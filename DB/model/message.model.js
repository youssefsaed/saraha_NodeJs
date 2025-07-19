import mongoose from "mongoose";

const msgSchema=mongoose.Schema({
    message:String,
    receivedId:{
        type:mongoose.Types.ObjectId,
    },
},{timestamps:true})

const msgModel=mongoose.model('message',msgSchema)

export default msgModel