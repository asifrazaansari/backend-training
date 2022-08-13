const express = require('express');
const router = express.Router();
// const UserModel= require("../models/bookModel.js")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/addBooks", BookController.addBooks  )

router.get("/getAllBooks", BookController.getAllBooks)

module.exports = router;