const {
  validateRegister,
  validateLogin
} = require('../validators/auth-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtDecode = require('jwt-decode');
const { User } = require('../models');
const createError = require('../utils/create-error');

exports.register = async (req, res, next) => {
  try {
    const value = validateRegister(req.body);

    const user = await User.findOne({
      where: { email: value.email }
    });

    if (user) {
      createError('email is already in use', 400);
    }

    value.password = await bcrypt.hash(value.password, 12);
    await User.create(value);

    console.log(user);

    res.status(201).json({
      message: 'register succesfully, please login'
    });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    // value : email/password
    const value = validateLogin(req.body);

    // check user in database
    const user = await User.findOne({
      where: { email: value.email }
    });

    if (!user) {
      createError('invalid email or password', 400);
    }

    const isCorrect = await bcrypt.compare(value.password, user.password);

    if (!isCorrect) {
      createError('invalid email or password', 400);
    }

    // payload user
    const accessToken = jwt.sign(
      {
        id: user.id,
        name: user.name,
        email: user.email,
        profileImage: user.profileImage,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.status(200).json({ accessToken });
  } catch (err) {
    next(err);
  }
};

exports.getMe = (req, res, next) => {
  res.status(200).json({ user: req.user });
};

exports.googleLogin = async (req, res, next) => {
  try {
    let g_user = jwtDecode(req.body.token);

    console.log(g_user);
    const { email, fname, lname } = g_user;
    const user = await User.findOne({
      where: {
        email: email
      }
    });
    console.log(user.email);
    let newuser;
    if (!user) {
      newuser = await User.create({
        email: email,
        firstName: fname,
        lastName: lname
      });
    }

    // console.log(jwt.sign(user, 'secretkeyyy'));
    const accessToken = jwt.sign(
      {
        id: user ? user.id : newuser.id,
        name: user ? user.name : newuser.name,
        email: user ? user.email : newuser.email,
        profileImage: user ? user.profileImage : newuser.profileImage,
        createdAt: user ? user.createdAt : newuser.createdAt,
        updatedAt: user ? user.updatedAt : newuser.updatedAt
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );
    console.log(accessToken);
    res.status(200).json({ accessToken });
  } catch (err) {
    next(err);
  }
};

// try {
//   const { credential } = req.body;
//   let g_user = jwtDecode(credential);
//   console.log(credential);
//   const user = await User.findOne({
//     where: {
//       email: g_user.email
//     }
//   });
//   let newuser;
//   if (!user) {
//     newuser = await User.create({
//       email: g_user.email,
//       password: ''
//     });
//   }
//   } catch (err) {
//     next(err);
