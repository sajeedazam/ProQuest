import React, { useState, useEffect, useRef } from 'react';
import '../Chat/chat.css';
import { io } from 'socket.io-client';
import { auth } from '../firebase';
const socket = io('https://proquest-chat-server.onrender.com');

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

    return () => {
      socket.off('message', handleNewMessage);
      socket.off('pastMessages', handlePastMessages);
    };
  }, []);



  useEffect(scrollToBottom, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    const authUser = auth.currentUser;

    if (authUser && newMessage.trim() !== '') {
      socket.emit('message', { user: authUser.displayName, message: newMessage });//authUser.email
      setNewMessage('');
    }
  };

  console.log(messages);

  return (
    <div className="chat">
      <h2>Chat</h2>
      <div className="chat-messages">
        {messages.map((data, idx) => (
          <div key={idx} className="chat-message">
            <p><strong>{data.user}:</strong> {data.message}</p>
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