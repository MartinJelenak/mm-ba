const express = require('express')
const app = express()
const mongoose = require('mongoose');
const uri = process.env.MONGOATLAS_URI || "mongodb+srv://Langos:TestovacieHeslo2@cluster0.t0cqe.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority"
const port = 4000;

app.listen(port, () => console.log(`Server RUNING OK, listening on port ${port}.`))

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB!'))
    .catch(error => console.error('Could not connect to MongoDB'))

app.get('/api/user', (req, res) => {
    User.find().then(users => { res.json(users) })
});

app.get('/api/user/:id', (req, res) => {
    const id = String(req.params.id);
    User.findById(id, (err, result) => {
        if (err || !result) {
            res.status(404).send("User nebyl nalezen.");
        }
        else
            res.json(result);
    });
});


app.post('/api/user', (req, res) => {
    User.create(req.body)
        .then(result => { res.json(result) })
        .catch(err => { res.send("Nepodařilo se uložit film!") });
});

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    phone: String,
});

// function validateUser(movie, allRequired = true) {
//     const schema = {
//         name: Joi.string().min(3),
//         email: Joi.string(),
//         password: Joi.string(),
//         phone: Joi.bool(),
//     };

//     return Joi.validate(movie, schema, { presence: (allRequired) ? "required" : "optional" });
// }

const User = mongoose.model('User', userSchema);

