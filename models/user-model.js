const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        name: String,
        email: String,
        password: String,
        phone: String,
        roles: [String],

    },
    { timestamps: true },
)

module.exports = mongoose.model('users', User)