const connection = require('./db/connection');
const camelize = require('camelize');
const snakeize = require('snakeize');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products',
  );
  return result;
}

const findById = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );
  return camelize(result);
};

const create = async (product) => {
  const columns = Object.keys(snakeize(product))
    .map((key) => `${key}`)
    .join(', ');

  const placeholders = Object.keys(product)
    .map((_key) => '?')
    .join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO products (${columns}) VALUES (${placeholders})`,
    [...Object.values(product)],
  );

  return insertId;
};

const update = async (productId, dataToUpdate) => {
  const formattedColumns = Object.keys(snakeize(dataToUpdate))
    .map((key) => `${key} = ?`)
    .join(', ');

  return connection.execute(
    `UPDATE products SET ${formattedColumns} WHERE id = ?`,
    [...Object.values(dataToUpdate), productId],
  );
};

const remove = async (productId) => {
  return connection.execute(
    `DELETE FROM products WHERE id = ?`,
    [productId],
  );
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
}