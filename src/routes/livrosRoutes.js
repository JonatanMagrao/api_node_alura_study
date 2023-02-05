const express = require("express")
const LivroController = require("../controller/livrosController")

const router = express.Router()

router
    .get("/livros",LivroController.listarLivros)
    .get("/livros/busca",LivroController.listarLivroPorEditora)
    .get("/livros/:id",LivroController.listarLivroPorId)
    .post("/livros",LivroController.cadastrarLivro)
    .put("/livros/:id",LivroController.atualizarLivro)
    .put("/livros/:id",LivroController.excluirLivro)
    .delete("/livros/:id",LivroController.excluirLivro)
    .delete("/livros",LivroController.excluirTodos)


module.exports = router