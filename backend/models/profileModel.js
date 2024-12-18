// models/profileModel.js

const mongoose = require('mongoose');

// Definisikan schema untuk Profile
const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: { type: String, required: true },
  avatarUrl: { type: String, required: true }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
