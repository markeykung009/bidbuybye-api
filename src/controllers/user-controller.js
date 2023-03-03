const fs = require('fs');
const { User } = require('../models');
const cloudinary = require('../utils/cloudinary');

exports.updateProfilePicture = async (req, res, next) => {
  try {
    let value;
    if (!req.file) {
      res.status(200).json({ message: 'No file uploaded' });
    }
    console.log('------------------------req file', req.file);

    // upload (filepath, publicId)
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
