const Joi = require('joi');

const validate = require('./validate');

const profileSchema = Joi.object({
  firstName: Joi.string().required().messages({
    'string.empty': 'first name is required'
  }),
  lastName: Joi.string().required().messages({
    'string.empty': 'last name is required'
  }),
  birthDate: Joi.date().required().messages({
    'string.empty': 'birthday is required',
    'any.required': 'birthday is required',
    'date.base': 'Invalid date format. Please use YYYY-MM-DD',
    'any.invalid': 'Invalid date format. Please use YYYY-MM-DD'
  }),
  email: Joi.string().email({ tlds: false }).required().messages({
    'string.empty': 'email is required',
    'string.email': 'email must be a valid email address'
  }),
  mobilePhone: Joi.string().required().length(10).pattern(/^\d+$/).messages({
    'string.empty': 'mobile phone is required',
    'string.pattern.base': 'mobile phone must be a number',
    'string.length': 'mobile phone must be exactly 10 digits'
  }),
  address: Joi.string().required().messages({
    'string.empty': 'address is required'
  })
});

exports.validateProfile = validate(profileSchema);
