const express = require('express')
const app = express()
app.use(express.json())
const errorMiddleware = require('./middlewares/error')
const products = require('./routes/product')
const auth = require('./routes/auth')

app.use('/api/v1/', products)
app.use('/api/v1',auth)

app.use(errorMiddleware)

module.exports = app