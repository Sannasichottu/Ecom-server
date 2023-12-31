const mongoose = require('mongoose')

const connectDatabase = () => {
    mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`MongoDB is connected to the host : ${process.env.PORT}`)
  })
}

module.exports = connectDatabase