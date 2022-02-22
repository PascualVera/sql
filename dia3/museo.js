let mysql = require("mysql2")
let connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "sql994",
	database: "museo",
})
connection.connect(function (error) {
	if (error) {
		console.log(error)
	} else {
		console.log("Succesfully connected")
	}
})

let sql = `SELECT piezas.nombre, alquiler. nombre,alquiler. fecha_dev, ubicacion.lugar, dueño.name, dueño.email FROM piezas
JOIN alquiler ON(piezas.id_pieza = alquiler.id_pieza)
JOIN ubicacion ON(ubicacion.id_pieza = piezas.id_pieza)
JOIN dueño ON (piezas.id_dueño = dueño.id_dueño)
WHERE alquiler.nombre = 'Alquilado'`

connection.query(sql, (err, result) => {
	if (err) {
		console.log(err)
	} else {
		console.log(result)
	}
})

sql = `SELECT  COUNT(piezas.id_pieza)AS total, coleccion.estado FROM piezas 
JOIN coleccion  ON (piezas.id_coleccion = coleccion.id_coleccion)
GROUP BY coleccion.estado
ORDER BY total DESC`

connection.query(sql, (err, result) => {
	if (err) {
		console.log(err)
	} else {
		console.log(result)
	}
})

connection.end()
