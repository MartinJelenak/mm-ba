const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const userRouter = require('./router/user-router')
const blogRouter = require('./router/blog-router')

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/api', userRouter, blogRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

