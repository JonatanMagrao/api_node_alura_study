const express = require("express")
const livros = require("./livrosRoutes")
const autores = require("./autoresRoutes")

const routes = (app) => {
    app.route("/").get((req,res)=>{
        res.status(200).send({titulo:"Curso de node"})
    })

    app.use(
        express.json(),
        express.urlencoded({extended:true}),
        livros,
        autores
    )
}

module.exports = routes
