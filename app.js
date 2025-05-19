import express from "express"
import authRoute from "./Routes/authRoute.js"
import courseRoute from "./Routes/courseRoute.js"
import calanderRoute from "./Routes/calanderRoute.js"
import cors from 'cors'
 
const app=express()
app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


app.use("/auth",authRoute)
app.use("/course",courseRoute)
app.use("/calander",calanderRoute)
export default app