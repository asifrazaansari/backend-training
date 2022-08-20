const newPublisherModel = require("../models/newPublisherModel")

const newCreatePublisher = async function (req, res) {
    let author = req.body
    let authorCreated = await newPublisherModel.create(author)
    res.send({ data: authorCreated })
}

module.exports.newCreatePublisher = newCreatePublisher