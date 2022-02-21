const app = require("./app")

require("./database")
app.listen(app.get("sort"), () => {
	console.log("server listen on ", app.get("port"))
})
