/** @format */

import pg from "pg"
const { Pool } = pg
import dotenv from "dotenv"

dotenv.config()

const pool = new Pool({
	user: process.env.POSTGRES_USERNAME,
	host: "localhost",
	database: "students",
	password: process.env.POSTGRES_PASSWORD,
	port: 5432,
})

export default pool
