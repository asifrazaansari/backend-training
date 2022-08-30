const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mid = require('../middleware/auth')

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)


router.get("/users/:userId", mid.userExist, mid.authenticate, mid.authorise, userController.getUserData)
router.post("/users/:userId/posts", mid.userExist, mid.authenticate, mid.authorise, userController.postMessage)

router.put("/users/:userId",  mid.userExist, mid.authenticate, mid.authorise, userController.updateUser)
router.delete('/users/:userId', mid.userExist, mid.authenticate, mid.authorise, userController.deleteUser)

module.exports = router;