const app = require('./app')
const dotenv = require('dotenv')
const connectDtabase = require('./config/database')

//config
dotenv.config({path:'backend/config/config.env'})

//connect to database
connectDtabase()

const port = process.env.PORT
app.listen(port, ()=>console.log(`server on running on http://localhost:${port}`))