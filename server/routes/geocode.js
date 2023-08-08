const express = require('express');
const router = express.Router();
require('dotenv').config();
const https = require('https');

router.post('/geocode', async (req, res) => {
  try {
    const { postalCode } = req.body;

    const apiKey = process.env.GEOCODE_API_KEY;
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${postalCode}&key=${apiKey}`;

    https.get(apiUrl, (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        const result = JSON.parse(data);
        const { lat, lng } = result.results[0].geometry;
        res.json({ lat, lng });
      });
    }).on('error', (error) => {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;