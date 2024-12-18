// app.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load .env file
const { verifyToken } = require('./middleware/authMiddleware'); // Import middleware

// Import routes
const authRoutes = require('./routes/auth'); // Route untuk login dan signup
const profileRoutes = require('./routes/profile'); // Route untuk profile
const volunteerRoutes = require('./routes/volunteers'); // Route untuk volunteers
const locationRoutes = require('./routes/locations'); // Route untuk locations

// Initialize app
const app = express();
const port = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());
app.use(bodyParser.json()); // Middleware untuk parsing JSON

// Connect to MongoDB
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch(err => console.error(err));

// Use Routes
app.use('/auth', authRoutes); // Route untuk login dan signup
app.use('/profile', profileRoutes); // Route untuk profile
app.use('/volunteers', verifyToken, volunteerRoutes); // Route untuk volunteers (dengan authentication)
app.use('/locations', locationRoutes); // Route untuk lokasi

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the volunteering app!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});