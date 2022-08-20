const express = require('express');
const router = express.Router();

const authorController = require("../controllers/newAuthorController")
const publisherController = require("../controllers/newPublisherController")
const bookController = require("../controllers/newBookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/newCreateAuthor", authorController.newCreateAuthor)

router.post("/newCreatePublisher", publisherController.newCreatePublisher)

router.post("/newCreateBook", bookController.newCreateBook)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.put('/books', bookController.modifiedBooks)

module.exports = router;