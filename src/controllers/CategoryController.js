const { Category, Product } = require('../models');

exports.getCategory = async (req, res, next) => {
  try {
    const category = await Category.findAll({
      include: [
        {
          model: Product
        }
      ]
    });
    console.log(category, 'category');
    res.status(201).json({ category });
  } catch (err) {
    next(err);
  }
};
