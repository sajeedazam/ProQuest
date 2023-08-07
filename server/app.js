var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var http = require('http');
var mongoose = require('mongoose');
require('dotenv').config();

var jobsRouter = require('./routes/jobList');
var cartRouter = require('./routes/cart');
var geocode = require('./routes/geocode');

var app = express();

const corsOptions = {
  origin: "https://proquest.onrender.com"
}
// app.use(cors(corsOptions));
app.use(cors());
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
  message: String
});

var Message = mongoose.model('Message', messageSchema);

// const server = http.Server(app);
const server = http.createServer(app);
// server.listen(2002);
// // server.listen(5002);
// // server.listen("https://proquest.onrender.com");

// const io = require("socket.io")(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"]
//   }
// });
const socketIO = require('socket.io');

const io = socketIO(server, {
  cors: {
    origin: 'https://proquest.onrender.com/chat',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', async function (socket) {
  console.log('client connected!')

  const pastMessages = await Message.find({})
  socket.emit('pastMessages', pastMessages.map(m => m.message));

  // Use process.nextTick to allow the 'pastMessages' event to be sent first
  process.nextTick(() => {
    socket.on('message', function (message) {
      console.log("Message", message)
      var newMessage = new Message({ message: message });

      try {
        newMessage.save();
        console.log("Emit to all!")
        io.emit('message', message);  // Emit to all connected sockets
      } catch (error) {
        console.log(error);
      }
    });
  });
});

app.get('/socket.io/', (req, res) => {
  // This route handler can be left empty as it is only needed to prevent the error.
  // Socket.IO will handle WebSocket connections automatically, and you don't need to handle this route explicitly.
});

module.exports = app;