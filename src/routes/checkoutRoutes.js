const express = require('express');
const router = express.Router();

const { checkoutCreditCard } = require('../controllers/checkoutControl');
const checkoutControl = require('../controllers/checkoutControl');
const orderController = require('../controllers/checkoutControl');
const bidController = require('../controllers/checkoutControl');

router.post('/checkout-credit-card', checkoutCreditCard);
router.post(
  '/',

  orderController.createOrder
);

router.get('/getAllOrderProduct', checkoutControl.getAllOrder);
router.get('/getAllBidProduct', bidController.getAllBid);

module.exports = router;
