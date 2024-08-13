import React, { useState } from 'react';
import FloatingActionButton from './components/FloatingActionButton';
import ChatBox from './components/ChatBox';
import './App.css';

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChatBox = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="App">
      {isChatOpen && <ChatBox onClose={toggleChatBox} />}
      <FloatingActionButton onClick={toggleChatBox} />
    </div>
  );
};

export default App;
