var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var http = require('http');
var mongoose = require('mongoose');

var jobsRouter = require('./routes/jobList');
var cartRouter = require('./routes/cart');
var geocode = require('./routes/geocode');

var app = express();

const corsOptions = {
  origin: 'http://localhost:3000', // Update with the deployed frontend URL
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

const uri = process.env.MONGODB_CONNECTION_STRING;
mongoose.connect(`${uri}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var messageSchema = mongoose.Schema({
  user: String,
  message: String
});

var Message = mongoose.model('Message', messageSchema);

const server = http.Server(app);
server.listen(5002);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on('connection', async function (socket) {
  console.log('client connected!')

  const pastMessages = await Message.find({});
  socket.emit('pastMessages', pastMessages);

  // Use process.nextTick to allow the 'pastMessages' event to be sent first
  process.nextTick(() => {
    socket.on('message', function (data) {
      console.log("Message from:", data.user, "Message:", data.message);
      var newMessage = new Message({ user: data.user, message: data.message });
    
      try {
        newMessage.save();
        console.log("Emit to all!");
        io.emit('message', data);  // Emit to all connected sockets
      } catch (error) {
        console.log(error);
      }
    });
  });
});

module.exports = app;