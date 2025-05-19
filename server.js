import express from "express"
import dotenv from 'dotenv'
import dbconnect from "./db/dbConnection.js"
import app from "./app.js"
import cors from 'cors'

app.use(cors()); 
app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(5000,(req,res)=>{
    dbconnect()
    console.log("app running on port 5000")
})