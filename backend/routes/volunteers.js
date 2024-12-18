const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');  // Tambahkan library jwt untuk verifikasi token
const Volunteer = require('../models/volunteerModel'); // Model untuk data volunteer
const User = require('../models/userModel'); // Model untuk data user

// POST untuk menambahkan volunteer
router.post('/', async (req, res) => {
  const { name, skills, location, available, avatarUrl } = req.body;

  try {
    // Ambil token dari header authorization
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];  // Bearer <token>
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    // Verifikasi token dan ambil userId
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    // Cek apakah userId valid
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Buat data volunteer baru
    const newVolunteer = new Volunteer({
      userId,
      name,
      skills,
      location,
      available: available ?? true, // Default true jika tidak diberikan
      avatarUrl,
    });

    const savedVolunteer = await newVolunteer.save();
    res.status(201).json({ message: 'Volunteer added successfully', data: savedVolunteer });
  } catch (error) {
    res.status(500).json({ message: 'Error adding volunteer', error: error.message });
  }
});

// GET untuk mendapatkan daftar volunteer
router.get('/', async (req, res) => {
  try {
    // Ambil semua data volunteer
    const volunteers = await Volunteer.find();
    res.status(200).json({ message: 'Volunteers retrieved successfully', data: volunteers });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving volunteers', error: error.message });
  }
});

module.exports = router;
