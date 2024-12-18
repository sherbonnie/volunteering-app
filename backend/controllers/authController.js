const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Sign-up controller
exports.signup = async (req, res) => {
  console.log("Signup request received");  // Menambahkan log untuk request sign up

  const { email, password } = req.body;

  try {
    // Menambahkan log untuk memastikan email dan password diterima
    console.log(`Received email: ${email} and password: ${password}`);

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    console.log("User created successfully");  // Log setelah user berhasil dibuat
    res.status(201).send('User created');
  } catch (error) {
    console.error("Error creating user:", error);  // Log jika terjadi error
    res.status(500).send('Error creating user');
  }
};

// Login controller
exports.login = async (req, res) => {
  console.log("Login request received");  // Menambahkan log untuk request login

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");  // Log jika user tidak ditemukan
      return res.status(404).send('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Invalid credentials");  // Log jika kredensial tidak cocok
      return res.status(401).send('Invalid credentials');
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log("Login successful, token generated");  // Log setelah login berhasil
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error logging in:", error);  // Log jika terjadi error
    res.status(500).send('Error logging in');
  }
};


