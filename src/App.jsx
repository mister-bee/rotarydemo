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
      chatflowid="b00f5277-a941-49a5-9234-5b408b7daaea"
      apiHost="https://flowise-rotary.onrender.com"
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
      <h1>RotaryBot</h1>
      {/* {isNarrowScreen ? <FullPageChatBot /> : <ChatBot />} */}
    </>
  );
}

export default App;
