const newAuthorModel = require("../models/newAuthorModel")

const newCreateAuthor = async function (req, res) {
    let author = req.body
    let authorCreated = await newAuthorModel.create(author)
    res.send({ data: authorCreated })
}

// const getAuthorsData= async function (req, res) {
//     let authors = await AuthorModel.find()
//     res.send({data: authors})
// }

module.exports.newCreateAuthor = newCreateAuthor
//module.exports.getAuthorsData= getAuthorsData