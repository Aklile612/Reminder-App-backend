import { Router } from "express";
import { addCalander, allEventByCoursId, allevents, singleEventByCalander,deleteCalander } from "../controller/calanderController.js";


const router= Router()

router.post("/addcalander/:course_id",addCalander);
router.get("/allcalanders",allevents)
router.get("/singlecalanderdetail/:calander_id",singleEventByCalander)
router.get("/singlecoursecalander/:course_id",allEventByCoursId)
router.delete("/singlecalanderDelete/:calander_id",deleteCalander)
export default router