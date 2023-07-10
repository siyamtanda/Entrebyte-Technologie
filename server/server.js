const express = require('express');
const mongoose = require('mongoose');
//const Job = require('./models/job');
const axios = require('axios');
const router = express.Router();

const app = express();

app.use(express.json());

// Connect to MongoDB compass database
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define a schema for the job model
const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
});

// Create a job model
//const Job = mongoose.model('Job', jobSchema);

app.get('/api/jobs', async (req, res) => {
  try {
    // Fetch job data from the provided API
    const response = await axios.get('https://documenter.getpostman.com/view/18545278/UVJbJdKh');

    // Store the fetched job data in MongoDB
    const jobs = response.data;

    // Create documents in the Job collection for each job
    await Job.insertMany(jobs);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch job data' });
  }
});

// Define a route to save a job
app.post('/api/saved-jobs', async (req, res) => {
  try {
    const { title, description, location } = req.body;

    // Create a new job instance
    const job = new Job({
      title,
      description,
      location,
    });

    // Save the job to the database
    await job.save();

    res.json(job);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});

