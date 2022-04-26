/** @format */

// use express-promise-router instead of express to use async controllers
import Router from "express-promise-router"
import {
	getStudents,
	getStudentById,
	addStudent,
	removeStudent,
	updateStudent,
} from "./controller.mjs"

const router = Router()

router.get("/", getStudents)
router.get("/:id", getStudentById)

router.post("/", addStudent)

router.delete("/:id", removeStudent)

router.put("/:id", updateStudent)

export default router
