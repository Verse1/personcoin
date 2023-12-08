import React, { useState } from 'react';
import './Verify.css';

function Verify() {
  const [inputAge, setInputAge] = useState('');
  const [userAge, setUserAge] = useState(25); // hardcoded for now
  const [verificationResult, setVerificationResult] = useState('');

  const handleVerification = (e) => {
    e.preventDefault();
    if (userAge >= inputAge) {
      setVerificationResult(
        'Age verified.'
      );
    } else {
      setVerificationResult(
        'Age verification failed.'
      );
    }
  };

  return (
    <div className="verify">
      <form className="form" onSubmit={handleVerification}>
        <label>
          Enter age for verification:
          <input
            type="text"
            value={inputAge}
            onChange={(e) => setInputAge(e.target.value)}
            required
          />
        </label>
        <button type="submit">Verify Age</button>
      </form>
      {verificationResult && <p>{verificationResult}</p>}
    </div>
  );
}

export default Verify;
