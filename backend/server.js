// server.js

require('dotenv').config(); // ✅ ADDED to load environment variables

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { // ✅ Changed from MONGODB_URI to MONGO_URI to match your .env
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); 
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
