const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.send('Yo! It works!');
});

module.exports = router;
