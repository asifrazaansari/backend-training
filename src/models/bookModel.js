const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName:{
        type: String,
        unique: true,
        required: true
    },
    authortName: String,
    category: {
        type: String,
        enum: ["classics", "tragedy", "sci-fi", "fantasy", "action and adventure", "crime and mystery", "romance", "humor and satire"]
    },
    year: Number,
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //users
