const {
  Product,
  Brand,
  Category,
  Bid,
  ProductSize,
  Size
} = require('../models');

exports.getProduct = async (req, res, next) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Category }, { model: Brand }]
    });
    console.log(products, 'products');
    res.status(201).json({ products });
  } catch (err) {
    next(err);
  }
};

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

exports.getPriceAsk = async (req, res, next) => {
  try {
    const asks = await Product.findOne({
      attributes: ['id'],
      where: { id: req.params.id },
      include: [
        {
          model: ProductSize,
          attributes: ['productId'],
          include: {
            model: Bid,
            where: {
              type: 'SELLER',
              isSold: false
            },
            attributes: ['price']
          }
        }
      ]
    });
    // let x = JSON.parse(JSON.stringify(asks.ProductSizes));
    const allPrice = asks.ProductSizes.map((el) => {
      return el.Bids.map((el) => {
        return el.price;
      });
    }).flat();

    const minPrice = Math.min(...allPrice);
    res.status(200).json({ minPrice });
  } catch (err) {
    next(err);
  }
};

//get Price Bid
exports.getPriceBid = async (req, res, next) => {
  try {
    const asks = await Product.findOne({
      attributes: ['id'],
      where: { id: req.params.id },
      include: [
        {
          model: ProductSize,
          attributes: ['productId'],
          include: {
            model: Bid,
            where: {
              type: 'BUYER',
              isSold: false
            },
            attributes: ['price']
          }
        }
      ]
    });
    // let x = JSON.parse(JSON.stringify(asks.ProductSizes));
    const allPrice = asks.ProductSizes.map((el) => {
      return el.Bids.map((el) => {
        return el.price;
      });
    }).flat();

    const minPrice = Math.max(...allPrice);
    res.status(200).json({ minPrice });
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
