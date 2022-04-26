/** @format */

export const getStudentsQuery = "SELECT * FROM student;"

//  Here $1 is a var which takes the value passed as the first element in the array in pool.query() in controller.mjs
export const getStudentByIdQuery = `SELECT * FROM student
                                WHERE student_uid = $1;`

export const addStudentQuery = `INSERT INTO student (student_uid, name, email, age, dob)
                                VALUES (uuid_generate_v4(), $1, $2, $3, $4);`

export const removeStudentQuery = `DELETE FROM student
                                    WHERE student_uid = $1;`

export const updateStudentNameQuery = `UPDATE student
                                    SET name = $1
                                    WHERE student_uid = $2;`
