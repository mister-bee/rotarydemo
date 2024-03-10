import React, { useState, useEffect } from 'react';
import rotaryLogo from './assets/rotary-march10.svg';
import { BubbleChat, FullPageChat } from 'flowise-embed-react';
import './App.css';

const ChatBot = () => {
  return (
    <BubbleChat
      chatflowid="b00f5277-a941-49a5-9234-5b408b7daaea"
      apiHost="https://flowise-rotary.onrender.com" />
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
      <h1> Minneapolis Rotary Club #9</h1>
      <h1> History Chat</h1>
      {isNarrowScreen ? <FullPageChatBot /> : <ChatBot />}
    </>
  );
}

export default App;
