const express = require('express')
const cors = require('cors')
const app = express()

//json config
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

//routes imported
const product = require('./routes/productRoute')
app.use('/api/v1',product)


module.exports = app