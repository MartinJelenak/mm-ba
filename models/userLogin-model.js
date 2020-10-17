const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserLogin = new Schema(
    {
        email: String,
        password: String,
    },
    // { timestamps: true },
)

module.exports = mongoose.model('userLogin', UserLogin)