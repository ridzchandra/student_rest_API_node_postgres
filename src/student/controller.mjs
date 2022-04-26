/** @format */

import { ErrorMessages } from "../../constants.mjs"
import pool from "../../db.mjs"
import {
	getStudentsQuery,
	getStudentByIdQuery,
	addStudentQuery,
	removeStudentQuery,
	updateStudentNameQuery,
} from "./queries.mjs"

export const getStudents = async (req, res) => {
	try {
		const { rows } = await pool.query(getStudentsQuery)
		res.status(200).json(rows)
	} catch (err) {
		throw err
	}
	// pool.query(getStudentsQuery, (err, results) => {
	// 	if (err) throw err
	// 	console.log(results)
	// 	res.status(200).json(results.rows)
	// })
}

export const getStudentById = async (req, res) => {
	const id = req.params.id
	try {
		const { rows } = await pool.query(getStudentByIdQuery, [id])
		res.status(200).json(rows)
	} catch (err) {
		throw err
	}
	// pool.query(getStudentByIdQuery, [id], (err, results) => {
	// 	if (err) throw err
	// 	res.status(200).json(results.rows)
	// })
}

export const addStudent = (req, res) => {
	const { name, email, age, dob } = req.body
	pool.query(addStudentQuery, [name, email, age, dob], (err, results) => {
		if (err && err.message === ErrorMessages.duplicateEmail) {
			res.send("Email already exists!")
		}
		// 201 - created successfully
		else res.status(201).send("Student created succesfully!")
	})
}

export const removeStudent = (req, res) => {
	const id = req.params.id
	pool.query(removeStudentQuery, [id], (err, results) => {
		if (err) {
			console.log(err)
			res.send("Something went wrong!")
		} else {
			res.status(200).send("Student record deleted succesfully!")
		}
	})
}

export const updateStudent = (req, res) => {
	const id = req.params.id
	const { name } = req.body
	pool.query(updateStudentNameQuery, [name, id], (err, results) => {
		if (err) {
			res.send("Something went wrong!")
			throw err
		} else {
			res.status(200).send(`Student's name updated succesfully!`)
		}
	})
}
