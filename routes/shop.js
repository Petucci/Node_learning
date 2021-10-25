const express = require('express');
const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getShopPage);
router.get('/cart', shopController.getCartPage);
router.get('/products', shopController.getProductsPage);
router.get('/orders', shopController.getOrdersPage);

module.exports = router;