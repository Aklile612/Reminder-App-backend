import mongoose from "mongoose";


const courseSchema = new mongoose.Schema({
    coursename: { type: String, required: true },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true }
  },
  {timestamps: true}
);
  

const Course= mongoose.model("course",courseSchema)

export default Course;