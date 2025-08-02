const express = require('express');
const router = express.Router();

// Dummy login route
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // TODO: Replace this with actual DB user verification
  if (email === 'anoopcgc199@gmail.com' && password === 'Anoop@2003') {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

module.exports = router;
