const mongoose = require('mongoose')
const uri = process.env.MONGOATLAS_URI || "mongodb+srv://Langos:TestovacieHeslo2@cluster0.t0cqe.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority"


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB!'))
    .catch(error => console.error('Could not connect to MongoDB', error.message))

const db = mongoose.connection

module.exports = db