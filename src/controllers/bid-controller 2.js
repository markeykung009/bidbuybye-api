const {
  Product,
  Brand,
  Category,
  Bid,
  ProductSize,
  Size
} = require('../models');

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
