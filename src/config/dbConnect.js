require("dotenv").config()
const {DB_HOST,DB_DATABASE} = process.env
const mongoose = require("mongoose")

mongoose.set({strictQuery:false})

mongoose.connect(`${DB_HOST}/${DB_DATABASE}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection

module.exports = db
