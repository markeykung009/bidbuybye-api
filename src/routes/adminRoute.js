const express = require('express');

const AdminController = require('../controllers/AdminController');

const router = express.Router();

router.get('/adminOrder', AdminController.adminOrder);
router.patch('/statusUpdateShipped', AdminController.updateStatusShipped);
router.patch('/statusUpdateArrived', AdminController.updateStatusarrived);
router.patch('/statusUpdateVerified', AdminController.updateStatusVerified);
router.patch('/statusUpdateCancel', AdminController.updateStatusCancel);

module.exports = router;
