const express = require("express")
const cors = require("cors")
const errorHandling = require("./error/errorHandling")
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.set("port", process.env.PORT || 4000)
app.use((req, res, next) => {
	res.status(404).json({ message: "endpoint doesnt found" })
})
app.use(errorHandling)
module.exports = app
