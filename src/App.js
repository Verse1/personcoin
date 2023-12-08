import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Mint from './Mint';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="main">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mint">Mint PersonCoin</Link>
            </li>
            <li>
              <Link to="/verify">Verify Age</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/mint" element={<Mint />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the PersonCoin Demo</h1>
      <p>
        This application demonstrates the concept of minting a PersonCoin and
        verifying age using zero-knowledge proofs on the Ethereum network.
      </p>
    </div>
  );
}

export default App;
