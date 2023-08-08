import React, { useState } from 'react';
import '../City/city.css';

export default function City() {
  const [postalCode, setPostalCode] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [isWithinBounds, setIsWithinBounds] = useState(false);
  const [error, setError] = useState('');

  const handlePostalCodeSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://proquest-server.onrender.com/geocode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ postalCode: postalCode }),
      });

      if (!response.ok) {
        throw new Error('Invalid postal code');
      }

      const data = await response.json();
      const { lat, lng } = data;

      setLatitude(lat);
      setLongitude(lng);
      setIsWithinBounds(checkIfWithinBounds(lat, lng));
    } catch (error) {
      console.error(error);
      setError('Invalid input');
    }
  };

  const checkIfWithinBounds = (lat, lng) => {
    const vancouverBounds = {
      west: -123.2654,
      east: -123.0236,
      north: 49.3049,
      south: 49.1996,
    };

    return (
      lng >= vancouverBounds.west &&
      lng <= vancouverBounds.east &&
      lat >= vancouverBounds.south &&
      lat <= vancouverBounds.north
    );
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handlePostalCodeSubmit}>
        <p>Check if our service is available</p>
        <input
          className="input"
          type="text"
          placeholder="Enter postal code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          required
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      {latitude && longitude && !error && (
        <div className="result">
          <p className={isWithinBounds ? 'within' : 'outside'}>
            {isWithinBounds ? 'Services offered!' : 'No services at your area'}
          </p>
        </div>
      )}
    </div>
  );
}
