const mongoose=require("mongoose");

mongoose.connect('mongodb+srv://Ajch07:broken321@cluster0.boxno.mongodb.net/assign1');

const UserSchema=mongoose.Schema({
    name:String,
    username:String,
    password:String
});

const User=mongoose.model("User",UserSchema);

module.exports= { User }