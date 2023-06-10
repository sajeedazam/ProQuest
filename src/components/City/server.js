const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/coordinates', (req, res) => {
  const { postalCode } = req.query;
  axios
    .get(`https://api.opencagedata.com/geocode/v1/json?q=${postalCode}&key=b3cd4801472c450c8f0a813d0acda100`)
    .then((response) => {
      const { lat, lng } = response.data.results[0].geometry;
      res.json({ latitude: lat, longitude: lng });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    });
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
