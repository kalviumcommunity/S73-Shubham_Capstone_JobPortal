const express = require('express');
  const jobRoutes = require('./jobRoutes');

  const router = express.Router();

  router.use('/jobs', jobRoutes);

  module.exports = router;