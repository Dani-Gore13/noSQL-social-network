const express = require('express');
const thoughtController = require('../controllers/thoughtController');

const router = express.Router();

// Get all thoughts
router.get('/', thoughtController.getThoughts);

// Create a new thought
router.post('/', thoughtController.createThought);

// Delete a thought
router.delete('/:id', thoughtController.deleteThought);

module.exports = router;
