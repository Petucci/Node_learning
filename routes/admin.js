const path = require('path');
const express = require('express');
const rootDir = require('../util/path.js');
const productsController = require('../controllers/admin');

const router = express.Router();

router.get('/products', productsController.getProductsPage);

router.post('/add-product', productsController.createProduct);
router.post('/edit-product', productsController.updateProduct);
router.post('/delete-product', productsController.deleteProduct);


exports.routes = router;
exports.products = productsController.allProducts;