const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const userRouter = require('./user-router')

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', userRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))




// const express = require('express');
// const Joi = require('joi');
// const app = express()
// const mongoose = require('mongoose');
// const uri = process.env.MONGOATLAS_URI || "mongodb+srv://Langos:TestovacieHeslo2@cluster0.t0cqe.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority"
// const port = 4000;

// app.listen(port, () => console.log(`Server RUNING OK, listening on port ${port}.`))

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB!'))
//     .catch(error => console.error('Could not connect to MongoDB'))

// app.get('/api/user', (req, res) => {
//     User.find().then(users => { res.json(users) })
// });

// app.get('/api/user/:id', (req, res) => {
//     const id = String(req.params.id);
//     User.findById(id, (err, result) => {
//         if (err || !result) {
//             res.status(404).send("User nebyl nalezen.");
//         }
//         else
//             res.json(result);
//     });
// });


// function validateUser(user, required = true) {
//     const schema = {
//         name: Joi.string(),
//         email: Joi.string(),
//         password: Joi.string(),
//         phone: Joi.string(),
//     };

//     return Joi.validate(user, schema, { presence: (required) ? "required" : "optional" });
// }

// app.post('/api/user', (req, res) => {
//     // const { error } = validateUser(req.body);
//     User.create(req.body)
//         .then(result => { res.json(result) })
//         .catch(err => { res.send("Nepodařilo se uložit film!") });
// });

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String,
//     phone: String,
// });

// const User = mongoose.model('User', userSchema);

