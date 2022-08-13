const BookModel= require("../models/bookModel")

const addBooks= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({booksData: savedData})
}

const getAllBooks= async function (req, res) {
    let allUsers= await BookModel.find()
    res.send({booksData: allUsers})
}

module.exports.addBooks= addBooks
module.exports.getAllBooks= getAllBooks