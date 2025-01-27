const mongoose=require("mongoose");


const userSchema= new mongoose.Schema({
    name:String,
    age:Number,
    email:{
        minLength:10,
        // this should be the minimum length.
        type:String,
        required:true,
        lowercase:true
    },
    createdAt:{
        type:Date,
        immutable:true,  
        // now it cannot be changed because immutable is true.
        default:()=>Date.now()
        //present date will be the default date if not provided be the user.
    },
    updatedAt:{
        type:String,
        default:()=>Date.now()
    },
    bestfriend:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"User"
    },
    hobbies:[String],
    address:{
        city:String,
        state:String
    }
})

const User=mongoose.model("User",userSchema);


module.exports={User};