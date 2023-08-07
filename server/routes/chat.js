var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
require('dotenv').config();

const messageSchema = new mongoose.Schema({
  message: String
});

const Message = mongoose.model('Message', messageSchema);
const uri = process.env.MONGODB_CONNECTION_STRING;

mongoose.connect(`${uri}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const socketIO = require('socket.io');

const io = socketIO(server, {
  cors: {
    origin: 'https://proquest.onrender.com',
    methods: ['GET', 'POST'],
  },
});

router.get('/past-messages', async function (req, res, next) {
  try {
    const pastMessages = await Message.find({});
    res.send(pastMessages.map(m => m.message));
  } catch (error) {
    res.status(500).send({ message: 'Error retrieving messages from the collection' });
  }
});

router.post('/message', async function (req, res, next) {
  try {
    const { message } = req.body;
    const newMessage = new Message({ message: message });

    await newMessage.save();
    io.emit('message', message); // Emit to all connected sockets
    res.status(200).send({ message: 'Message sent successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Error sending message' });
  }
});


module.exports = router;
