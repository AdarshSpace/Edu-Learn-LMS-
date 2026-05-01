import { Router } from "express";
import { createCourse } from "../controllers/Courses/CreateCourses.js";
import { getCourses } from "../controllers/Courses/GetAllCourses.js";
import { updateCourse } from "../controllers/Courses/UpdateCourses.js";
import { deleteCourse } from "../controllers/Courses/DeleteCourses.js";


const router = Router();

router.post("/create", createCourse);
router.get("/getAll", getCourses);
router.put("/update/:courseId", updateCourse);
router.delete("/delete/:courseId", deleteCourse);


export default router;