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
module.exports.getBooks =  (callback,limit) => {
        Book.find(callback).limit(limit);
}

//Get Book
module.exports.getBookById = (id, callback) => {
        Book.findById(id,callback);
}
//Add book
module.exports.addBook = (book,callback) => {
    Book.create(book,callback);
}
//Update 
module.exports.updateBook = (id,book,options,callback) => {
    var query={_id: id};
    var update = {
        title: book.title,
        genre: book.genre,
        description: book.description,
        author :book.author,
        publisher: book.publisher,
        pages: book.pages,
        img_url: book.img_url,
        buy_url: book.buy_url,
    }
    Book.findOneAndUpdate(query,update,options,callback);
}

//Delete Books 
module.exports.deleteBook = (id,callback) => {
    var query = {_id: id};
    Book.remove(query, callback);
}