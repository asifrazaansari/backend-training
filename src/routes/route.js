const express = require('express');
const router = express.Router();
const UserController = require("../controllers/userController")
const ProductController = require("../controllers/productController")
const OrderController = require("../controllers/orderController")
const CommonMiddleware = require("../middlewares/commonMiddlewares")


router.post("/createProduct", ProductController.createProduct)

router.post("/createUser", CommonMiddleware.freeAppUser, UserController.createUser)

router.post("/createOrder", CommonMiddleware.freeAppUser, OrderController.createOrder)




module.exports = router;