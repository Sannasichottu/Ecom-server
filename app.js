const express = require('express')
const app = express()
app.use(express.json())
const errorMiddleware = require('./middlewares/error')
const products = require('./routes/product')

app.use('/api/v1/', products)

app.use(errorMiddleware)

module.exports = app