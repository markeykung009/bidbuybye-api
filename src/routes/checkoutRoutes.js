const express = require('express');
const { checkoutCreditCard } = require('../controller/checkoutControl');

const router = express.Router();

router.post('/checkout-credit-card', checkoutCreditCard);

module.exports = router;
