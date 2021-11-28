const Product = require('../models/productModel')
const Apifeture = require('../utils/Apifeture')

//get all products
const getAllProducts = async(req,res)=>{
    try{
        const resultPerPase = 5;
        const productCount = await Product.countDocuments()
        const apiFeture = new Apifeture(Product.find(),req.query).search().filter().pagination(resultPerPase)
        let product = await apiFeture.query
        res.status(200).json({success:true,product})
    }catch(error){
        console.log('error in get all product',error.message)
    }
}


//get single product detail
const getProductDetails = async(req,res)=>{
    try{
        let product = await Product.findById(req.params.id)
        res.status(200).json({success:true,product})
    }catch(error){
        res.status(500).json({success:false,message:'product not found'})
    }
}

//create products --ADMIN
const createProducts = async(req,res,next)=>{
    try{
        let product = await Product.create(req.body)
        res.status(201).json({success:true,product})
    }catch(error){
        console.log('error in create product',error.message)
    }
    
}

//update products
const updateProducts = async(req,res)=>{
    try{
        let product = await Product.findById(req.params.id)
        product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,useFindAndModify:false})
        res.status(200).json({success:true,product})
    }catch(error){
        res.status(500).json({success:false,message:'product not found'})
    }
}


//detete product
const deleteProducts = async(req,res)=>{
    try{
        let product = await Product.findById(req.params.id)
        await product.remove()
        res.status(200).json({success:true,message:'Product Sccessfully Deleted'})
    }catch(error){
        res.status(500).json({success:false,message:'product not found'})
    }
}

module.exports = {createProducts, getAllProducts,updateProducts, deleteProducts, getProductDetails}