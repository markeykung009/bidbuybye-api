const express = require('express');

const BidController = require('../controllers/bid-controller');

const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.post('/', authenticate, BidController.postBid);
router.get('/priceBySize/:productId/:sizeId', BidController.getPriceBySize);
router.get(
  '/priceMaxBySize/:productId/:sizeId',
  BidController.getPriceMaxBySize
);
router.get('/bidask', authenticate, BidController.getAllBids);

router.put('/deleteBid/:id', authenticate, BidController.deleteBid);

module.exports = router;
