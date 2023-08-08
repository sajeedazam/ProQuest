var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var jobsRouter = require('./routes/jobList');
var cartRouter = require('./routes/cart');
var geocode = require('./routes/geocode');

var app = express();

const corsOptions = {
  origin: "https://proquest.onrender.com",
};
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', jobsRouter);
app.use('/', cartRouter);
app.use('/', geocode);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


module.exports = app;