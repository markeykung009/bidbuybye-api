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
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        mobilePhone: user.mobilePhone,
        birthDate: user.birthDate,
        address: user.address,
        profilePicture: user.profilePicture,
        lineToken: user.lineToken,
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

exports.googleLogin = async (req, res, next) => {
  try {
    let g_user = jwtDecode(req.body.token);
    const { email, given_name, family_name } = g_user;
    const user = await User.findOne({
      where: {
        email: email
      }
    });
    console.log('----------------g', g_user);
    console.log('----------------fami', family_name);
    // console.log(user?.fname);
    let newuser;
    if (!user) {
      newuser = await User.create({
        email: email,
        firstName: given_name,
        lastName: family_name
      });
    }
    console.log('--------------fn', newuser);
    // console.log(jwt.sign(user, 'secretkeyyy'));
    const accessToken = jwt.sign(
      {
        id: user ? user.id : newuser.id,
        firstName: user ? user.firstName : newuser.firstName,
        lastName: user ? user.lastName : newuser.lastName,
        email: user ? user.email : newuser.email,
        mobilePhone: user ? user.mobilePhone : newuser.mobilePhone,
        birthDate: user ? user.birthDate : newuser.birthDate,
        address: user ? user.address : newuser.address,
        profilePicture: user ? user.profilePicture : newuser.profilePicture,
        lineToken: user ? user.lineToken : newuser.lineToken,
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

exports.getMe = (req, res, next) => {
  try {
    console.log(res.user);
    res.status(200).json({ user: req.user });
  } catch (err) {
    next(err);
  }
};
