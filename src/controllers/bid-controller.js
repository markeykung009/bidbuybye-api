const {
  Product,
  Brand,
  Category,
  Bid,
  ProductSize,
  Size
} = require('../models');

//get price for buy at buyer selected size

exports.getPriceBySize = async (req, res, next) => {
  try {
    const getProductSize = await ProductSize.findOne({
      where: { sizeId: req.params.sizeId, productId: req.params.productId }
    });

    const getMinPriceBid = await Bid.findAll({
      where: {
        productSizeId: getProductSize.id,
        type: 'BUYER',
        isSold: false
      },
      attributes: ['price']
    });

    const allPriceBysize = getMinPriceBid
      .map((el) => {
        return el.price;
      })
      .flat();

    const minAskPrice = Math.min(...allPriceBysize);
    res.status(200).json({ minAskPrice });
  } catch (err) {
    next(err);
  }
};

exports.postBid = async (req, res, next) => {
  try {
    const getProductSizeId = await ProductSize.findOne({
      where: {
        sizeId: req.body.sizeId,
        productId: req.body.productId
      }
    });

    const createBid = await Bid.create({
      price: req.body.price,
      type: req.body.type,
      userId: req.user.id,
      ProductSizeId: getProductSizeId.id
    });
    res.status(204).json({ createBid });
  } catch (err) {
    next(err);
  }
};
