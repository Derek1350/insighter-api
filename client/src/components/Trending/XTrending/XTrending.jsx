import React, { useState } from 'react';
import axios from 'axios';

function XTrending() {
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await axios.get('http://localhost:5000/auth/linkedin');
      window.location = response.data.redirectUrl;
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Failed to connect to the server. Please try again later.');
    }
  };

  return (
    <div>
      <h1>LinkedIn Analytics Tool</h1>
      <button onClick={handleLogin}>Login with LinkedIn</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default XTrending;
