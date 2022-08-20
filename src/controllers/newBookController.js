const newAuthorModel = require("../models/newAuthorModel")
const newPublisherModel = require("../models/newPublisherModel")
const newBookModel = require("../models/newBookModel")
const { update } = require("../models/newAuthorModel")

const newCreateBook = async function (req, res) {
    let book = req.body
    let authorId = await newAuthorModel.findById(book.author)
    let publisherId = await newPublisherModel.findById(book.publisher)
    if (!book.author) {
        res.send("Error: Author detail is required")
    } else if (!authorId) {
        res.send("Error: Author is not present")
    } else if (!book.publisher) {
        res.send("Error: Publisher detail is required")
    } else if (!publisherId) {
        res.send("Error: Publisher is not present")
    } else {
        let bookCreated = await newBookModel.create(book)
        res.send({ data: bookCreated })
    }
}

const getBooksWithAuthorDetails = async function (req, res) {
    let allBooks = await newBookModel.find().populate('author publisher')
    res.send({ data: allBooks })

}

const modifiedBooks = async function (req, res) {
    
    let updateHardCover = await newBookModel.updateMany(
        { publisher: { $in: ["62ff692fe3a913187ee336dc", "630038767f77cf352aee4494"] } },
        { $set: { isHardCover: true } },
        { new: true, upsert: true }
    )
    res.send({ data: updateHardCover })
    
    let authorRating = await newAuthorModel.find({ rating: { $gt: 3.5 } }).select({ _id: 1 })
    let updatedPrice = await newBookModel.updateMany(
        { author: authorRating },
        { $inc: { price: 10 } },
        { new: true }
    )
    res.send({ data: updatedPrice })
}


module.exports.newCreateBook = newCreateBook
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.modifiedBooks = modifiedBooks
