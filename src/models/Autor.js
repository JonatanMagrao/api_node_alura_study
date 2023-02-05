const {Schema,model} = require("mongoose")

const autorSchema = new Schema({

        id:{type:String},
        nome:{type:String,required:true},
        nacionalidade:{type:String}

    },
    {
        versionKey:false
    }
)

const autores = model("Autor",autorSchema)
module.exports = autores