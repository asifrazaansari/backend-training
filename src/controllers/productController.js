const { count } = require("console")
const productModel= require("../models/productModel")

const createProduct= async function (req, res) {
    let data = req.body
    let productPrice = data.price
    if(!productPrice) return res.send({msg: 'productPrice is mandatory in the request'})

    let savedData= await productModel.create(data)
    res.send({data: savedData})
}

module.exports.createProduct= createProduct
