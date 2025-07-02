const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

router.put('/api/jobs/:id', async (req, res) => {
  try {
    const { title, description, company, location, salary } = req.body;
    if (!title && !description && !company && !location && salary === undefined) {
      return res.status(400).json({ message: 'At least one field (title, description, company, location, or salary) must be provided for update' });
    }
    if (salary !== undefined && (isNaN(salary) || salary <= 0)) {
      return res.status(400).json({ message: 'Salary must be a positive number' });
    }
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedJob) return res.status(404).json({ message: 'Job not found' });
    res.json(updatedJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;