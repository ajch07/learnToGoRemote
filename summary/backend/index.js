const express=require("express");
const { createTodo } =require("../backend/types");
const { updateTodo } =require("../backend/types");
const { todo } = require("./db");
const cors=require("cors")


const app=express();
app.use(cors());

app.use(express.json());

app.post("/todo",async (req,res)=>{
    const createPayload=req.body
    const parsePayload=createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"you have passed the wrong inputs"
        })
        return;
    }
    else{
        await todo.create({
            title:createPayload.title,
            description:createPayload.description,
            completed:false
        })
        res.json({
            msg:"todo created"
        })
    }

});

app.get("/todos",async(req,res)=>{
   const todos= await todo.find(
        
    )
    res.json({
        todos
    })
    

})
app.put("/completed",async(req,res)=>{
    const updatePayload=req.body;
    const parseUpdatePayload=updateTodo.safeParse(updatePayload);
    if(!parseUpdatePayload.success){
        res.status(411).json({
            msg:"you have sent the wrong inputs"
        })
        return;
    }

    else{
       await todo.updateOne({
            _id:req.body.id
        },
        {
            completed:true
        })
        res.json({
            msg:"task completed successfully"
        })
    }

})

app.listen(3003,(req,res)=>{
    console.log("server is running on port 3004");
});