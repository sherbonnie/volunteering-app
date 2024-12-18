const mongoose = require('mongoose');

// Define schema for User
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }, // Menambahkan relasi ke Profile
});

const User = mongoose.model('User', userSchema);

module.exports = User;

