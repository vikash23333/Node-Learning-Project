// require("dotenv").config({path:"./env"})
import { app } from "./app.js";
import connectDb from "./db/connection.js";
import dotenv from "dotenv";
dotenv.config({path:"./.env"});//./.env

connectDb().then(()=>{
    app.on("error",(error)=>{
        console.log("app error on",error);
        throw error
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on port:- http://localhost:${process.env.PORT}`);
    })
}).catch((err)=>{
    console.log("Connection error:- ",err);
})











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