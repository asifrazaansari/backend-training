const { count } = require("console")
const { Module } = require("module")
const AuthorModel = require("../models/authorModel")
const BookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}

const createAuthor = async function (req, res) {
    let data = req.body
    let savedData = await AuthorModel.create(data)
    res.send({ msg: savedData })
}

const booksByCB = async function (req, res) {
    let allBooksByCB = await AuthorModel.findOne({author_name: "Chetan Bhagat"}).select({ author_id:1, _id: 0})
    let booksByAuId = await BookModel.find(allBooksByCB)
    res.send({ msg: booksByAuId })
}

const authorOfTS = async function (req, res) {
    let author = await AuthorModel.find().select({ author_id:1, _id: 0})
    let authorBook = await BookModel.find({name:"Two states"}).select({ author_id:1, _id: 0})
    let booksByAuId = await BookModel.findOneAndUpdate(
        {authorBook: {$eq: author}},
        {$set: {price:100}},
        {new : true}
        )
    res.send({ msg: booksByAuId })
}

const booksCost = async function (req, res) {
    let booksCost = await BookModel.find({ price : { $gte: 50, $lte: 100} } ); //.select({ author_id :1, _id:0})
    //let authorId = await AuthorModel.find().select({author_id:1, _id:0})
    let authorId = booksCost.map(x=> x.author_id)
    let authorName = await AuthorModel.find({booksCost:{$eq:authorId}}).select({author_name:1, _id:0})
    res.send({ msg: authorName })
}

module.exports.createAuthor = createAuthor
module.exports.createBook = createBook
module.exports.booksByCB = booksByCB
module.exports.authorOfTS = authorOfTS
module.exports.booksCost = booksCost
