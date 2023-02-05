const livros = require("../models/Livro")

class LivroController{

    static listarLivros(req,res){
        livros.find()
            .populate('autor')
            .exec((err,livros)=>{
                if (err) throw err
                res.status(200).json(livros)
            })
    }

    static listarLivroPorId(req,res){
        const {id} = req.params
        livros.findById(id)
            .populate("autor","nome")
            .exec((err,livros)=>{
                if(err){
                    res.status(400).send({message:`${err.message} - O ID informado não existe`})
                } else {
                    res.status(200).send(livros)
                }
            })
    }

    static cadastrarLivro(req,res){
        let livro = new livros(req.body)
        livro.save((err)=>{
            if(err){
                res.status(500).send({message:`${err.message} - Falha ao cadastrar livro`})
            }else{
                res.status(201).send(livro.toJSON())
            }
        })

    }

    static atualizarLivro(req,res){
        const {id} = req.params
        livros.findByIdAndUpdate(id,{$set:req.body},(err)=>{
            if(!err){
                res.status(200).send({message:"Livro atualizado com sucesso!"})
            } else {
                res.status(500).send({message:`${err.message} - Erro em algum lugar aí rsrs`})
            }
        })
    }

    static excluirLivro(req,res){
        const {id} = req.params
        livros.findByIdAndDelete(id,(err)=>{
            if(err){
                res.status(500).send({message:`${err.message} - Não foi possível excluir o livro.`})
            } else {
                res.status(200).send({message:"Livro removido com sucesso!"})
            }
        })
    }

    static excluirTodos(req,res){
        livros.deleteMany({},(err)=>{
            if(err){
                res.status(500).send({message:`${err.message} - Não foi possível completar sua task`})
            } else {
                res.status(200).send({message:"Todos os documentos foram apagados!"})
            }
        })
    }

    static listarLivroPorEditora(req,res){
        const {editora} = req.query
        livros.find({"editora":editora},{},(err,livros)=>{
            if(err){
                res.status(500).send({message:`${err.message} - Não foi possível completar sua task`})
            } else {
                res.status(200).send(livros)
            }
        })
    }

}

module.exports = LivroController