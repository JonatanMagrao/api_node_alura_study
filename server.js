require("dotenv").config()
const {PORT} = process.env || 5000
const app = require("./src/app")

app.listen(PORT,()=>console.log("Servidor rodando na porta",PORT))