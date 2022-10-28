const express = require('express');
const cors = require('cors');

const { productRouter } = require('./router');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/products', productRouter);

module.exports = app;