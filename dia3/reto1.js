let mysql = require("mysql2")
let connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "sql994",
	database: "escenario",
})
connection.connect(function (error) {
	if (error) {
		console.log(error)
	} else {
		console.log("Succesfully connected")
	}
})

let sql = `SELECT  sub.title, s.first_name FROM subjects AS sub
JOIN subjects_teacher AS st ON (sub.subject_id = st.subject_id)
JOIN grupo AS gr ON(gr.groups_id = st.group_id)
JOIN students AS s On(s.group_id = gr.groups_id)`
connection.query(sql, (err, result) => {
	if (err) {
		console.log(err)
	} else {
		console.log(result)
	}
})
sql = `SELECT title,t.first_name,t.last_name FROM subjects
JOIN subjects_teacher AS st ON (subjects.subject_id = st.subject_id)
JOIN teachers as t ON (st.teacher_id = t.id_teacher)`

connection.query(sql, (err, result) => {
	if (err) {
		console.log(err)
	} else {
		console.log(result)
	}
})

sql = ` SELECT COUNT(students.first_name) AS studentsNumber, grupo.nombre AS grupo, teachers.first_name, teachers.last_name, subjects.title FROM students
JOIN grupo ON(students.id_student = grupo.groups_id)
JOIN subjects_teacher AS st ON(grupo.groups_id = st.group_id)
JOIN teachers ON (st.teacher_id = teachers.id_teacher)
JOIN subjects ON (st.subject_id = subjects.subject_id)
GROUP BY subjects.title`
connection.query(sql, (err, result) => {
	if (err) {
		console.log(err)
	} else {
		console.log(result)
	}
})
connection.end()
