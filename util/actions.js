const ProductAction = require('../models/product-action');
const Product = require('../models/product');

module.exports.getProductDetails = function(product) {
    return new ProductAction('Details', `/details/${product.id}`, 'get');
}

module.exports.addToCart = function(product) {
    return new ProductAction('Add to cart', '/add-to-cart');
}