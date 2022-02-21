const express = require("express")
let app = express()
const cors = require("cors")
let mysql = require("mysql2")
let connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "sql994",
	database: "escenario",
})
connection.connect((error) => {
	if (error) {
		console.log(error)
	} else {
		console.log("Succesfully connected")
	}
})

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get("/alumnos", (request, response) => {
	let id = request.query.id
	console.log(id)
	let sql
	if (id == undefined) {
		sql = "SELECT * FROM students"
	} else {
		sql = "SELECT * FROM students WHERE id_student=" + id
	}
	connection.query(sql, (err, result) => {
		if (err) {
			console.log(err)
		} else {
			response.send(result)
		}
	})
})

app.post("/alumnos", (request, response) => {
	let sql = `INSERT INTO students(first_name, last_name, group_id, año_ingreso)
   VALUES ("${request.body.first_name}","${request.body.last_name}",${request.body.group_id},"${request.body.año_ingreso}")`
	console.log(sql)
	connection.query(sql, (err, result) => {
		if (err) {
			console.log(err)
		} else {
			console.log(result)
			if (result.insertId) {
				response.send(String(result.insertId))
			} else {
				response.send("-1")
			}
		}
	})
})

app.put("/alumnos", (request, response) => {
	let id = request.query.id
	let params = [
		request.body.first_name,
		request.body.last_name,
		request.body.group_id,
		request.body.año_ingreso,
	]
	let sql = `UPDATE students SET first_name = COALESCE(?,first_name),
  last_name = COALESCE(?,last_name),
  group_id = COALESCE(?,group_id),
  año_ingreso = COALESCE(?,año_ingreso)
  WHERE id_student = ${id}`
	connection.query(sql, params, (err, result) => {
		if (err) {
			console.log(err)
		} else {
			console.log(result)
			response.send(result)
		}
	})
})
app.delete("/alumnos", (request, response) => {
	let id = request.query.id
	let sql = `DELETE FROM students WHERE id_student = ${id}`
	connection.query(sql, (err, result) => {
		if (err) {
			console.log(err)
		} else {
			console.log(result)
			response.send(result)
		}
	})
})

///////
///////Marks
//////
app.get("/notas", (request, response) => {
	let id = request.query.id
	let sql
	if (id == undefined) {
		sql = "SELECT * FROM marks"
	} else {
		sql = "SELECT * FROM marks WHERE student_id =" + id
	}
	connection.query(sql, (err, result) => {
		if (err) {
			console.log(err)
		} else {
			response.send(result)
		}
	})
})
app.post("/notas", (request, response) => {
	let sql = `INSERT INTO marks (student_id,subject_id,date,mark) 
	VALUES("${request.body.student_id}","${request.body.subject_id}","${request.body.date}","${request.body.mark}")`
	connection.query(sql, (err, result) => {
		if (err) {
			console.log(err)
		} else {
			console.log(result)
			if (result.insertId) {
				response.send(String(result.insertId))
			} else {
				response.send("-1")
			}
		}
	})
})
app.put("/notas", (request, response) => {
	let id = request.query.id
	let params = [
		request.body.student_id,
		request.body.subject_id,
		request.body.date,
		request.body.mark,
	]
	let sql = `UPDATE marks SET student_id = COALESCE(?,student_id),
	subject_id = COALESCE(?,subject_id),
	date = COALESCE(?,date),
	mark = COALESCE (?,mark)
	WHERE mark_id = ${id}`
	connection.query(sql, params, (err, result) => {
		if (err) {
			console.log(err)
		} else {
			console.log(result)
			response.send(result)
		}
	})
})
app.delete("/notas", (request, response) => {
	let id = request.query.id
	let sql = `DELETE FROM marks WHERE mark_id = ${id}`
	connection.query(sql, (err, result) => {
		if (err) {
			console.log(err)
		} else {
			console.log(result)
			response.send(result)
		}
	})
})
app.get("/media", (request, response) => {
	let id = request.query.id
	let sql = "SELECT AVG(mark) AS media FROM marks WHERE student_id = " + id
	connection.query(sql, (err, result) => {
		if (err) {
			console.log(err)
		} else {
			console.log(result)
			response.send(result)
		}
	})
})
app.get("/apuntadas", (request, response) => {
	let id = request.query.id
	let sql
	if (id == undefined) {
		sql = `SELECT subjects.title, students.first_name, students.last_name FROM subjects
		JOIN subjects_teacher as st ON (subjects.subject_id = st.group_id)
		JOIN grupo ON (grupo.groups_id = st.subject_id)
		JOIN students ON(students.group_id = grupo.groups_id)`
	} else {
		sql = `SELECT subjects.title, students.first_name, students.last_name FROM subjects
		JOIN subjects_teacher as st ON (subjects.subject_id = st.group_id)
		JOIN grupo ON (grupo.groups_id = st.subject_id)
		JOIN students ON(students.group_id = grupo.groups_id) WHERE students.id_student = ${id}`
	}
	connection.query(sql, (err, result) => {
		if (err) {
			console.log(err)
		} else {
			console.log(result)
			response.send(result)
		}
	})
})
app.get("/impartidas", (request, response) => {
	let id = request.query.id
	let sql
	if (id == undefined) {
		sql = `SELECT teachers.first_name,teachers.last_name, subjects.title FROM teachers 
		JOIN subjects_teacher as st ON (teachers.id_teacher=st.teacher_id)
		JOIN subjects ON(subjects.subject_id = st.subject_id)`
	} else {
		sql = `SELECT teachers.first_name,teachers.last_name, subjects.title FROM teachers 
		JOIN subjects_teacher as st ON (teachers.id_teacher=st.teacher_id)
		JOIN subjects ON(subjects.subject_id = st.subject_id) 
		WHERE teachers.id_teacher = ${id}`
	}
	connection.query(sql, (err, result) => {
		if (err) {
			console.log(err)
		} else {
			console.log(result)
			response.send(result)
		}
	})
})
//
app.listen(3000, () => {
	console.log("connected")
})
