const path = require('path');
const express = require('express');
const rootDir = require('../util/path.js');
const productsController = require('../controllers/admin');

const router = express.Router();

router.get('/products', productsController.getProductsPage);

router.post('/add-product', productsController.createProduct);

exports.routes = router;
exports.products = productsController.allProducts;