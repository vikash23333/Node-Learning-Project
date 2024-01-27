// require("dotenv").config({path:"./env"})
import connectDb from "./db/connection.js";
import dotenv from "dotenv";
dotenv.config({path:"./env"})

connectDb();











/*
-------------------APPROCH-1 FOR DB Connection---------------------------
import express from "express";
const app=express();
(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",(error)=>{
            console.log("app error",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on port:- ${process.env.MONGODB_URI}`);
        })
    } catch (error) {
        // console.log("db connection error"+error);
        console.error("DB Connection Error: ",error);
        throw error
    }
})()
*/