const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { response } = require('../../app');

const Product = require('../models/product')

router.get('/', async (req, res, next) => {
    const getProducts = await Product.find()
    res.status(200).json(getProducts)
});

router.post('/', async (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        price: req.body.price
    })
    productPosted = await product.save()
    res.status(200).json(productPosted)

});

router.get('/:productId', async (req, res, next) => {
    const id = req.params.productId;
    product = await Product.findById(id)
    res.status(200).json(product)
})

router.patch('/:productId', async (req, res, next) => {
    const id = req.params.productId;
    const product = await Product.findOneAndUpdate({ _id: id }, { $set: req.body })
    res.status(201).json(product)
})

router.delete('/:productId', async (req, res, next) => {
    const id = req.params.productId;
    const product = await Product.deleteOne({ _id: id })
    res.status(201).json(product)
})

module.exports = router; 