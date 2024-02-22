import React, { useState, useEffect } from 'react';
import rotaryLogo from './assets/rotary-gold.png';
import { BubbleChat, FullPageChat } from 'flowise-embed-react';
import './App.css';

const ChatBot = () => {
  return (
    <BubbleChat
      chatflowid="7dec31ce-0193-4b89-8659-95ddbd65d04f"
      apiHost="https://flowiserotary.onrender.com" />
  );
};

const FullPageChatBot = () => {
  return (
    <FullPageChat
      chatflowid="7dec31ce-0193-4b89-8659-95ddbd65d04f"
      apiHost="https://flowiserotary.onrender.com"
    />
  );
};

function App() {
  const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsNarrowScreen(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <img src={rotaryLogo} className="logo" alt="Rotary logo" />
      <h1>Rotary Club Bot</h1>
      {isNarrowScreen ? <FullPageChatBot /> : <ChatBot />}
    </>
  );
}

export default App;
