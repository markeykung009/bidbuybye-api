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

const { sendLinenoti } = require('../service/linenoti-service');

exports.adminOrder = async (req, res, next) => {
  try {
    const adminOrder = await Order.findAll({
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
    console.log('adminOrder', adminOrder);
    console.log(req.user.id, 'userId: req.user.id ');

    res.status(200).json(adminOrder);
  } catch (err) {
    next(err);
  }
};

exports.updateStatusShipped = async (req, res, next) => {
  try {
    const updateStatusShipped = await OrderStatus.findOne({
      where: {
        orderId: req.body.orderId
      }
    });

    if (req.body.action === 'shipped') {
      await OrderStatus.update(
        { status: 'SHIPPED' },
        {
          where: {
            id: updateStatusShipped.id
          }
        }
      );
    }

    sendLinenoti(2, 'สินค้าคุณถูกจัดส่งแล้ว');

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
    sendLinenoti(2, 'สินค้าถึงคลังแล้ว');

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

    sendLinenoti(2, 'สินค้าของคุณได้รับการตรวจสอบแล้ว');

    res.status(200).json({ message: 'successVerified  Kub' });
  } catch (err) {
    next(err);
  }
};

exports.updateStatusCancel = async (req, res, next) => {
  try {
    const updateStatusCancel = await OrderStatus.findOne({
      where: {
        orderId: req.body.orderId
      }
    });

    if (req.body.action === 'cancel') {
      await OrderStatus.update(
        { status: 'CANCEL' },
        {
          where: {
            id: updateStatusCancel.id
          }
        }
      );
    }

    sendLinenoti(
      2,
      'สินค้าของคุณไม่ผ่านการตรวจสอบ จะดำเนินการคืนเงินภายใน 30-45 วัน'
    );

    res.status(200).json({ message: 'successcancel  Kub' });
  } catch (err) {
    next(err);
  }
};
