const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Blog = new Schema(
    {
        title: String,
        prologue: String,
        article: String,
        confirmation: [String],

    },
    { timestamps: true },
)

module.exports = mongoose.model('blogs', Blog)