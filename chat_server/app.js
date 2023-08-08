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
var http = require('http');

const corsOptions = {
    origin: "https://proquest.onrender.com",
};

app.use(cors(corsOptions));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);

// var server = http.createServer(app);
// app.listen(PORT)
// server.listen();
// const io = require("socket.io")(server, {
//     cors: {
//       origin: "http://localhost:3000", // Update with the deployed frontend URL
//       methods: ["GET", "POST"],
//       allowedHeaders: ["my-custom-header"],
//       credentials: true
//     }
//   });

// const uri = process.env.MONGODB_CONNECTION_STRING;
// mongoose.connect(`${uri}`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// var messageSchema = mongoose.Schema({
//   user: String,
//   message: String
// });

// var Message = mongoose.model('Message', messageSchema);

//   io.on('connection', async function (socket) {
//     console.log('client connected!')
  
//     const pastMessages = await Message.find({});
//     socket.emit('pastMessages', pastMessages);
  
//     // Use process.nextTick to allow the 'pastMessages' event to be sent first
//     process.nextTick(() => {
//       socket.on('message', function (data) {
//         console.log("Message from:", data.user, "Message:", data.message);
  
//         var newMessage = new Message({ user: data.user, message: data.message });
      
//         try {
//           newMessage.save();
//           console.log("Emit to all!");
//           io.emit('message', data);  // Emit to all connected sockets
//         } catch (error) {
//           console.log(error);
//         }
//       });
//     });
  
//   });

//   app.get();

module.exports = app;
