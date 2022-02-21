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
