const Volunteer = require('../models/volunteerModel');

// Get All Volunteers
exports.getAllVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.status(200).json(volunteers);
  } catch (error) {
    res.status(500).send('Error fetching volunteers');
  }
};

// Get Volunteer by ID
exports.getVolunteerById = async (req, res) => {
  const { volunteerId } = req.params;
  
  try {
    const volunteer = await Volunteer.findById(volunteerId);
    if (!volunteer) return res.status(404).send('Volunteer not found');
    res.status(200).json(volunteer);
  } catch (error) {
    res.status(500).send('Error fetching volunteer');
  }
};
