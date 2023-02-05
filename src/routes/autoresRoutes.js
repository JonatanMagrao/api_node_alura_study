const express = require("express")
const AutorController = require("../controller/autoresController")

const router = express.Router()

router
    .get("/autores",AutorController.listarAutores)
    .get("/autores/:id",AutorController.listarAutorPorId)
    .post("/autores",AutorController.cadastrarAutor)
    .put("/autores/:id",AutorController.atualizarAutor)
    .put("/autores/:id",AutorController.excluirAutor)
    .delete("/autores/:id",AutorController.excluirAutor)
    .delete("/autores",AutorController.excluirTodos)

module.exports = router