var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
require('dotenv').config();
// var usersRouter = require('./routes/users');


var app = express();
var cors = require('cors');
// var http = require('http');

// const corsOptions = {
//     origin: "https://proquest.onrender.com",
// };

app.use(cors());


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
