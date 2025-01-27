// let allUsers=[{
//     username:"Anubhav choduhary",
//     usernumber:1,
//     gender:"male",
//     age:25
// },
// {
//     username:"Garima Sumrao",
//     usernumber:2,
//     gender:"female",
//     age:22
// },
// {
//     username:"Abhilasha",
//     usernumber:3,
//     gender:"female",
//     age:26

const { set } = require("mongoose");

// }]
// for(let i=0;i<allUsers.length;i++){
//     console.log(`the name of the usernumber${allUsers[i].usernumber} : ${allUsers[i].username}`);
// }
// let x=0
// for(let i=0;i<1000000000000;i++){
//     x=x+i;

//     console.log(x)
// }
// var myName="my/name/is/anubhav";
// var valuearr=myName.split("/");
// console.log(valuearr);

// var myName="         Anubhav               Choudhary      ";
// console.log(myName);
// console.log(myName.trim());

// class Animal{
//     constructor(name,legscount,speaks){
//         this.name=name;
//         this.legscount=legscount;
//         this.speaks=speaks;
//     }
// }

// let dog=new Animal("dog hu bro",4,"bhow bhow");
// let cat=new Animal("cat hu bro",4,"meow meow");

// function setAnimal(animal){
//     console.log(`this animal has ${animal.legscount} legs and speaks ${animal.speaks}, ye konsa animal hai ye khud btayega
//         animal: ${animal.name}`);
// }

// setAnimal(cat);
// setAnimal(dog);
// const fs=require("fs");

// fs.readFile("a.txt","utf-8",function(err,data){
//     console.log(data);
// });
// console.log("Anubhav choudhary");
// let n =new Promise((resolve)=>{
//     resolve();
   

// })
// console.log(n);
// setTimeout(()=>{
//     console.log("first Hello!");
//    },1000);
// setTimeout(()=>{
//     console.log("second hello!");
// },3000);

// const myPromisfiedFunction=(duration)=>{
//     const p=new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("hello1");
            
//             resolve()
//         },duration);
//     })
//     return p;
// }
// const answer=myPromisfiedFunction(1000);
// answer.then(function(){
//     console.log("hello");
// })



// const sum=(n)=>{
//     let a=0;
//     for(let i=1;i<=n;i++){
//         a=a+i;
//     }
//     return a;

// }
// app.get("/",(req,res)=>{
//     const n=req.query.n;
//     const ans=sum(n);
//     res.send(`your sum is ${ans} and ${ JSON.stringify(req.query) }`);
    
// })
// app.listen(3000);

// const express=require("express");
// const bodyParser=require("body-parser");


// const app=express();
// app.use(express.json());
// const user=[{
//     name:"john",
//     kidneys:[{
//         healthy:false
//     },
// ]
// }]

// const healthyKidneys=()=>{
//     const numberOfKidneys=user[0].kidneys.length;
//     const a=0;
//     for(let i=0;i<numberOfKidneys;i++){
//         if(user[0].kidneys[i].healthy===true){
//             a++;
//         }

//     }
//     return a;
// }
// app.get("/",(req,res)=>{
    
//     const numberOfKidneys=user[0].kidneys.length;
//     let a=0;
//     for(let i=0;i<numberOfKidneys;i++){
//         if(user[0].kidneys[i].healthy===true){
//             a++;
//         }

//     }
//     const numberOfHealthyKidneys=a;
//     let numberOfUnhealthyKidneys=numberOfKidneys-numberOfHealthyKidneys;
//    res.json({
//     numberOfKidneys,
//     numberOfHealthyKidneys,
//     numberOfUnhealthyKidneys

// });

// })

// app.post("/",(req,res)=>{
//     const isHealthy=req.body.isHealthy;
    
//     user[0].kidneys.push({healthy:isHealthy});

//     res.json({
//         msg:"done"
//     })
    
// })
// app.put("/",(req,res)=>{
//    n= user[0].kidneys.length;
//     for(let i=0;i<n;i++){
//         user[0].kidneys[i].healthy=true;
//     }
//     res.json({
//         msg:"kidneys transplanted successfu"
//     })
// })
// // app.delete("/",(req,res)=>{
    
// // })
// app.listen(3000);

// const input=[1,2,3,4,5,6];



// const a=input.map((i)=>{
// return i*2;
// })

// console.log(a);
// const map1=(fun,arr)=>{
//     let len=arr.length;
//     let arr1=[]
//     for(let i=0;i<len;i++){
//        arr1[i]= fun(arr[i]);
//     }
//     return arr1;
// }
// const input=[1,2,3,4,5,6];



// const a=map1((i)=>{
// return i*4;
// },input);
// console.log(a);

// const input=[1,2,3,4,5,6];
// const ans=input.filter((n)=>{
//     if(n%2==0)
//         return true;
//     else
//     return false;

// })
// console.log(ans);

// const express = require("express");

// const app=express();

// app.get("/",(req,res)=>{
//     // let kidneyId=req.query.kidneyId;
//     let username=req.headers.username;
//     let password=req.headers.password;
//     const kidneyId=req.query.kidneyId;

//     if(username== "Anubhav" && password=="pass"){
//        if(kidneyId==1 || kidneyId==2){
//         res.json({
//             msg:"your kidney is fine"
//         });
        
//        }
//        else
//         res.json({
//         msg:"user doesnot exist or password is incorrect"
//     });
        
//     }
//     else
//     res.json({
//         msg:"user doesnot exist or password is incorrect"
//     })
//     // if(kidneyId!=1 || kidneyId!=2){
//     //     res.status(411).json({
//     //         msg:"wrong inputs"
//     //     })
//     //     return;
//     // }
//     // res.send("your heart is healthy");

// });
// const express=require("express");
// const app=express();

// let numberOfattempts=0;

// const calculateAttempt=(req,res,next)=>{
//     if(numberOfattempts>=5)
//         res.status(403).json({
//             msg:"your account is locked"
//         })

//         else{
//     numberOfattempts++;
    
//     next();
// }

// }
// const userMiddleware=(req,res,next)=>{
//     const username=req.headers.username;
//     const password=req.headers.password;
//     console.log(username);
//     console.log(password);
//     if(username!=="Anubhav" || password!=="pass"){
//        return res.json({
//             msg:"invalid inputs"
//         });
//     }
//     else
//     next();

// }
// const kidneyMiddleware=(req,res,next)=>{
//    const kidneyId=req.query.kidneyId;
//     if(kidneyId!=1 && kidneyId!=2){
//        return res.json({
//             msg:"incorrect input"
//         });
//     }
//     else
//     next();

// }
// app.post("/health-checkup",calculateAttempt,userMiddleware,kidneyMiddleware,(req,res)=>{
//     res.send("your kidney is healthy");
// });
    


// app.listen(3000,()=>{
//     console.log("listening on port 3000");
// });

// const express=require("express");
// const zod=require("zod");
// const app=express();

// const schema=zod.string().email();

// app.use(express.json());

// app.post("/number",(req,res)=>{
//     const kidney=req.body.kidney;
//     console.log(kidney);
//     const response=schema.safeParse(kidney);
//     const kidneyLength=kidney.length;
//     console.log(kidneyLength)
//     if(response.success)
//     res.send(`the number of kidneys are ${kidneyLength}`);
//     else
//     res.send(response);
// })
// //* global catches

// // app.use((err,req,res,next)=>{
// //     res.json({
// //         msg:"something is up with our server"
// //     })
// // })
    

// app.listen(3000);



// const express=require("express");
// const zod=require("zod");
// const app=express();

// const schema=zod.object({
//     email:zod.string().email(),
//     age:zod.number().int().positive(),
//     password:zod. z.string()
//     .min(8, { message: "Password must be at least 8 characters long." })
//     .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter." })
//     .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
//     .regex(/[0-9]/, { message: "Password must contain at least one number." })
//     .regex(/[\W_]/, { message: "Password must contain at least one special character." })

// });

// app.use(express.json());

// app.post("/number",(req,res)=>{
//     const useremail=req.body.email;
//     const userage=req.body.age;
//     const userpassword=req.headers.password;

//     const user={
//         email:useremail,
//         age:userage,
//         password:userpassword
//     }
    
//     const response=schema.safeParse(user);
    
    
//     if(response.success)
//     res.send(`you are logged in`);
//     else
//     res.send(response.error.issues[0].message);
// })
// app.listen(3000);



// const express=require("express");
// const mongoose = require("mongoose");
// const app=express();

// app.use(express.json());

// mongoose.connect(
//   "mongodb+srv://Ajch07:broken321@cluster0.boxno.mongodb.net/usersnewapp",
// );
// const User=mongoose.model('users',{
//   name:String,
//   email:String,
//   password:String
// });
// app.post("/signup",async (req,res)=>{
//     try{
//     const username=req.body.username;
//     const password=req.body.password;
//     const name=req.body.name;
//     const existingUser= await User.findOne({email:username})
//     if(existingUser){
//         res.status(403).json({
//             error:"user already exists"
//         })
//     }
//     else{
    
//     const user=new User({
//         name:name,
//         email:username,
//         password:password
//       })
//       user.save();
//       res.json({
//         status:"successfully added"
//       })}}
//       catch(err){
//         res.status(403).json({
//             status:err
//         })
//       }
// })
// app.post("/remove_user",async (req,res)=>{
//     const username=req.body.username;
//    await User.deleteOne({email:username});
//    res.json({
//     msg:`user with email ${username} is removed`
//    })
// })

// app.listen(3000,(req,res)=>{
//     console.log("listening on 3000");
    
// })


// const express=require("express")
// const app=express();

// const isOldEnoughMiddleware=(req,res,next)=>{
//     const age=req.query.age;
//     if(age>=14){
//         next();
//     }
//     else{
//         res.status(411).json({
//             msg:"not allowed, because of age"
//         })
//     }

// }

// app.get("/",isOldEnoughMiddleware,(req,res)=>{
//     res.json({
//         msg:"you have successfully riden the ride"
//     })
// })
// app.listen(3000);





// let ob={
//     userid:["anubhav","garimang","ginnang"]
// };
// setTimeout(()=>{
//     ob={};
//     console.log(ob);
// },1000);
// userid="garimag"
// ob[userid]=1
// userid="anubhav"
// ob[userid]=3

// console.log(ob);
// if(ob[userid]>2){
//     console.log("anubhav got remote job");
    
// }


