import React, { useState } from 'react';
import './Mint.css';

function Mint() {
  const [age, setAge] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // logic later
    console.log('Age submitted:', age);
  };

  return (
    <div className="mint">
      <h2>Mint PersonCoin</h2>
      <form className='form' onSubmit={handleSubmit}>
        <label>
          Enter your age:
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </label>
        <button type="submit">Mint Coin</button>
      </form>
    </div>
  );
}

export default Mint;
