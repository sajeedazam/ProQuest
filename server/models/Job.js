// server/models/Job.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  name: { type: String, required: true },
  accepted: { type: Boolean, default: false },
  // You can add more fields here as per your requirements
});

module.exports = mongoose.model('Job', JobSchema);
