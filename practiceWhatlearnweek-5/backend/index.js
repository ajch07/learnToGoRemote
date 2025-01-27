const express=require("express");
const { userMiddleware } = require("./user");
const {User, Blog}=require("./db");
const jwt=require("jsonwebtoken");
const JWTSecret="12345";



const app=express();

app.use(express.json());

app.post("/signup",async (req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    const userExist= await User.findOne({username:username});

    if(!userExist){
       await User.create({
            username,
            password
        })
        res.json({
            msg:"User created successfully"
        })
    }
    else{
        res.status.json({
            msg:"User already exists"
        })
    }
    
   


})
app.post("/login",async (req,res)=>{
    const username=req.headers.username;
    const user= await User.findOne({username:username})
    if(!user){
        res.status(411).json({
            msg:"Invalid username"

        })
    }
    else{
        const token=jwt.sign({username:username},JWTSecret);
        res.json({token})
    }
})

app.post("/blog",userMiddleware,async (req,res)=>{
    const title=req.body.title;
    const content=req.body.content;
    const author=req.headers.username;

   const blog= await Blog.create({
        title:title,
        content:content,
        author:author
    })

    const user=await User.findByIdAndUpdate(author,{
        $push:{
            blogs:blog._id
        }
  })
    
    if(user ){
        res.json({
            msg:"Blog created successfully"
        })
    }

})

app.listen(3009);