const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

router.post('/api/jobs', async (req, res) => {
  try {
    const { title, description, company, location, salary } = req.body;
    if (!title || !description || !company) {
      return res.status(400).json({ message: 'Title, description, and company are required' });
    }
    const newJob = await Job.create({ title, description, company, location, salary });
    res.status(201).json(newJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;