const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

//json config
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

//routes imported
//product route
const product = require('./routes/productRoute')
app.use('/api/v1',product)

//user route
const user = require('./routes/userRoute')
app.use('/api/v1',user)


module.exports = app