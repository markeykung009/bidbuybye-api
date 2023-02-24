const { Brand, Product } = require('../models');

exports.getBrand = async (req, res, next) => {
  try {
    const brand = await Brand.findAll({
      include: [
        {
          model: Product
        }
      ]
    });
    console.log(Brand, 'Brand');
    res.status(201).json({ brand });
  } catch (err) {
    next(err);
  }
};
