const { count } = require("console")
const bookModel = require("../models/bookModel")
const BookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}

const bookList = async function (req, res) {

    let allBooks = await BookModel.find().select({ bookName: 1, tags: { authorName: 1 }, _id: 0 })
    res.send({ msg: allBooks })
}

const getBooksInYear = async function (req, res) {
    let year = req.body.year
    let allBooks = await BookModel.find({ year: { $eq: year } })
    res.send({ msg: allBooks })
}

const getParticularBooks = async function (req, res) {
    let data = req.query.param
    //console.log(data)
    let allBooks = await BookModel.find({isPublished:{$eq: data}})//.count()
    res.send({ msg: allBooks })
}

const getXINRBooks = async function (req, res) {
    let allBooks = await BookModel.find({"prices.indianPrice":  { $in: ["100INR", "200INR", "500INR"] }})
    res.send({ msg: allBooks })
}

const getRandomBooks = async function (req, res) {
    let allBooks = await BookModel.find({ $or: [{ stockAvailable: true }, { totalPages: { $gt: 500 } }] })
    res.send({ msg: allBooks })
}

module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks

