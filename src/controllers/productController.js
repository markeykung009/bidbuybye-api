const { Product, Category, Brand } = require('../models');

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
