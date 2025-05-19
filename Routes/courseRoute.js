import { Router } from "express";
import {addCourse,addDepartment,findcourse,findDepartment} from "../controller/courseController.js";
const router= Router();


router.post("/addcourse/:department_id",addCourse)
router.post("/adddepartment",addDepartment)
router.get("/finddepartment/",findDepartment)
router.get("/findcourse/:department_id",findcourse)

export default router;