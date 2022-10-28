const productService = require('../service/products.service');
const errorMap = require('../utils/errorMap');

const getAllProducts = async (_req, res) => {
  const { type, message } = await productService.findAll();

  if (type) return res.status(errorMap.mapError(type)).json(message);

  res.status(200).json(message);
};

const getProductById = async (req, res) => {
  const productId = Number(req.params.id);
  const { type, message } = await productService.findById(productId);

  if (type) return res.status(errorMap.mapError(type)).json(message);

  res.status(200).json(message);
};

const createProduct = async (req, res) => {
  const { name, price, in_stock } = req.body;

  const { type, message } = await productService.createProduct(name, price, in_stock);

  if (type) return res.status(errorMap.mapError(type)).json(message);

  res.status(201).json(message);
};

const updateProduct = async (req, res) => {
  const { name, price, in_stock } = req.body;
  const productId = Number(req.params.id);

  const { type, message } = await productService.updateProduct(productId, name, price, in_stock);

  if (type) return res.status(errorMap.mapError(type)).json(message);

  res.status(201).json(message);
};

const deleteProduct = async (req, res) => {
  const productId = Number(req.params.id);

  const { type, message } = await productService.deleteProduct(productId);

  if (type) return res.status(errorMap.mapError(type)).json(message);

  res.status(201).json(message);
};


module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
}
