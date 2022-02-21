//inputs
let nombre = document.getElementById("name")
let surname = document.getElementById("surname")
let year = document.getElementById("year")
let id_student = document.getElementById("id")
let group_id = document.getElementById("group_id")

//botones
let mostrar = document.getElementById("mostrar")
let actualizar = document.getElementById("actualizar")
let crear = document.getElementById("crear")
let borrar = document.getElementById("eliminar")

//functions
mostrar.addEventListener("click", async () => {
	let url
	if (id_student.value == "") {
		url = "http://localhost:3000/alumnos"
	} else {
		url = "http://localhost:3000/alumnos?id=" + id_student.value
	}

	let param = {
		headers: {
			"content-type": "application/json; charset = UTF-8",
		},
		method: "GET",
	}
	try {
		let data = await fetch(url, param)
		let result = await data.json()
		document.querySelector(".lista_alumnos").innerHTML = print(result)
		document.querySelector(".lista_alumnos").style.transition = "1s"
		document.querySelector(".lista_alumnos").style.opacity = "1"
	} catch (error) {
		console.log(error)
	}
})
crear.addEventListener("click", async () => {
	let arr = [nombre.value, surname.value, year.value, group_id.value, id_student.value]
	let arr2 = [nombre, surname, year, group_id, id_student]
	for (let i = 0; i < arr2.length; i++) {
		if (arr2[i].value == "") {
			arr2[i].nextSibling.style.opacity = "1"
		}
	}
	if (arr.includes("")) {
		document.querySelector(".required").style.opacity = "1"
		document.querySelector(".required").style.transition = "0.4s"
	} else {
		try {
			let url = "http://localhost:3000/alumnos"
			let alumno = {
				first_name: nombre.value,
				last_name: surname.value,
				group_id: Number(group_id.value),
				año_ingreso: year.value,
			}
			let param = {
				headers: {
					"content-type": "application/json; charset = UTF-8",
				},
				body: JSON.stringify(alumno),
				method: "POST",
			}
			let data = await fetch(url, param)
			let result = await data.json()
			console.log(result)
		} catch (error) {
			console.log(error)
		}
	}
})
actualizar.addEventListener("click", async () => {
	try {
		let url = "http://localhost:3000/alumnos?id=" + id_student.value
		let alumno = {
			first_name: nombre.value,
			last_name: surname.value,
			group_id: group_id.value,
			año_ingreso: year.value,
		}
		for (const item in alumno) {
			if (alumno[item] == "") {
				delete alumno[item]
			}
		}

		let param = {
			headers: {
				"content-type": "application/json; charset = UTF-8",
			},
			body: JSON.stringify(alumno),
			method: "PUT",
		}
		let data = await fetch(url, param)
		let result = await data.json()
		console.log(result)
	} catch (error) {
		console.log(error)
	}
})
borrar.addEventListener("click", async () => {
	let url = "http://localhost:3000/alumnos?id=" + id_student.value
	let param = {
		headers: {
			"content-type": "application/json; charset = UTF-8",
		},

		method: "DELETE",
	}
	try {
		let data = await fetch(url, param)
		let result = await data.json()
		console.log(result)
	} catch (error) {
		console.log(error)
	}
})

const print = (datos) => {
	let post = "<div class=list><span><p>Nombre</p><p>Apellidos</p><p>ID</p></span>"
	for (const item of datos) {
		post += `<span><p>${item.first_name}</p><p>${item.last_name}</p><p>${item.id_student}</p></span>`
	}
	post += "</div>"
	return post
}
