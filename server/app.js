var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');


var indexRouter = require('./routes/index');
var jobsRouter = require('./routes/jobList');
var cartRouter = require('./routes/cart')

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Define the /jobs endpoints here

// GET endpoint to retrieve all jobs
app.get('/jobs', async (req, res) => {
  try {
    const jobs = await Job.find({});
    res.json(jobs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// POST endpoint to add a new job
app.post('/jobs', async (req, res) => {
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

// PUT endpoint to update a job
app.put('/jobs/:id', async (req, res) => {
  const { name } = req.body;

  try {
    let job = await Job.findByIdAndUpdate(req.params.id, { name }, { new: true });
    res.status(200).json(job);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});



// DELETE endpoint to delete a job
app.delete('/jobs/:id', async (req, res) => {
  try {
    await Job.findByIdAndRemove(req.params.id);
    res.status(200).json({ msg: 'Job deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

app.use('/', jobsRouter);
app.use('/', cartRouter);

// app.use('/job-list', jobsRouter);

module.exports = app;

// var port = process.env.PORT || '5001';
// app.set('port', port);

// var server = app.listen(port, function () {
//   console.log(`Server is running on http://localhost:${port}`);
// });
