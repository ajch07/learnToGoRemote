const bodyParser = require("body-parser");
const express=require("express")
const { User }=require("./app")
const userMiddle= require("./userMiddleware")

const app=express();

app.use(bodyParser.json())


app.post("/user/signup", async (req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const name=req.body.name;

    const exsitingUser= await User.findOne({username});
    if(!exsitingUser){
        User.create({
            username,
            password,
            name,
        })
        res.json({
            msg:"user created successfully"
        })
    }
    else{
        res.status(411).json({
            msg:"user Exists already"
        })
    }
})

app.post('/user/update/name' ,  userMiddle , async (req,res)=>{
    const username=req.body.username;
    const name=req.body.name;
  const UpdateDocument= await User.findOneAndUpdate({username},{$set: {name}})
  if(UpdateDocument){
    res.json({
        newName:`is set to ${name}`
    })}
    else{
        res.status(411).json({
            msg:"somethimg went wrong"
        })
    }
    
})

app.listen(3001);