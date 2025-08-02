const express = require('express');
const router = express.Router();

// Dummy ticket creation
router.post('/create', (req, res) => {
  const { title, description } = req.body;

  // TODO: Save this to MongoDB
  res.json({
    success: true,
    message: 'Ticket created successfully',
    data: { title, description },
  });
});

// Dummy ticket listing
router.get('/list', (req, res) => {
  // TODO: Fetch tickets from DB
  res.json({
    success: true,
    tickets: [
      { id: 1, title: 'Bug in UI', description: 'Navbar not responsive' },
      { id: 2, title: 'Login Error', description: 'Token missing' },
    ],
  });
});

module.exports = router;
