import React, { useState } from 'react';
import '../City/city.css';

export default function City() {
  const [postalCode, setPostalCode] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [isWithinBounds, setIsWithinBounds] = useState(false);
  const [error, setError] = useState('');

  const handlePostalCodeSubmit = (e) => {
    e.preventDefault();
    setError('');

    fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${postalCode}&key=b3cd4801472c450c8f0a813d0acda100`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Invalid postal code');
        }
        return response.json();
      })
      .then((data) => {
        const { lat, lng } = data.results[0].geometry;
        setLatitude(lat);
        setLongitude(lng);
        setIsWithinBounds(checkIfWithinBounds(lat, lng));
      })
      .catch((error) => {
        console.error(error);
        setError('Invalid input');
      });
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
        <p>See if our service is available</p>
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
            {isWithinBounds ? 'Within boundaries' : 'Outside boundaries'}
          </p>
        </div>
      )}
    </div>
  );
}
