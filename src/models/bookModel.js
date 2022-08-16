const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        require: true,
    },
    tags: [
        {
            authorName: String,
            totalPages: Number,
            stockAvailable: Boolean,
        }
    ],

    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year: { type: Number, default: 2021 },
}, { timestamps: true });


module.exports = mongoose.model('MBook', bookSchema)

