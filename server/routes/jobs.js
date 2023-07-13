const express = require('express');
const router = express.Router();

// Include your Job model here (replace with the actual path)
const Job = require('../models/Job.js');

router.post('/', async function(req, res, next) {
  const { name } = req.body;

  try {
    let job = new Job({ name });
    await job.save();
    res.status(200).json({ msg: 'Job accepted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
