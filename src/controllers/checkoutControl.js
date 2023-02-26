const {
  Order,
  Bid,
  ProductSize,
  Size,
  Product,
  Brand,
  Category,
  User
} = require('../models');

const omise = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY
});

exports.checkoutCreditCard = async (req, res, next) => {
  const { email, name, amount, token } = req.body;

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

    res.send({
      amount: charge.amount,
      status: charge.status
    });
  } catch (error) {
    console.log(error);
  }

  next();
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
    console.log('orderSummary');

    res.status(200).json(orderSummary);
  } catch (err) {
    next(err);
  }
};
