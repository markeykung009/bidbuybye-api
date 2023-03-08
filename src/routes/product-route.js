const express = require('express');

const ProductController = require('../controllers/product-controller');

const router = express.Router();

router.get('/getProduct', ProductController.getProduct);
router.get('/getProductMinbit', ProductController.getProductMinbit);
router.get('/getAllBid', ProductController.getAllBid);
router.get('/:id', ProductController.getProductDetail);
router.get('/priceAsk/:id', ProductController.getPriceAsk);
router.get('/priceBid/:id', ProductController.getPriceBid);
router.get('/', ProductController.getAllSize);

module.exports = router;
