const {
  Order,
  Bid,
  ProductSize,
  Size,
  Product,
  Brand,
  Category,
  User,
  OrderStatus
} = require('../models');
const { v4: uuidv4 } = require('uuid');

const { sendLinenoti } = require('../service/linenoti-service');

const omise = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY
});

exports.checkoutCreditCard = async (req, res, next) => {
  const { email, name, amount, token, userId } = req.body;

  try {
    const customer = await omise.customers.create({
      email,
      description: name,
      card: token
    });

    const charge = await omise.charges.create({
      amount,
      currency: 'thb',
      customer: customer.id
    });

    sendLinenoti(2, 'สินค้าของคุณได้ทำการขายแล้ว');

    res.send({
      amount: charge.amount,
      status: charge.status
    });
  } catch (error) {
    console.log(error);
  }

  // next();
};

exports.createOrder = async (req, res, next) => {
  try {
    const { userId, productId, bidId } = req.body;
    const transactionId = uuidv4();
    const getProductSizeId = await ProductSize.findOne({
      where: {
        productId: productId
      },
      include: { model: Size }
    });
    console.log(getProductSizeId);

    const bid = await Bid.findByPk(bidId);
    if (!bid) {
      return res.status(404).send('Bid not found');
    }
    bid.isSold = true;
    await bid.save();

    const newOrder = await Order.create({
      userId,
      productId,
      transactionId,
      bidId,
      sizeId: getProductSizeId.Size.id
    });

    await OrderStatus.create({
      orderId: newOrder.dataValues.id,
      status: 'CONFIRMED'
    });

    console.log(newOrder);
    res.status(201).send('Order created successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating order');
  }
};

exports.getAllOrder = async (req, res, next) => {
  try {
    // console.log(req.user.id);
    const orderSummary = await Order.findAll({
      where: { userId: req.user.id },
      include: [
        {
          model: Bid,
          include: { model: ProductSize, include: { model: Size } }
        },
        {
          model: Product,
          include: [{ model: Brand }, { model: Category }]
        },
        { model: User }
      ]
    });

    res.status(200).json(orderSummary);
  } catch (err) {
    next(err);
  }
};

exports.getAllBid = async (req, res, next) => {
  try {
    // console.log(req.user.id);
    const getAllBids = await Bid.findAll({
      // where: { userId: req.user.id },
      include: {
        model: User
      }
    });

    res.status(200).json(getAllBids);
  } catch (err) {
    next(err);
  }
};
