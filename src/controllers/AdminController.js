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

exports.updateStatusconfirmed = async (req, res, next) => {
  try {
    const updateStatusconfirmed = await OrderStatus.findOne({
      where: {
        orderId: req.body.orderId
      }
    });

    if (req.body.action === 'confirmed') {
      await OrderStatus.update(
        { status: 'CONFIRMED' },
        {
          where: {
            id: updateStatusconfirmed.id
          }
        }
      );
    }
    res.status(200).json({ message: 'success Kub' });
  } catch (err) {
    next(err);
  }
};

exports.updateStatusarrived = async (req, res, next) => {
  try {
    const updateStatusarrived = await OrderStatus.findOne({
      where: {
        orderId: req.body.orderId
      }
    });

    if (req.body.action === 'arrived') {
      await OrderStatus.update(
        { status: 'ARRIVED' },
        {
          where: {
            id: updateStatusarrived.id
          }
        }
      );
    }
    res.status(200).json({ message: 'successarrived Kub' });
  } catch (err) {
    next(err);
  }
};

exports.updateStatusVerified = async (req, res, next) => {
  try {
    const updateStatusVerified = await OrderStatus.findOne({
      where: {
        orderId: req.body.orderId
      }
    });

    if (req.body.action === 'verified') {
      await OrderStatus.update(
        { status: 'VERIFIED' },
        {
          where: {
            id: updateStatusVerified.id
          }
        }
      );
    }
    res.status(200).json({ message: 'successVerified  Kub' });
  } catch (err) {
    next(err);
  }
};

exports.updateStatusCompleted = async (req, res, next) => {
  try {
    const updateStatusCompleted = await OrderStatus.findOne({
      where: {
        orderId: req.body.orderId
      }
    });

    if (req.body.action === 'completed') {
      await OrderStatus.update(
        { status: 'COMPLETED' },
        {
          where: {
            id: updateStatusCompleted.id
          }
        }
      );
    }
    res.status(200).json({ message: 'successcompleted  Kub' });
  } catch (err) {
    next(err);
  }
};
