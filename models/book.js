const mongoose = require('mongoose');

//bookSchema
const bookSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    },
    genre:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    author:{
        type: String,
        required: true
    },
    publisher:{
        type: String
    },
    pages:{
        type: String
    },
    img_url:{
        type: String
    },
    buy_url:{
        type: String
    }
});

const Book = module.exports = mongoose.model('Book',bookSchema);

//Get Books
module.exports.getBooks = function (callback,limit) {
        Book.find(callback).limit(limit);
}