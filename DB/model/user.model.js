import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    isConfirmed:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }
},{timestamps:true})

const userModel=mongoose.model('user',userSchema)

export default userModel