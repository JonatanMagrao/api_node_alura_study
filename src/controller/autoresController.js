const autores = require("../models/Autor")

class AutorController{

    static listarAutores(req,res){
        autores.find((err,autores)=>{
            if (err) throw err
            res.status(200).json(autores)
        })
    }

    static listarAutorPorId(req,res){
        const {id} = req.params
        autores.findById(id,(err,autores)=>{
            if(err){
                res.status(400).send({message:`${err.message} - O ID informado não existe`})
            } else {
                res.status(200).send(autores)
            }
        })
    }

    static cadastrarAutor(req,res){
        let autor = new autores(req.body)
        autor.save((err)=>{
            if(err){
                res.status(500).send({message:`${err.message} - Falha ao cadastrar autor`})
            }else{
                res.status(201).send(autor.toJSON())
            }
        })

    }

    static atualizarAutor(req,res){
        const {id} = req.params
        autores.findByIdAndUpdate(id,{$set:req.body},(err)=>{
            if(!err){
                res.status(200).send({message:"autor atualizado com sucesso!"})
            } else {
                res.status(500).send({message:`${err.message} - Erro em algum lugar aí rsrs`})
            }
        })
    }

    static excluirAutor(req,res){
        const {id} = req.params
        autores.findByIdAndDelete(id,(err)=>{
            if(err){
                res.status(500).send({message:`${err.message} - Não foi possível excluir o autor.`})
            } else {
                res.status(200).send({message:"autor removido com sucesso!"})
            }
        })
    }

    static excluirTodos(req,res){
        autores.deleteMany({},(err)=>{
            if(err){
                res.status(500).send({message:`${err.message} - Não foi possível completar sua task`})
            } else {
                res.status(200).send({message:"Todos os documentos foram apagados!"})
            }
        })
    }

}

module.exports = AutorController