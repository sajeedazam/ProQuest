import React, { useState } from 'react';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [workHours, setWorkHours] = useState('');
  const [city, setCity] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleWorkHoursChange = (e) => {
    setWorkHours(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here using the collected data
    console.log('Name:', name);
    console.log('Work Hours:', workHours);
    console.log('City:', city);
  };

  return (
    <div>
      <h2>Signup Page</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />

        <label htmlFor="workHours">Work Hours:</label>
        <input
          type="text"
          id="workHours"
          value={workHours}
          onChange={handleWorkHoursChange}
        />

        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={handleCityChange}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;