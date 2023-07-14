var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  time: { type: String, required: true },
  customerName: { type: String, required: true },
  phone: { type: Number, required: true },
  jobState: { type: String, required: false, default: "PENDING"}
},{
  timestamps: true

}

);

const Notify = mongoose.model('Notify', jobSchema);

mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox.r8nnfsp.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

router.get('/', async function (req, res, next) {
  try {
    const notification = await Notify.find();
    res.send(notification);
  } catch (error) {
    res.status(500).send({ message: 'Error retrieving notifications from the database' });
  }
});

router.post('/', async function (req, res, next) {
  try {
    const newJob = new Notify(req.body);
    const savedJob = await newJob.save();
    res.send(savedJob);
  } catch (error) {
    res.status(400).send({ message: 'Failed to add job to the database' });
  }
});

// router.delete('/:jobId', async function (req, res, next) {
//   try {
//     const jobId = req.params.jobId;
//     const deletedJob = await Item.findByIdAndDelete(jobId);

//     if (!deletedJob) {
//       res.status(404).send({ message: 'Jobnot found' });
//     } else {
//       res.send(deletedJob);
//     }
//   } catch (error) {
//     res.status(500).send({ message: 'Error deleting job from the database' });
//   }
// });
router.delete('/:jobId', async function (req, res, next) {
  try {
    const jobId = req.params.jobId;
    const deletedJob = await Notify.findByIdAndDelete(jobId);

    if (!deletedJob) {
      res.status(404).send({ message: 'Job not found' });
    } else {
      res.send(deletedJob);
    }
  } catch (error) {
    res.status(500).send({ message: 'Error deleting job from the database' });
  }
});



module.exports = router;
