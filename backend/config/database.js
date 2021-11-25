const mongoose = require('mongoose')

const connectDtabase = ()=>{
    try {
        mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,UseUnifiedTopology:true})
        console.log('database connection successfully')
    } catch (error) {
        console.log('database connection error')
    }
}

module.exports = connectDtabase