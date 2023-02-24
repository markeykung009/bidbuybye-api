const express = require('express');
const router = express.Router();

const { checkoutCreditCard } = require('../controllers/checkoutControl');
const checkoutControl = require('../controllers/checkoutControl');

router.post('/checkout-credit-card', checkoutCreditCard);

router.get('/getAllOrderProduct', checkoutControl.getAllOrder);
module.exports = router;
