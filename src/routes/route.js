const express = require('express');
const router = express.Router();
const memesController = require("../controllers/memesController")


router.get("/memes/id", memesController.gtmemesId)

router.post("/creatingMemes", memesController.creatingMemes)

module.exports = router;