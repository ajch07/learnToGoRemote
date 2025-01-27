const mongoose=require("mongoose");

const cardSchema=new mongoose.Schema({
    Name : {type:String, required:true},
    Description :{type:String, required:true},
    Handles:[
        {
            platform:{type:String, required:true},
            Url:{type:String, required:true},
        }
    ],
    Intersest:{type:[String], required:true}

})

const Card=mongoose.model('Card',cardSchema);

module.exports={Card};