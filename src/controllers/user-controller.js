const fs = require('fs');
const { User } = require('../models');
const cloudinary = require('../utils/cloudinary');

exports.updateProfilePicture = async (req, res, next) => {
  try {
    let value;
    // if (!req.file) {
    //   createError("profile image is require");
    // }
    console.log('------------------------req file', req.file);
    // req.files has path as key

    // upload (filepath, publicId)
    const profilePicture = await cloudinary.upload(
      req.file.path,
      req.user.profilePicture
        ? cloudinary.getPublicId(req.user.profilePicture)
        : null
    );

    value = { profilePicture };
    console.log(value, '*****************');
    console.log('********');
    console.log(req.user.dataValues.id);
    console.log('********');
    console.log(req.file.path);
    console.log('********');

    if (User && req.user.dataValues.id) {
      // check if User object and id is defined
      await User.update(value, {
        where: { id: req.user.dataValues.id }
      });
      res.status(200).json(value);
    } else {
      throw new Error('User object or id is undefined');
    }
    // await User.update(value, {
    //   where: { id: req.user.dataValues.id }
    // });
    // res.status(200).json(value);
    // value = url profileImage
    // "profileImage": "https://res.cloudinary.com/dhgny94kc/image/upload/v1675919318/1675915242378428504823.jpg"
  } catch (err) {
    next(err);
  } finally {
    if (req.file) {
      fs.unlinkSync(req.file.path);
      // delete file
    }
  }
};
