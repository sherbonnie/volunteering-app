const mongoose = require('mongoose');

// Schema untuk data lokasi
const locationSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Nama lokasi
  description: { type: String, required: true }, // Deskripsi lokasi
  latitude: { type: Number, required: true }, // Latitude lokasi
  longitude: { type: Number, required: true }, // Longitude lokasi
  needHelp: { type: Boolean, required: true }, // Status butuh bantuan
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
