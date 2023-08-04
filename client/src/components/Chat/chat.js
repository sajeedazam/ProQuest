import React, { useState, useEffect, useRef } from 'react';
import '../Chat/chat.css';
 import { io } from 'socket.io-client';
const socket = io('http://localhost:5002');
// Create a socket instance
// Make sure to replace this with your server URL


function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const handleNewMessage = (message) => {
      console.log("Message Received!!", message)
      setMessages((oldMessages) => [...oldMessages, message]);
    };
  
    const handlePastMessages = (pastMessages) => {
      console.log({ pastMessages });
      setMessages(pastMessages);
    };
  
    socket.on('message', handleNewMessage);
    socket.on('pastMessages', handlePastMessages);
  
    // Clean up function
    return () => {
      socket.off('message', handleNewMessage);
      socket.off('pastMessages', handlePastMessages);
    };
  }, []);


  useEffect(scrollToBottom, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
  
    console.log("New Message!!", newMessage)
  
    if (newMessage.trim() !== '') {
      // Emit the 'message' event to the server
      socket.emit('message', newMessage);
      console.log("Resetting new message!!")
      setNewMessage('');
    }
  };

  console.log(messages);

  return (
    <div className="chat">
      <h2>Chat</h2>
      <div className="chat-messages">
        {messages.map((message,idx) => (
          <div key={idx} className="chat-message">
            <p>{message}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form className="chat-form" onSubmit={handleSend}>
        <input
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="chat-input"
        />
        <button type="submit" className="chat-button">Send</button>
      </form>
    </div>
  );
}

export default Chat;