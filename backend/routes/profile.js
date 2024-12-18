// routes/profile.js

const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController'); // Mengimpor controller

// Route untuk POST data profile
router.post('/', profileController.createProfile); // Memanggil fungsi createProfile dari controller

// Route untuk GET data profile berdasarkan userId
router.get('/:userId', profileController.getProfileByUserId); // Memanggil fungsi getProfileByUserId dari controller

module.exports = router;
