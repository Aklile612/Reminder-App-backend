import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()


const dbURI=process.env.DBURI;
 const dbconnect= async ()=> {
    try {
        await mongoose.connect(dbURI)
        console.log("connected")
    } catch (error) {
        console.log(error.message)
        process.exit(1)   
    }
}
export default dbconnect