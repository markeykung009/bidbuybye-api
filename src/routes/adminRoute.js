const express = require('express');

const authAdminController = require('../controllers/authAdminController');

const router = express.Router();

router.post('/', authAdminController.login);
router.get('/adminOrder', authAdminController.adminOrder);

module.exports = router;
