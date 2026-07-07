import express from 'express';

const app=express();

app.get("/",(req,res)=>{
    res.json({
        message:"server is" ,
        success:true,
    })
})

app.listen(8001,()=>{
    console.log("server is up and running");
})