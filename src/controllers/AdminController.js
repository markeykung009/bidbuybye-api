const {
  User,
  Order,
  Bid,
  Product,
  ProductSize,
  Size,
  Category,
  Brand,
  OrderStatus
} = require('../models');

exports.adminOrder = async (req, res, next) => {
  try {
    const adminOrder = await Order.findAll({
      where: { userId: req.user.id },
      include: [
        {
          model: Bid,
          include: { model: ProductSize }
        },
        {
          model: Product,
          include: [{ model: Brand }, { model: Category }]
        },
        { model: User },
        { model: OrderStatus },
        { model: Size }
      ]
    });
    console.log('adminOrder');
    console.log(req.user.id, 'userId: req.user.id ');

    res.status(200).json(adminOrder);
  } catch (err) {
    next(err);
  }
};
