const express = require('express');

const ProductController = require('../controllers/product-controller');

const router = express.Router();

router.get('/:id', ProductController.getProductDetail);

module.exports = router;
