import React, { useState, useEffect, useRef } from 'react';
import { collection, addDoc, query, onSnapshot, orderBy } from '@firebase/firestore';
import { db as firestore, auth } from "../firebase-chat";
import '../Chat/chat.css'

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(firestore, 'messages'), orderBy('timestamp')), 
      snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
      }
    );
    return () => unsubscribe();
  }, []);

  useEffect(scrollToBottom, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (newMessage.trim() !== '') {
      await addDoc(collection(firestore, 'messages'), {
        message: newMessage,
        timestamp: new Date(), // for ordering the messages
      });
      setNewMessage('');
    }
  };

  return (
    <div className="chat">
      <h2>Chat</h2>
      <div className="chat-messages">
        {messages.map(({ id, data: { message } }) => (
          <div key={id} className="chat-message">
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