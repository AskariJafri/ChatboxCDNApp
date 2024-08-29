import React from 'react';
import './FloatingActionButton.css';
import messageIcon from '../assets/message.svg'
const FloatingActionButton = ({ onClick }) => {
  return (
    <button className="fab" onClick={onClick}>
      {/* 💬 */}
      <img src={messageIcon} width={40} height={40}/>
    </button>
  );
};

export default FloatingActionButton;
