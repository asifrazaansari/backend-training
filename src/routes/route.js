const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mid = require("../middleware/auth")


router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

router.put("/users/:userId", mid.userExist, mid.tokenValidation, userController.updateUser)

router.delete("/users/:userId", mid.userExist, mid.tokenValidation, userController.deleteUser)



module.exports = router;