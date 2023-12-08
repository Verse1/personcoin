import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Mint from './Mint';

function App() {
  return (
    <Router>
      <div>
        <nav>
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
  return <h2>Welcome to the PersonCoin Demo</h2>;
}

export default App;
