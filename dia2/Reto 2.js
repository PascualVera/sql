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

let sql

sql =
	"SELECT student_id,mark FROM marks WHERE student_id BETWEEN 1 AND 20 OR (mark > 8 AND date BETWEEN '2021-01-01' AND '2021-12-31')"

connection.query(sql, function (err, result) {
	if (err) {
		console.log(err)
	} else {
		console.log("Lista de aprobados")
		console.log(result)
	}
})
sql =
	"SELECT AVG(mark) AS avg_subjects FROM marks WHERE date BETWEEN '2021-01-01' AND '2021-12-31' GROUP BY subject_id"

connection.query(sql, function (err, result) {
	if (err) console.log(err)
	else {
		console.log("AVG by subject")
		console.log(result)
	}
})
sql =
	"SELECT AVG(mark) AS avg_students FROM marks WHERE date BETWEEN '2021-01-01' AND '2021-12-31' GROUP BY student_id"

connection.query(sql, function (err, result) {
	if (err) console.log(err)
	else {
		console.log("AVG by students")
		console.log(result)
	}
})
connection.end()
