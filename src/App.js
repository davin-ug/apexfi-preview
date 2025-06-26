
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo192.png" alt="ApexFi Logo" className="logo" />
        <h1>Welcome to ApexFi</h1>
        <p>Hello Mr. Davin</p>
        <p>Balance: $12,500.00</p>
        <button onClick={() => alert("Enter PIN to send money")}>Send Money</button>
        <button onClick={() => alert("Crypto deposit screen opens")}>Crypto</button>
      </header>
    </div>
  );
}

export default App;
