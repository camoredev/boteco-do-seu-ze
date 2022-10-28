const { expect } = require('chai');
const sinon = require('sinon');

const { productModel } = require('../../../src/model');
const productService = require('../../../src/service/products.service');
const { mockProducts } = require('../mock/products.mock');

describe('Testando product service', function () {
  describe('Listando produtos', function () {
    it('Caso de sucesso, model retorna um array com elementos', async function () {
      sinon.stub(productModel, 'modelGetAll').resolves(mockProducts);

      const result = await productService.serviceGetAll();

      expect(result.message).to.be.a('array');
      expect(result.message).to.be.eq(mockProducts);
    });
  });
});