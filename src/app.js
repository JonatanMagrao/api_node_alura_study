const app = require("express")()
const db = require("./config/dbConnect")
const routes = require("./routes/index")

//banco de dados

db.on("error",()=>console.log("houve um erro"))
db.once("open",()=>console.log("banco carregado"))

//rotas
routes(app)

module.exports = app