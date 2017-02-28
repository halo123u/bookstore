var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', function(req,res){
    res.send('hello world!');
});
app.listen(3000);

console.log('Running in port 3000');