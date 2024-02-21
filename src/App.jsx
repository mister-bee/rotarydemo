import { useState } from 'react'
import rotaryLogo from './assets/rotary-gold.png'; // Adjust the path as necessary

import { BubbleChat } from 'flowise-embed-react'
import './App.css'

const ChatBot = () => {
  return (
    <BubbleChat chatflowid="7dec31ce-0193-4b89-8659-95ddbd65d04f" apiHost="https://flowiserotary.onrender.com" />
  );
};


function App() {

  return (
    <>
      <div>
        <img src={rotaryLogo} className="logo" alt="Rotary logo" />
      </div>
      <h1>Rotary Club Bot</h1>
      <ChatBot />

    </>
  )
}

export default App
