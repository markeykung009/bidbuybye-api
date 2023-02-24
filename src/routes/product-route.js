const express = require('express');

const ProductController = require('../controllers/product-controller');

const router = express.Router();

router.get('/:id', ProductController.getProductDetail);
router.get('/price/:id', ProductController.getPrice);
router.get('/', ProductController.getAllSize);

module.exports = router;
