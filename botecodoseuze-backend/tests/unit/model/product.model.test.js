const { expect } = require('chai');
const sinon = require('sinon');
const { productModel } = require('../../../src/model');
const connection = require('../../../src/model/db/connection');

describe('Model de produtos', function () {
  describe('Listar todos os produtos', function () { 
    const expectReturn = [
      {
        "id": 3,
        "name": "Suco de laranja",
        "price": 8,
        "in_stock": 10
      }
    ];

    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves([expectReturn]);
    });

    it('Deve retornar um array com todos os elementos', async function () {
      const result = await productModel.modelGetAll();

      expect(result).to.be.a('array');
      expect(result).to.be.deep.eq(expectReturn);
    });

    afterEach(() => {
      sinon.restore();
    })
  });
});