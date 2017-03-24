const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());


Genre = require('./models/genre');
Book = require('./models/book');
//connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', (req,res) => {
    res.send('Please use /api/books or /api/genres');
});

app.get('/api/genres', (req,res)=> {
    Genre.getGenres((err,genres) => {
        if(err){
            throw err;
        }
        res.json(genres);
    });
});

app.post('/api/genres', (req,res) => {
    var genre = req.body;
    Genre.addGenres(genre, (err,genres)=>{
        if(err){
            throw err;
        }
        res.json(genre);
    });
});  
app.put('/api/genres/:_id', (req,res) => {
    const id = req.params._id;
    const genre = req.body;
    Genre.updateGenre(id,genre,{}, (err,genre) =>{
        if(err){
            throw err;
        }
        res.json(genre);
    });
}); 

app.delete('/api/genres/:_id', (req,res) =>{
    const id = req.params._id;
    Genre.deleteGenre(id, (err,genre) => {
        if(err){
            throw err;
        }
        res.json(genre);
    });
});           

app.get('/api/books', (req,res) => {
    Book.getBooks((err,books) =>{
        if(err){
            throw err;
        }
        res.json(books)
        
    });
});
app.get('/api/books/:_id', (req,res) =>{
    Book.getBookById(req.params._id, (err,book) =>{
        if(err){
            throw err;
        }
        res.json(book);
        
    });
});

app.post('/api/books', (req,res)=>{
    var book = req.body;
    Book.addBook(book, (err,book) => {
        if(err){
            throw err;
        }
        res.json(book);
    });
});

app.put('/api/books/:_id', (req,res) =>{
    var id = req.params._id;
    var book = req.body;
    Book.updateBook(id,book,{}, (err,book) => {
        if(err){
            throw err;
        }
        res.json(book);
    });
}); 
app.delete('/api/books/:_id', (req,res) => {
    var id = req.params._id;
    Book.deleteBook(id, (err,book) => {
        if(err){
            throw err;
        }
        res.json(book);
    });
});  

app.listen(3000);
console.log('Running in port 3000');