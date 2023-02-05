const {Schema,model} = require("mongoose")

const livroSchema = new Schema({
    id:{type:String},
    titulo:{type:String,required:true},
    autor:{type: Schema.Types.ObjectId, ref: "Autor", required: true},
    editora:{type:String,required:true},
    numPaginas:{type:Number}
})

const livros = model("livros",livroSchema)

module.exports = livros