import {StatusCodes} from "http-status-codes"
import User from "../Model/user.model.js";
import bcrypt, { compare } from "bcrypt"
import { generateToken } from "../utils/jwt.js";

export const signup=async (req,res)=>{
    const {username,email,password}= req.body;

    try {
        const existinguser=await User.findOne({email});

        if (existinguser){
            return res.status(StatusCodes.CONFLICT).json({message: "user already exists!"});
        }
        if (password.lenght <= 8){
            return res.status(StatusCodes.CONFLICT).json({message: "password character must be greater than 8"});
        }
        const hashedpassword= await  bcrypt.hash(password,10);
        const newUser=new User({
            username:username,
            email:email,
            password:hashedpassword
        });
        
        const user= await newUser.save();
        const token=generateToken(user);
        res.status(StatusCodes.CREATED).json({message:"user succesfully created",token,username})
    } catch (error) {
        console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"some error occured!",error})
    }
}


export const login =async (req,res)=>{
    const {email,password}=req.body;

    try {
        const findemail= await User.findOne({email})
        if (!findemail){
            return res.status(StatusCodes.BAD_REQUEST).json({message:"user is not registered"})
        }

        const comparePassword= await bcrypt.compare(password,findemail.password);

        if (!comparePassword){
            return res.status(StatusCodes.UNAUTHORIZED).json({message:"please enter the correct password!!!"})
        }
        const UserName=findemail.username;
        res.status(StatusCodes.ACCEPTED).json({message:"user Logged in successfully",UserName})



        
    } catch (error) {
        console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"Please try again, there might be an unknown error on the server",error})
    }
}