// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');

// Middleware untuk verifikasi token
exports.verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ error: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to authenticate token' });
    }

    req.user = decoded; // Menyimpan informasi user di request
    next();
  });
};


