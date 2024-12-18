// locationController.js
const Location = require('../models/locationModel');

// Get All Locations
exports.getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).send('Error fetching locations');
  }
};

// Get Location by ID
exports.getLocationById = async (req, res) => {
  const { id } = req.params;
  try {
    const location = await Location.findById(id);
    if (!location) return res.status(404).send('Location not found');
    res.status(200).json(location);
  } catch (error) {
    res.status(500).send('Error fetching location');
  }
};

// Add New Location
exports.addLocation = async (req, res) => {
  const { name, description, latitude, longitude, needHelp } = req.body;
  
  const newLocation = new Location({
    name,
    description,
    latitude,
    longitude,
    needHelp
  });
  
  try {
    const savedLocation = await newLocation.save();
    res.status(201).json(savedLocation);
  } catch (error) {
    res.status(500).send('Error adding location');
  }
};
