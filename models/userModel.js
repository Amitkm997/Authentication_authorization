

import { Timestamp } from "bson";
import mongoose from "mongoose";
const userScheme=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        require:true
    }
},{timestamps:true})
const User = mongoose.model('user',userScheme);
export default User;