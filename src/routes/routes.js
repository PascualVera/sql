const { Router } = require("express")
const { connect, response } = require("../app")
require("../database")
const router = Router()

router.get("/alumnos", getAlumnos)
