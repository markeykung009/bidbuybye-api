const {
  Product,
  Brand,
  Category,
  Bid,
  ProductSize,
  Size
} = require('../models');
const Sequelize = require('Sequelize');

//  find product from id
exports.getProductDetail = async (req, res, next) => {
  try {
    const products = await Product.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Brand
        },
        { model: Category }
      ]
    });
    res.status(200).json({ products });
  } catch (err) {
    next(err);
  }
};

exports.getPrice = async (req, res, next) => {
  try {
    const asks = await ProductSize.findOne({
      where: { productId: req.body.productId },
      include: [
        {
          model: Bid,
          where: {
            type: 'SELLER',
            isSold: false
          }
        },
        { model: Product }
      ]
    });

    res.status(200).json({ asks });
  } catch (err) {
    next(err);
  }
};

//get all size
exports.getAllSize = async (req, res, next) => {
  try {
    const getAllSizeShoes = await Size.findAll({
      where: { label: 'Shoes' }
    });

    const getAllSizeApperal = await Size.findAll({
      where: { label: 'Apparel' }
    });
    res.status(200).json({ getAllSizeShoes, getAllSizeApperal });
  } catch (err) {
    next(err);
  }
};
