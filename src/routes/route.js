const express = require('express');
const router = express.Router();
const BookController = require("../controllers/bookController")



router.post("/createBook", BookController.createBook)

router.post("/createAuthor", BookController.createAuthor)

router.get("/booksByCB", BookController.booksByCB)

router.get("/authorOfTS", BookController.authorOfTS)

router.get("/booksCost", BookController.booksCost)

module.exports = router;