const { productModel } = require('../model');
const { validateId, validateProduct } = require('./validations/validationsInputValues');

const findAll = async () => {
  const products = await productModel.findAll();
  return { type: null, message: products };
};

const findById = async (productId) => {
  const error = validateId(productId);
  if (error.type) return error;

  const product = await productModel.findById(productId);
  if (product) return { type: null, message: product };
  return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};

const createProduct = async (name, price, in_stock) => {
  const error = validateProduct(name, price, in_stock);
  if (error.type) return error;

  const newProductId = await productModel.create({ name, price, in_stock });
  const newProduct = await productModel.findById(newProductId);

  return { type: null, message: newProduct };
};


const updateProduct = async (productId, name, price, in_stock) => {
  const error = await validateProduct(name, price, in_stock);
  if (error.type) return error;

  const errorId = validateId(productId);
  if (errorId.type) return errorId;

  await productModel.update(productId, { name, price, in_stock });

  const result = await productModel.findById(productId);
  return { type: null, message: result };
};

const deleteProduct = async (productId) => {

  await productModel.remove(productId);

  const result = await productModel.findById(productId);

  return { type: null, message: result };
};


module.exports = {
  findAll,
  findById,
  createProduct,
  updateProduct,
  deleteProduct
}
