const express = require('express');
const router = express.Router();
require('dotenv').config();

router.post('/geocode', async (req, res) => {
  try {
    const { postalCode } = req.body;

    const apiKey = process.env.GEOCODE_API_KEY;
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${postalCode}&key=${apiKey}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Invalid postal code');
    }

    const data = await response.json();
    const { lat, lng } = data.results[0].geometry;
    res.json({ lat, lng });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
