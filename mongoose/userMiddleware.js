const {User} =require("./app");

const bodyParser=require("body-parser");


const userMiddle= async (req,res,next)=>{
    const username=req.body.username;
    const exsitingUser= await User.findOne({username});
    if(exsitingUser){
        next();
    }
    else{
        res.status(411).json({
            msg:"User donot Exists"
        })
    }
}
module.exports=userMiddle