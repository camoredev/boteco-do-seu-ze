const mockProducts = [{
  "id": 1,
  "name": "Coca-cola",
  "price": 7.5,
  "in_stock": 10
},
{
  "id": 2,
  "name": "Frango a passarinho",
  "price": 25.3,
  "in_stock": 30
}];

const returnService = {
  status: 200,
  message: mockProducts
}

module.exports = {
  mockProducts,
  returnService,
}