const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Get all users
router.get('/', userController.getUsers);

// Create a new user
router.post('/', userController.createUser);

// Update a user
router.put('/:id', userController.updateUser);

// Delete a user
router.delete('/:id', userController.deleteUser);

module.exports = router;
