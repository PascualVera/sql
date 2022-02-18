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
		console.log("Conexion correcta.")
	}
})
let sql
//Tablas

// sql =
// 	"CREATE TABLE students (id_student INT AUTO_INCREMENT PRIMARY KEY ,first_name VARCHAR(12) ,last_name VARCHAR(45), group_id INT)"

// connection.query(sql, function (err, result) {
// 	if (err) console.log(err)
// 	else {
// 		console.log("Created table")
// 		console.log(result)
// 	}
// })
// sql =
// 	"CREATE TABLE teachers (id_teacher INT AUTO_INCREMENT PRIMARY KEY ,first_name VARCHAR(45) ,last_name VARCHAR(45) ,subjects VARCHAR(45))"
// connection.query(sql, function (err, result) {
// 	if (err) console.log(err)
// 	else {
// 		console.log("Created table")
// 		console.log(result)
// 	}
// })
// sql = "CREATE TABLE subjects_teacher (subject_id INT ,teacher_id INT ,group_id INT)"
// connection.query(sql, function (err, result) {
// 	if (err) console.log(err)
// 	else {
// 		console.log("New subjects_teacher table added")
// 		console.log(result)
// 	}
// })
// sql =
// 	"CREATE TABLE marks (mark_id INT AUTO_INCREMENT PRIMARY KEY ,student_id INT, subject_id INT, date DATE , mark INT)"
// connection.query(sql, function (err, result) {
// 	if (err) console.log(err)
// 	else {
// 		console.log("New marks table added")
// 		console.log(result)
// 	}
// })

//Inserts

// sql = `INSERT INTO escenario.groups (name) VALUES ('Griffindor')`

// connection.query(sql, function (err, result) {
// 	if (err) console.log(err)
// 	else {
// 		console.log("Group added")
// 		console.log(result)
// 	}
// })

// sql = `INSERT INTO escenario.groups (name) VALUES ('Slytherin')`

// connection.query(sql, function (err, result) {
// 	if (err) console.log(err)
// 	else {
// 		console.log("Group added")
// 		console.log(result)
// 	}
// })

// sql = `INSERT INTO escenario.groups (name) VALUES ('Hufflepuff')`

// connection.query(sql, function (err, result) {
// 	if (err) console.log(err)
// 	else {
// 		console.log("Group added")
// 		console.log(result)
// 	}
// })

// sql = `INSERT INTO escenario.groups (name) VALUES ('Ravenclaw')`

// connection.query(sql, function (err, result) {
// 	if (err) console.log(err)
// 	else {
// 		console.log("Group added")
// 		console.log(result)
// 	}
// })

// sql = `INSERT INTO escenario.groups (name) VALUES ('Rojo')`

// connection.query(sql, function (err, result) {
// 	if (err) console.log(err)
// 	else {
// 		console.log("Group added")
// 		console.log(result)
// 	}
// })

// sql = `INSERT INTO escenario.groups (name) VALUES ('Azul')`

// connection.query(sql, function (err, result) {
// 	if (err) console.log(err)
// 	else {
// 		console.log("Group added")
// 		console.log(result)
// 	}
// })

// sql = `INSERT INTO escenario.groups (name) VALUES ('Verde')`

// connection.query(sql, function (err, result) {
// 	if (err) console.log(err)
// 	else {
// 		console.log("Group added")
// 		console.log(result)
// 	}
// })

// sql = `INSERT INTO escenario.groups (name) VALUES ('Amarillo')`

// connection.query(sql, function (err, result) {
// 	if (err) console.log(err)
// 	else {
// 		console.log("Group added")
// 		console.log(result)
// 	}
// })

// sql = `INSERT INTO escenario.groups (name) VALUES ('Los Ramones')`

// connection.query(sql, function (err, result) {
// 	if (err) console.log(err)
// 	else {
// 		console.log("Group added")
// 		console.log(result)
// 	}
// })

// sql = `INSERT INTO escenario.groups (name) VALUES ('Aerosmith')`

// connection.query(sql, function (err, result) {
// 	if (err) console.log(err)
// 	else {
// 		console.log("Group added")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO teachers(first_name, last_name) VALUES ('Fernando','Alonso') `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added teacher")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO teachers(first_name, last_name) VALUES ('Alejandro','Magno') `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added teacher")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO teachers(first_name, last_name) VALUES ('Stephen','Hawking') `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added teacher")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO teachers(first_name, last_name) VALUES ('Antonio','Banderas') `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added teacher")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO teachers(first_name, last_name) VALUES ('Dembele','Kimbepe') `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added teacher")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO teachers(first_name, last_name) VALUES ('Miguel','Hernandez') `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added teacher")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO teachers(first_name, last_name) VALUES ('Indiana','Jones') `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added teacher")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO teachers(first_name, last_name) VALUES ('Marie','Curie') `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added teacher")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO teachers(first_name, last_name) VALUES ('Leonardo','Da Vinci') `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added teacher")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO teachers(first_name, last_name) VALUES ('Steve','Nash') `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added teacher")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO students(first_name, last_name,group_id) VALUES ('Pascual','Vera',1) `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added student")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO students(first_name, last_name,group_id) VALUES ('Apolo','Jackson',3) `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added student")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO students(first_name, last_name,group_id) VALUES ('David','Martinez',2) `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added student")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO students(first_name, last_name,group_id) VALUES ('Peter','Parker',4) `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added student")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO students(first_name, last_name,group_id) VALUES ('Pedro','Sanchez',5) `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added student")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO students(first_name, last_name,group_id) VALUES ('Van','Nistelroy',6) `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added student")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO students(first_name, last_name,group_id) VALUES ('Aurelio','Murcielago',7) `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added student")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO students(first_name, last_name,group_id) VALUES ('Paco','Porras',8) `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added student")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO students(first_name, last_name,group_id) VALUES ('German','Abenza',9) `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added student")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO students(first_name, last_name,group_id) VALUES ('Hulk','Hogan',10) `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added student")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO subjects(title) VALUES ('Carreras') `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added subject")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO subjects(title) VALUES ('Conquistas') `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added subject")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO subjects(title) VALUES ('Fisica') `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added subject")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO subjects(title) VALUES ('Actuacion') `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added subject")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO subjects(title) VALUES ('Danza') `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added subject")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO subjects(title) VALUES ('Lengua') `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added subject")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO subjects(title) VALUES ('Historia') `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added subject")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO subjects(title) VALUES ('Quimica') `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added subject")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO subjects(title) VALUES ('Dibujo Tecnico') `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added subject")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO subjects(title) VALUES ('Economia') `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added subject")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO marks(subject_id,student_id,date,mark) VALUES (2,2,'1993-02-21',6) `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added mark")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO marks(subject_id,student_id,date,mark) VALUES (3,3,'1995-01-20',4) `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added mark")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO marks(subject_id,student_id,date,mark) VALUES (4,4,'2020-04-11',1) `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added mark")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO marks(subject_id,student_id,date,mark) VALUES (5,5,'2021-03-06',8) `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added mark")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO marks(subject_id,student_id,date,mark) VALUES (6,6,'2018-01-31',1) `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added mark")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO marks(subject_id,student_id,date,mark) VALUES (7,7,'2020-04-11',1) `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added mark")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO marks(subject_id,student_id,date,mark) VALUES (8,8,'2010-04-11',4) `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added mark")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO marks(subject_id,student_id,date,mark) VALUES (9,9,'2120-04-11',8) `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added mark")
// 		console.log(result)
// 	}
// })
// sql = `INSERT INTO marks(subject_id,student_id,date,mark) VALUES (10,10,'2020-04-11',9) `
// connection.query(sql, (err, result) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log("Added mark")
// 		console.log(result)
// 	}
// })
//RETO 3
sql = "UPDATE marks SET mark=0"

connection.query(sql, function (err, result) {
	if (err) {
		console.log(err)
	} else {
		console.log("Todos a Septiembre")
		console.log(result)
	}
})
sql = "SELECT first_name, last_name FROM students"

connection.query(sql, function (err, result) {
	if (err) {
		console.log(err)
	} else {
		console.log("Los panas")
		console.log(result)
	}
})
sql = "SELECT * FROM teachers"

connection.query(sql, function (err, result) {
	if (err) console.log(err)
	else {
		console.log("Datos profesores")
		console.log(result)
	}
})
sql = "DELETE FROM marks WHERE date > '2012-01-01'"

connection.query(sql, function (err, result) {
	if (err) {
		console.log(err)
	} else {
		console.log("marks deleted")
		console.log(result)
	}
})
sql = "UPDATE marks SET mark = 5 WHERE mark <5"

connection.query(sql, function (err, result) {
	if (err) {
		console.log(err)
	} else {
		console.log("Aprobado por lastima")
		console.log(result)
	}
})
connection.end()
