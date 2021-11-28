const express = require('express')
const {createProducts, getAllProducts, updateProducts, deleteProducts, getProductDetails } = require('../controller/ProductController')
const router = express.Router()



//get all producte
router.route('/products').get(getAllProducts)

//create product --Admin
router.route('/products/new').post(createProducts)

//update product --Admin..........................delete product --Admin..product detail --admin
router.route('/products/:id').put(updateProducts).delete(deleteProducts).get(getProductDetails)




module.exports = router