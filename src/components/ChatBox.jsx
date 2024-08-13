import React, { useState, useEffect } from 'react';
import { getChatMessages } from '../mockApi';
import './ChatBox.css';

const ChatBox = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      const data = await getChatMessages();
      setMessages(data);
    };
    fetchMessages();
  }, []);

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sent: true }]);
      setNewMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }   
  };

  return (
    <div className="chat-box">
      <div className="chat-header">
        <h3>Chat</h3>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sent ? 'sent' : 'received'}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <textarea
          value={newMessage}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          rows="3"
        />
        <button className="send-btn" onClick={handleSendMessage}>
        ➤
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
