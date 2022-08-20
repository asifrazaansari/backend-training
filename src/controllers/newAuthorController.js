const newAuthorModel = require("../models/newAuthorModel")

const newCreateAuthor = async function (req, res) {
    let author = req.body
    let authorCreated = await newAuthorModel.create(author)
    res.send({ data: authorCreated })
}

module.exports.newCreateAuthor = newCreateAuthor
