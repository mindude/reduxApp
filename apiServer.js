var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// APIs
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/bookshop');

var Books = require('./models/books.js');

// POST BOOKS
app.post('/books', function(req, res){
  var book = req.body;

  Books.create(book, function(err, books){
    if(err){
      throw err;
    }
    res.json(books);
  })
});

// GET BOOKS
app.get('/books', function(req, res){
  Books.find(function(err, books){
    if(err){
      throw err;
    }
    res.json(books);
  })
})

// DELETE BOOKS
app.delete('/books/:_id', function(req, res){
  var query = {_id: req.params._id};

  Books.remove(query, function(err, books){
    if(err){
      throw err;
    }
    res.json(books);
  })
});

// UPDATE BOOKS
app.put('/books/:_id', function(req, res){
  var book = req.body;
  var query = {_id: req.params._id};

  var update = {
    '$set':{
      title: book.title,
      description: book.description,
      image: book.image,
      price: book.price
    }
  };

  var options = {new: true};

  Books.findOneAndUpdate(query, update, options, function(err, books){
    if(err){
      throw err;
    }
    res.json(books)
  })


})

// END APIs

app.listen(3001, function(err){
  if (err){
    return console.log(err);
  }
  console.log('API Server is listening on http://localhost:3001');
})