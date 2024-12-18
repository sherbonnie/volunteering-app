const mongoose = require('mongoose');

// Define schema for Volunteer
const volunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  skills: { type: [String], required: true }, // Skills of volunteer
  location: { type: String, required: true },
  available: { type: Boolean, default: true }, // Availability status
  avatarUrl: { type: String },
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;
