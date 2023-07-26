var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

// var indexRouter = require('./routes/index');
var jobsRouter = require('./routes/jobList');
var cartRouter = require('./routes/cart');
var geocode = require('./routes/geocode');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', jobsRouter);
app.use('/', cartRouter);
app.use('/',geocode);

module.exports = app;
