const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please Enter Product Name'],
        trim:true
    },
    price:{
        type:Number,
        required:[true,'Please Enter Product Price'],
        maxlength:[8,'Price Cannot Exceed 8 Characters']
    },
    description:{
        type:String,
        required:[true,'Please Enter Product Description']
    },
    rating:{
        type:Number,
        default:0
    },
    image:[
       {
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
       }
    ],
    category:{
        type:String,
        required:[true,'Please Enter Product Category'],
    },
    stock:{
        type:Number,
        required:[true,'Please Enter Product Stock'],
        maxlength:[4,'Stock Cannot Exceed 4 Characters'],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('product',productSchema)