const mongoose=require("mongoose");
const { boolean } = require("zod");

mongoose.connect('mongodb+srv://Ajch07:broken321@cluster0.boxno.mongodb.net/Todoapp');

const todoschema=new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model("Todoapp",todoschema);

module.exports={
    todo:todo
}