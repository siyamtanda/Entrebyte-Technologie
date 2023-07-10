const mongoose = require('mongoose');

// Define a schema for the job model
const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  // Add other relevant fields
});

// Create a job model
const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
