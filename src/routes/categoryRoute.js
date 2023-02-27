const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/CategoryController');

router.get('/getCategory', categoryController.getCategory);

module.exports = router;
