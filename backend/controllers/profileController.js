// controllers/profileController.js

const Profile = require('../models/profileModel'); // Sesuaikan dengan model yang kamu gunakan

// Fungsi untuk membuat profil baru
exports.createProfile = async (req, res) => {
  try {
    const { name, bio, avatarUrl } = req.body;

    if (!name || !bio || !avatarUrl) {
      return res.status(400).json({ error: 'All fields are required: name, bio, avatarUrl' });
    }

    // Jika kamu menggunakan MongoDB, kamu bisa menyimpan data ke model Profile
    const newProfile = new Profile({ name, bio, avatarUrl });
    await newProfile.save();

    return res.status(201).json({ message: 'Profile created successfully', profile: newProfile });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
};

// Fungsi untuk mendapatkan profil berdasarkan userId
exports.getProfileByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    // Cari profil berdasarkan userId
    const profile = await Profile.findOne({ userId });
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    return res.status(200).json(profile);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
};
