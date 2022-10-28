const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

const addProductSchema = Joi.object({
  name: Joi.string().min(3).required(),
  price: Joi.number().required(),
  in_stock: Joi.number().required() });

module.exports = {
  idSchema,
  addProductSchema
};
