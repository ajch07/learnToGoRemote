const mongoose=require("mongoose");
const express=require("express");
const {User}=require("./User");


const app=express();
app.use(express.json());
mongoose.connect("mongodb+srv://Ajch07:broken321@cluster0.boxno.mongodb.net/newdata");

app.post("/createuser",async (req,res)=>{
    const name=req.body.name;
    const age=req.body.age;
    const email=req.body.email;
    const hobbies=req.body.hobbies;
    const address=req.body.address;
    const bestfriend=req.body.bID;

    const createUser=await User.create({
        name:name,
        age:age,
        email:email,
        hobbies:hobbies,
        address:address,
        bestfriend:bestfriend


    })
    
    if(createUser){
        console.log(createUser);
        res.json({
            msg:"user Created successfully"
        })
    }

})

app.listen(3007);