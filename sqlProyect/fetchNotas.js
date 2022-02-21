let student_id = document.getElementById("id")
let subject = document.getElementById("subject")
let date = document.getElementById("date")
let mark = document.getElementById("mark")
let nota_id = document.getElementById("mark_id")
//botones
let mostrar = document.getElementById("mostrar")
let crear = document.getElementById("crear")
let editar = document.getElementById("editar")
let borrar = document.getElementById("borrar")

mostrar.addEventListener("click", async () => {
	console.log(document.querySelectorAll(".input").value)
	document.querySelector(".form_container").style.width = "33vw"
	document.querySelector(".form_container").style.transition = "1s"
	let url
	if (student_id.value == "") {
		url = "http://localhost:3000/notas"
	} else {
		url = "http://localhost:3000/notas?id=" + student_id.value
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
		console.log(result[0])
		if (result[0] == undefined) {
			document.querySelector(".lista_info").style.opacity = "1"
			document.querySelector(".lista_info").style.transition = "1s"
			document.querySelector(".lista_info").innerHTML = "No hay notas"
		} else {
			document.querySelector(".lista_info").innerHTML = print(result)
			document.querySelector(".lista_info").style.opacity = "1"
			document.querySelector(".lista_info").style.transition = "1s"
		}
	} catch (error) {
		console.log(error)
	}
})
crear.addEventListener("click", async () => {
	try {
		let url = "http://localhost:3000/notas"
		let nota = {
			student_id: student_id.value,
			subject_id: subject.value,
			date: date.value,
			mark: mark.value,
		}
		let param = {
			headers: {
				"content-type": "application/json; charset = UTF-8",
			},
			body: JSON.stringify(nota),
			method: "POST",
		}

		let data = await fetch(url, param)
		let result = await data.json()
		console.log(result)
	} catch (err) {
		console.log(err)
	}
})
editar.addEventListener("click", async () => {
	try {
		let url = "http://localhost:3000/notas?id=" + nota_id.value
		let nota = {
			student_id: student_id.value,
			subject_id: subject.value,
			date: date.value,
			mark: mark.value,
		}
		for (const item in nota) {
			if (nota[item] == "") {
				delete nota[item]
			}
		}
		console.log(nota)
		let param = {
			headers: {
				"content-type": "application/json; charset = UTF-8",
			},
			body: JSON.stringify(nota),
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
	let url = "http://localhost:3000/notas?id=" + student_id.value
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
	let post =
		"<div class=list><span><p>ID Mark</p><p>Id Student</p><p>Id Subject</p><p>Nota</p><p>Fecha</p></span>"
	for (const item of datos) {
		let dateModified = new Date(item.date)
		console.log(dateModified.toDateString())
		post += `<span><p>${item.mark_id}</p> <p>${item.student_id}</p><p>${item.subject_id}</p><p>${
			item.mark
		}</p><p>${dateModified.toDateString()}</p></span>`
	}
	post += "</div>"
	return post
}
document.querySelector(".close").addEventListener("click", () => {
	document.querySelector(".form_container").style.width = "43vw"
	document.querySelector(".form_container").style.transition = "1s"
	document.querySelector(".lista_info").style.opacity = "0"
	document.querySelector(".lista_info").style.transition = "1s"
})
