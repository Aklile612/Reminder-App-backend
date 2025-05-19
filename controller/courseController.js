import {StatusCodes} from "http-status-codes"
import Course from "../Model/courseModel.js"
import Department from "../Model/departmentModel.js";


//add department
const addDepartment= async (req,res)=>{
    const {department_name}=req.body;

    if (!department_name){
        return res.status(StatusCodes.BAD_REQUEST).json({message:"please fill all the fields"})
    }

    try {
        const findDepartment= await Department.findOne({department_name})
        if (findDepartment){
            return res.status(StatusCodes.CONFLICT).json({ message: "Department already exist" });  
        }
        const newDepetment= new Department({
            name:department_name
        })
        const newD=await newDepetment.save()
        return res.status(StatusCodes.ACCEPTED).json({message:"saved the Department",newD})
    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"there is some issue with the server!"})   
    }
}

//add course
const addCourse= async (req,res)=>{
    const {coursename }=req.body;
    const {department_id}=req.params;
    if (!coursename ){
        return res.status(StatusCodes.BAD_REQUEST).json({message:"please fill all the fields"})
    }

    try {

        const findcourse= await Course.findOne({department:department_id,coursename})

        if (findcourse) {
            return res.status(StatusCodes.CONFLICT).json({ message: "Course already exists in this department" });
          }
        const addNewDepartmentandCourse= new Course({
            coursename:coursename,
            department:department_id,
        })
        const course= await addNewDepartmentandCourse.save()
        return res.status(StatusCodes.ACCEPTED).json({message:"saved the department and course",course})
    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"there is some issue with the server!"})
    }

}
//find department

const findDepartment= async  (req,res)=>{
    

    try {
        // Find department by _id
        const department = await Department.find();
        if (!department || department.length===0){
            return res.status(StatusCodes.BAD_REQUEST).json({message:"No Departments Yet"})
        }
        return res.status(StatusCodes.OK).json({ department });
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error finding department " });
    }

}
//find course by department

const findcourse=async (req,res)=>{

    const {department_id}=req.params;

    if (!department_id){
        return res.status(StatusCodes.BAD_REQUEST).json({ message: "Department name is required" });
    }
    try {
        const courses=await Course.find({department:department_id}).sort({ createdAt: -1 })

        if(!courses||courses.length===0){
            return res.status(StatusCodes.BAD_REQUEST).json({message:"No course exist in this department!"})
        }
        return res.status(StatusCodes.OK).json({message:"Courses Found",courses})
        
        
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"there is some issue with the server!"})
    }
}
export  {addDepartment,addCourse,findDepartment,findcourse};