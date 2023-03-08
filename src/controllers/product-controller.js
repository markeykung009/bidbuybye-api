const {
  Product,
  Brand,
  Category,
  Bid,
  ProductSize,
  Size,
  sequelize
} = require('../models');

exports.getProduct = async (req, res, next) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Category }, { model: Brand }]
    });
    res.status(201).json({ products });
  } catch (err) {
    next(err);
  }
};

exports.getProductMinbit = async (req, res, next) => {
  try {
    const products = await ProductSize.findAll({
      include: [
        {
          model: Product,
          include: [
            {
              model: Brand
            },
            {
              model: Category
            }
          ]
        },
        {
          model: Bid,
          where: {
            type: 'SELLER'
          },
          attributes: ['price']
        }
      ]
    });

    let output = products.map((el) => {
      return {
        ProductSizeId: el.id,
        product: el.Product,
        sizeId: el.sizeId,
        productId: el.productId,
        minbid: Math.min(...el.Bids.map((el) => el.price))
      };
    });

    res.status(201).json({ output });
  } catch (err) {
    next(err);
  }
};

exports.getAllBid = async (req, res, next) => {
  try {
    const getAllBids = await Product.findAll({
      attributes: ['id', 'title', 'ProductImage', 'brandId', 'categoryId'],
      include: [
        {
          model: ProductSize,
          attributes: ['id', 'sizeId', 'productId'],
          include: {
            model: Bid,
            attributes: ['price', 'type']
          }
        }
      ]
    });

    res.status(200).json(getAllBids);
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
    const allPrice = asks.ProductSizes.map((el) => {
      return el.Bids.map((el) => {
        return el.price;
      });
    }).flat();

    const maxPrice = Math.max(...allPrice);
    const minBidPrice = Math.min(...allPrice);

    res.status(200).json({ maxPrice, minBidPrice });
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
