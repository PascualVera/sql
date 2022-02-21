let id = document.getElementById("id")
//Botones
let media = document.getElementById("media")
let alumno = document.getElementById("alumno")
let profesor = document.getElementById("profesor")
//funciones

media.addEventListener("click", async () => {
	if (id.value == "") {
		showToast("Introduce un id")
	} else {
		document.querySelector(".input").classList.add("input")
		document.querySelector(".input").classList.remove("alertStyle")

		let url = "http://localhost:3000/media?id=" + id.value

		let param = {
			headers: {
				"content-type": "application/json; charset = UTF-8",
			},
			method: "GET",
		}
		try {
			let data = await fetch(url, param)
			let result = await data.json()
			document.querySelector(".lista_info").innerHTML = printMedia(result)
			document.querySelector(".lista_info").style.opacity = "1"
		} catch (error) {
			console.log(error)
		}
	}
})

alumno.addEventListener("click", async () => {
	document.querySelector(".form_container").style.width = "33vw"
	document.querySelector(".form_container").style.transition = "1s"
	let url

	if (id.value == "") {
		url = "http://localhost:3000/apuntadas"
	} else {
		url = "http://localhost:3000/apuntadas?id=" + id.value
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
		document.querySelector(".lista_info").innerHTML = printProfesor(result)
		document.querySelector(".lista_info").style.opacity = "1"
	} catch (error) {
		console.log(error)
	}
})
profesor.addEventListener("click", async () => {
	let url
	if (id.value == "") {
		url = "http://localhost:3000/impartidas"
	} else {
		url = "http://localhost:3000/impartidas?id=" + id.value
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
		document.querySelector(".lista_info").innerHTML = printProfesor(result)
		document.querySelector(".lista_info").style.opacity = "1"
	} catch (error) {
		console.log(error)
	}
})
const printProfesor = (datos) => {
	let post = "<div class=list><span><p>Nombre</p><p>Apellidos</p><p>Asignatura</p></span>"
	for (const item of datos) {
		post += `<span><p>${item.first_name}</p><p>${item.last_name}</p><p>${item.title}</p></span>`
	}
	post += "</div>"
	return post
}
const printMedia = (datos) => {
	let post = "Tu media es de " + datos[0].media
	return post
}

const showToast = (text) => {
	document.getElementsByID(
		"header"
	).innerHTML += `<div role="alert" aria-live="assertive" aria-atomic="true" class="toast" data-autohide="false">
  <div class="toast-header">
    <img src="..." class="rounded mr-2" alt="...">
    <strong class="mr-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">
    ${text}
  </div>
</div>`
}
