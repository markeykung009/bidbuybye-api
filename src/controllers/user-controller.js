const fs = require('fs');
const { User, Order, Bid, ProductSize, Product, Size } = require('../models');
const cloudinary = require('../utils/cloudinary');

//update profile picture
exports.updateProfilePicture = async (req, res, next) => {
  try {
    let value;
    if (!req.file) {
      res.status(200).json({ message: 'No file uploaded' });
    }
    console.log('------------------------req file', req.file);

    const profilePicture = await cloudinary.upload(
      req.file.path,
      req.user.profilePicture
        ? cloudinary.getPubilcId(req.user.profilePicture)
        : null
    );

    value = { profilePicture };
    console.log(value, '*****************');
    console.log('********');
    console.log(req.user.dataValues.id);
    console.log('********');
    console.log(req.file.path);
    console.log('********');

    await User.update(value, {
      where: { id: req.user.dataValues.id }
    });
    res.status(200).json(value);
  } catch (err) {
    next(err);
  } finally {
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
  }
};

// update user profile
exports.updateUserInfo = async (req, res, next) => {
  try {
    const value = req.body;
    console.log('-----------------------------> ', req.body);
    await User.update(value, {
      where: { id: req.user.dataValues.id }
    });
    res.status(200).json(value);
  } catch (err) {
    next(err);
  }
};

// find order history from user id
// exports.userHistory = async (req, res, next) => {
//   try {
//     const history = await User.findOne({
//       where: { id: req.user.dataValues.id },
//       include: [
//         {
//           model: Order,
//           include: {
//             model: Bid,
//             attributes: ['equipment', 'type', 'price', 'product_size_id'],
//             include: {
//               model: Product,
//               attributes: ['title', 'product_image']
//             }
//           },
//           include: {
//             model: Size,
//             attributes: ['size_product']
//           }
//         }
//       ]
//     });

//     res.status(200).json({ history });
//   } catch (err) {
//     next(err);
//   }
// };
exports.userHistory = async (req, res, next) => {
  try {
    const history = await User.findOne({
      where: { id: req.user.dataValues.id },
      attributes: ['first_name', 'last_name'],
      include: [
        {
          model: Order,
          attributes: ['transaction_id'],
          include: [
            {
              model: Bid,
              attributes: ['equipment', 'type', 'price', 'product_size_id']
            },
            {
              model: Size,
              attributes: ['size_product']
            },
            { model: Product, attributes: ['title', 'product_image'] }
          ]
        }
      ]
    });

    res.status(200).json({ history });
  } catch (err) {
    next(err);
  }
};
