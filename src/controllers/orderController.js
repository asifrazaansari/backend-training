const { count } = require("console")
const { freeAppUser } = require("../middlewares/commonMiddlewares")
const UserModel = require("../models/userModel")
const ProductModel = require("../models/productModel")
const OrderModel = require('../models/orderModel')


const createOrder = async function (req, res) {
    let freeAppUser = req.headers.isfreeappuser
    let data = req.body
    data['isFreeAppUser'] = freeAppUser
    const userId = await UserModel.findById(data.userId)
    const productId = await ProductModel.findById(data.productId)

    if (!(userId && productId)) {
        return res.send("Error:  UserId or ProductId is not present")
    } else if (freeAppUser === true.toString()) {
        data.amount = 0
        const allUser = await OrderModel.create(data)
        res.send({ msg: allUser })
    } else if (userId.balance < productId.price && freeAppUser === false.toString()) {
        return res.send("Your balance is insufficient")
    } else if (userId.balance > productId.price && freeAppUser === false.toString()) {
        data.amount = productId.price
        userId.balance = userId.balance - productId.price
        await userId.save();
        const allUser = await OrderModel.create(data)
        res.send({ msg: allUser })
    }
}


module.exports.createOrder = createOrder
