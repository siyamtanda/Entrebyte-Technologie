const express = require('express');
const router = express.Router();
const Job = require('../models/job');

// Route to fetch jobs
router.get('/', async (req, res) => {
  try {
    // Fetch all jobs from the database
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to save a job
router.post('/', async (req, res) => {
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

module.exports = router;
