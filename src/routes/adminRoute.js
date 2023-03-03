const express = require('express');

const AdminController = require('../controllers/AdminController');

const router = express.Router();

router.get('/adminOrder', AdminController.adminOrder);

module.exports = router;
