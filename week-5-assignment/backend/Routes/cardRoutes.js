const express=require("express");
const mongoose=require("mongoose")
const cors=require("cors")
const { Card } = require("../models/Card");


const app=express();
mongoose.connect('mongodb+srv://decorfunction:hello@cluster0.6myfd.mongodb.net/cardapp');
app.use(express.json());
app.use(cors());
app.post("/",async(req,res)=>{
try{
    Card.create(req.body)
    res.json({
        msg:"card created successfully"
    })
}
catch(e){
    res.status(500).json({
        msg:e.message
    })
}
})

app.get("/",async(req,res)=>{
    try{
        const card= await Card.find();
        if(card)
        res.json(card);
    }
    catch(e){
        res.status(411).json({
            msg:e.message
        })
    }
    
})

app.put("/:id",async (req,res)=>{
    try{
        const card= await Card.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(card){res.json(card)}
        else{res.status(400).json({msg:"card not found"})}
        
    }
    catch(e){
        res.status(500).json({
            msg:e.message
        })
    }
})
app.delete("/:id",async (req,res)=>{
    try{
        const card=await Card.findByIdAndDelete(req.params.id)
        if(!card)res.status(411).json({msg:"card not found"});
        res.json({
            msg:"card deleted"
        })
    }
    catch(e){
        res.status(500).json({
            msg:e.message
        })
    }
})
app.listen(3001,(req,res)=>{
    console.log("this app is listening on portno.=> 3001")
});