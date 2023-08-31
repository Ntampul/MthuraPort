// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css'; // You can create this CSS file for styling

function App() {
  return (
    <div className="app">
      <video className="background-video" autoPlay muted loop>
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        {/* Your other content goes here */}
      </div>
    </div>
  );
}

export default App;

