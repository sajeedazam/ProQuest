var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
require('dotenv').config();
const { ObjectId } = require('mongoose').Types;

const jobSchema = new mongoose.Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  time: { type: String, required: true },
  customerName: { type: String, required: true },
  phone: { type: Number, required: true },
  price: { type: Number, required: true }
});

const Notify = mongoose.model('Notify', jobSchema);
const Accept = mongoose.model('accepts', jobSchema);
const Complete = mongoose.model('complete', jobSchema);
const uri = process.env.MONGODB_CONNECTION_STRING;

module.exports = Notify;

mongoose.connect(`${uri}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

router.get('/job-list', async function (req, res, next) {
  try {
    const notification = await Notify.find();
    res.send(notification);
  } catch (error) {
    res.status(500).send({ message: 'Error retrieving notifications from the database' });
  }
});

router.post('/job-list', async function (req, res, next) {
  try {
    const newJob = new Notify(req.body);
    const savedJob = await newJob.save();
    res.send(savedJob);
  } catch (error) {
    res.status(400).send({ message: 'Failed to add job to the database' });
  }
});

router.post("/transfer-accepted-data/:jobId", async (req, res) => {
  try {
    const jobId = req.params.jobId;
    console.log(jobId);
    const result = await Notify.findByIdAndDelete(jobId);

    if (result) {
      await Accept.findOneAndUpdate(
        { _id: new ObjectId(jobId) },
        { $set: result },
        { upsert: true }
      );
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while transferring data" });
  }
});

router.get("/transferred-accepts", async (req, res) => {
  try {
    const acceptsData = await Accept.find();
    res.status(200).json(acceptsData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching data from accepts" });
  }
});

router.delete('/job-list/:jobId', async function (req, res, next) {
  try {
    const jobId = req.params.jobId;
    console.log(jobId);
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

router.post("/transfer-completed-data/:jobId", async (req, res) => {
  try {
    const jobId = req.params.jobId;
    console.log(jobId);
    const result = await Accept.findByIdAndDelete(jobId);

    if (result) {
      await Complete.findOneAndUpdate(
        { _id: new ObjectId(jobId) },
        { $set: result },
        { upsert: true }
      );
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while transferring data" });
  }
});

router.get("/transferred-completes", async (req, res) => {
  try {
    const completedData = await Complete.find();
    res.status(200).json(completedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching data from finishes" });
  }
});

router.get("/amount-earned", async (req, res) => {
  try {
    const completedData = await Complete.find().select('price');
    let count = 0;
    if (completedData) {
      completedData.forEach((data) => {
        count += data.price;
      });
    }

    jsObj = { "count": count };
    res.status(200).json(jsObj);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching data from finishes" });
  }
});

module.exports = router;