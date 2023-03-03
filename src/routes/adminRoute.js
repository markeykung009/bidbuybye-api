const express = require('express');

const AdminController = require('../controllers/AdminController');

const router = express.Router();

router.get('/adminOrder', AdminController.adminOrder);
router.patch('/statusUpdateConfirmed', AdminController.updateStatusconfirmed);
router.patch('/statusUpdateArrived', AdminController.updateStatusarrived);
router.patch('/statusUpdateVerified', AdminController.updateStatusVerified);
router.patch('/statusUpdateCompleted', AdminController.updateStatusCompleted);

module.exports = router;
