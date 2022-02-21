const connection = require("../database")

const getAlumnos = (req, res, next) => {
	let sql = "SELECT * FROM alumnos"
	connection.query(sql, (err, result) => {
		if (err) {
			console.log(err)
		} else {
			res.send(result)
			console.log(result)
		}
	})
}
