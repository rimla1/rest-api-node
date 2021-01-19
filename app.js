const express = require('express');
const app = express();

const orderRoutes = require('./api/routes/orders')
const productRoutes = require('./api/routes/products')

app.use('/products', productRoutes)
app.use('/orders', orderRoutes)

module.exports = app;