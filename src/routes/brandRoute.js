const express = require('express');
const router = express.Router();

const brandController = require('../controllers/brandController');

router.get('/getBrand', brandController.getBrand);

module.exports = router;
